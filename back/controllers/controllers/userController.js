import userModel from "../../models/userModel.js";


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
const login = async(data) =>{
    console.log("datalogin",data)
    const {email,username,password} = data;
    if((!email && !username ) || !password){
        return {error:"faltan datos",status:400};
    }
    try {
        let user;
        if(email){
            const users = await getByProperty("email",email,true);
            user = users[0];
        }
        else{
            const users = await getByProperty("username",username,true);
            user = users[0];
        }
        console.log("usurio",user);
        if(!user){
            return {error:"No existe el usurio",status:400};
        }
        console.log("contraseña",password,user.password);
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return {error:"Combinación de usuario y contraseña erroneos",status:400};
        }
        console.log("login user",user)
        const token = jwt.sign({_id:user._id,username:user.username,role:user.role},process.env.JWT_SECRET,{expiresIn: 60 * 60 * 24})
        const userData ={
            _id: user._id,
            username: user.username,
            role: user.role,
        }
        return {token,user:userData};

        
    } catch (error) {
        console.error(error);
        return {error:"Ha habido un error",status:500};
    }
}
const register = async(data) => {
    console.log("dataregister",data)
    const {email,username,password,passwordRepeat} = data;
    if(!email || !username || !password || !passwordRepeat){
        return {error:"Falta alguno de los campos"};
    }
    if(password !== passwordRepeat){
        return {error:"Las contraseñas no coinciden"};
    }
    const userData = {
        email,
        username,
        password,
        role:"user"
    }
    const user = await create(userData);
    return user;
}

const create = async(data) =>{
    try {
        const datos = await userModel.create(data);
        return datos;
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