import userController from "../controllers/userController.js";

const getAll = async(req,res)=>{
    const propiedad = await userController.getAll();
    res.json({data:propiedad})
}

const getById = async (req,res) =>{
    const id = req.params.id
    const propiedad = await userController.getById(id);
    res.json({data:propiedad});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const propiedad = await userController.getByProperty(property,value);
    res.json({data:propiedad})
}

const register = async(req,res)=>{
    const user = await userController.register(req.body);
    
    if(!user){
        return res.json({error:"User with that email or username already exists"});
    }

    if(user.error){
        return res.json({error:user.error});
    }
    res.json({data:user})
}
const login = async(req,res) => {
    const data = await userController.login(req.body);
    console.log('Login request body:', req.body);
    if(data.error){
        return res.status(data.status).json({error:data.error});
    }
    res.json(data)
}

const create = async(req,res)=>{
    const propiedad = await userController.create(req.body);
    res.json({data:propiedad})
}

const update = async(req,res)=>{
    const id = eq.params.id;
    const propiedad = await userController.update(id,req.body);
    res.json({data:propiedad})
}

const remove = async(req,res)=>{
    const id = req.params.id;
    const propiedad = await userController.remove(id);
    res.json({data:propiedad})
}

export default{
    getAll,
    getById,
    getByProperty,
    register,
    login,
    create,
    update,
    remove
}