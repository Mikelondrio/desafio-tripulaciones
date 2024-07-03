/* import { useEffect, useState,useContext } from "react";
import { register, login } from "../api/userApi"
import { saveToken } from "../utils/local";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";


const initialUserData = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    company: "",
    sector: "",
}
const Register = ({ onLogin }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(initialUserData);
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const handleUserData =(e) =>{
        e.preventDefault();
        const data = e.target.value;
        const key = e.target.name;
        setUserData(userData => {
            return {
                ...userData,
                [key]:data
            }
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        if (isRegister) {
            result = await register(userData);
            if (!result.error) {
                setIsRegister(false);
                setError("user registered correctly");
            }
            else {
                setError(result.error);
            }
        }
        else {
            result = await login(userData);
            if (!result.error) {
                setError("login correct");
                setUser(result.user);
                saveToken(result.token);
                navigate("/");
            }
            else {
                setError(result.error);
            }
        }
    }
    return (
        <section className="register-login">
            <h2>{isRegister ? "Register" : "Login"}</h2>
            {error}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input name="username" type="text" value={userData.username} onChange={handleUserData} />
                {isRegister &&
                    <>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" value={userData.email} onChange={handleUserData} />
                    </>
                }
                <label htmlFor="password">Password</label>
                <input name="password" type="password" value={userData.password} onChange={handleUserData} />
                {isRegister &&
                    <>
                        <label htmlFor="passwordRepeat">Repeat Password</label>
                        <input name="passwordRepeat" type="password" value={userData.passwordRepeat} onChange={handleUserData} />
                        <label htmlFor="company">Company</label>
                        <input name="company" type="text" value={userData.company} onChange={handleUserData} />
                        <label htmlFor="sector">Sector</label>
                        <select name="sector" type="text" value={userData.sector} onChange={handleUserData} >
                            <option value="it">Tecnología de la Información</option>
                            <option value="finance">Finanzas</option>
                            <option value="healthcare">Cuidado de la Salud</option>
                            <option value="education">Educación</option>
                            <option value="engineering">Ingeniería</option>
                            <option value="government">Gobierno</option>
                            <option value="media">Medios de Comunicación</option>
                            <option value="retail">Venta al por Menor</option>
                            <option value="manufacturing">Manufactura</option>
                            <option value="transportation">Transporte</option>
                        </select>
                    </>
                    
                }
                <button>{isRegister ? "Register" : "Login"}</button>
            </form>
            <button onClick={() => setIsRegister(register => !register)} >{isRegister ? "Go to Login" : "Go to Register"}</button>
        </section>
    )
}

export default Register; */

import { useState, useContext } from "react";
import { register, login } from "../api/userApi";
import { saveToken } from "../utils/local";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import UserContext from "../context/UserContext";

const initialUserData = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    company: "",
    sector: "",
}

const Register = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(initialUserData);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const schema = Joi.object({
        username: isRegister ? Joi.string().required() : Joi.string().allow(''),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: isRegister ? Joi.string()
            .min(8)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required()
            .messages({
                'string.min': 'Password must be at least {#limit} characters long',
                'string.pattern.base': 'Password must contain only alphanumeric characters',
                'any.required': 'Password is required'
            }) : Joi.string().allow(''),
        passwordRepeat: isRegister ? Joi.string().valid(Joi.ref('password')).required().messages({
            'any.only': 'Passwords do not match',
        }) : Joi.string().allow(''),
        company: isRegister ? Joi.string().required() : Joi.string().allow(''),
        sector: isRegister ? Joi.string().required() : Joi.string().allow(''),
    });

    const validateUserData = () => {
        const { error: validationError } = schema.validate(userData, { abortEarly: false });
        if (validationError) {
            setError(validationError.details.map(err => err.message).join(". "));
            return false;
        }
        return true;
    }

    const handleRegister = async () => {
        if (!validateUserData()) {
            return;
        }

        const result = await register(userData);
        if (!result.error) {
            setIsRegister(false);
            setError("User registered successfully.");
        } else {
            setError(result.error);
        }
    }

    const handleLogin = async () => {
        if (!validateUserData()) {
            return;
        }

        const result = await login(userData);
        if (!result.error) {
            setError("Login successful.");
            setUser(result.user);
            saveToken(result.token);
            navigate("/escaner");
        } else {
            setError(result.error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            handleRegister();
        } else {
            handleLogin();
        }
    }

    const handleUserData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    }

    return (
        <section className="register-login">
            <h2>{isRegister ? "Register" : "Login"}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" value={userData.email} onChange={handleUserData} required />
                {isRegister && (
                    <>
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" value={userData.username} onChange={handleUserData} required />
                    </>
                )}
                <label htmlFor="password">Password</label>
                <input name="password" type="password" value={userData.password} onChange={handleUserData} required />
                {isRegister && (
                    <>
                        <label htmlFor="passwordRepeat">Repeat Password</label>
                        <input name="passwordRepeat" type="password" value={userData.passwordRepeat} onChange={handleUserData} required />
                        <label htmlFor="company">Company</label>
                        <input name="company" type="text" value={userData.company} onChange={handleUserData} />
                        <label htmlFor="sector">Sector</label>
                        <select name="sector" type="text" value={userData.sector} onChange={handleUserData} >
                            <option value="it">Tecnología de la Información</option>
                            <option value="finance">Finanzas</option>
                            <option value="healthcare">Cuidado de la Salud</option>
                            <option value="education">Educación</option>
                            <option value="engineering">Ingeniería</option>
                            <option value="government">Gobierno</option>
                            <option value="media">Medios de Comunicación</option>
                            <option value="retail">Venta al por Menor</option>
                            <option value="manufacturing">Manufactura</option>
                            <option value="transportation">Transporte</option>
                        </select>
                    </>
                )}
                <button type="submit">{isRegister ? "Register" : "Login"}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Go to Login" : "Go to Register"}
            </button>
        </section>
    )
}

export default Register;
