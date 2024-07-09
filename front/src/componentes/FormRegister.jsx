import { useState, useContext } from "react";
import { register, login } from "../api/userApi";
import { saveToken, saveUserId } from "../utils/local";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import UserContext from "../context/UserContext";
import styles from "./FormRegister.module.css";

const initialUserData = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    company: "",
    sector: "",
}

const FormRegister = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(initialUserData);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const schema = Joi.object({
        username: isRegister ? Joi.string().required() : Joi.string().allow(''),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required(),
        passwordRepeat: isRegister ? Joi.string().valid(Joi.ref('password')).required() : Joi.string().allow(''),
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
            saveUserId(result.user._id);
            navigate("/inicio");
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
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    }

    return (
        <div className={`${styles.container} ${isRegister ? styles.registerBackground : styles.loginBackground}`}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.title}>¡Te damos la bienvenida a Silver Site!</h2>
                    <p className={styles.description}>Nos gustaría saber un poco sobre ti.</p>
                    <p className={styles.description}>De esta forma garantizamos la seguridad de las personas que confían en Seniority.</p>
                    
                    {error && <p className={styles.error}>{error}</p>}
                    
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.input} name="email" type="text" value={userData.email} onChange={handleUserData} required />
                    
                    <label className={styles.label} htmlFor="password">Contraseña</label>
                    <input className={styles.input} name="password" type="password" value={userData.password} onChange={handleUserData} required />
                    
                    {isRegister && (
                        <>
                            <label className={styles.label} htmlFor="username">Nombre</label>
                            <input className={styles.input} name="username" type="text" value={userData.username} onChange={handleUserData} required />
                            
                            <label className={styles.label} htmlFor="passwordRepeat">Confirmar contraseña</label>
                            <input className={styles.input} name="passwordRepeat" type="password" value={userData.passwordRepeat} onChange={handleUserData} required />
                            
                            <label className={styles.label} htmlFor="company">Nombre de empresa</label>
                            <input className={styles.input} name="company" type="text" value={userData.company} onChange={handleUserData} required />
                            
                            <label className={styles.label} htmlFor="sector">Sector</label>
                            <select className={styles.select} name="sector" value={userData.sector} onChange={handleUserData} required>
                                <option value="">Selecciona un sector</option>
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
                    
                    <button type="submit" className={styles.submitButton}>
                        {isRegister ? "Registrar" : "Acceder"}
                    </button>
                </form>
                <p className={styles.toggleForm}>
                    {isRegister ? "¿Ya tienes cuenta? " : "¿No tienes cuenta todavía? "}
                    <button className={styles.toggleButton} onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? "Inicia sesión" : "Regístrate"}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default FormRegister;