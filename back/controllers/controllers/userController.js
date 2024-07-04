import userModel from "../../models/userModel.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


const getAll = async(userId=null)=> {
    try {
            const datos = await userModel.find();
            return datos;
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getUserData(user){
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
        company: user.company,
        sector: user.sector,
        role: user.role
        
    }
}

const getById = async(id) =>{
    try {
            const datos = await userModel.findById(id);
            return datos;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const getByProperty = async(property,value) =>{
    try {
            const datos = await userModel.find({[property]:value})
            return datos;
    } catch (error) {
        return null;
    }
}

//modificado para que no pida en el login el email y varios console log de comprobacion, aparte expiresIn modificado a '24h'
const login = async (data) => {
    console.log("datalogin", data);
    const { email, password } = data;
    if (!email || !password) {
        return { error: "faltan datos", status: 400 };
    }
    try {
        const users = await getByProperty("email", email);
        const user = users[0];
        console.log("usuario encontrado", user);
        if (!user) {
            return { error: "No existe el usuario", status: 400 };
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return { error: "Combinación de usuario y contraseña erróneos", status: 400 };
        }
        const token = jwt.sign(
            { _id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        const userData = {
            _id: user._id,
            email: user.email,
            role: user.role,
        };
        return { token, user: userData };
    } catch (error) {
        console.error("Error en la función login", error);
        return { error: "Ha habido un error", status: 500 };
    }
}

const register = async(data) => {
    console.log("dataregister",data)
    const {email,username,password,passwordRepeat,company,sector} = data;
    if(!email || !username || !password || !passwordRepeat || !company || !sector){
        return {error:"Falta alguno de los campos"};
    }
    if(password !== passwordRepeat){
        return {error:"Las contraseñas no coinciden"};
    }
    const userData = {
        email,
        username,
        password,
        company,
        sector,
        role:"user"
    }
    const user = await create(userData);
    return user;
}

/* const create = async(data) =>{
    try {
        const datos = await userModel.create(data);
        return datos;
    } catch (error) {
        console.error(error); 
        return null;  
    }
} */
//Añadido el hash para encriptar la contraseña
const create = async(data) =>{
    try {
        const hash = await bcryptjs.hash(data.password,10);
        data.password= hash;
        const user = await userModel.create(data);
        return user;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const olddatos = await userModel.findByIdAndUpdate(id,data);
        const datos = await userModel.findById(id);
        console.log("datos",datos);
        return datos;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const datos = await userModel.findByIdAndDelete(id);
        return datos;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getUserData,
    getById,
    getByProperty,
    login,
    register,
    create,
    update,
    remove
}

export default functions;