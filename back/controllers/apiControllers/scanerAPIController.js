import scanerController from "../controllers/scanerController.js";

const getAll = async(req,res)=>{
    const propiedad = await scanerController.getAll();
    res.json({data:propiedad})
}

const getById = async (req,res) =>{
    const id = req.params.id
    const propiedad = await scanerController.getById(id);
    res.json({data:propiedad});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const propiedad = await scanerController.getByProperty(property,value);
    res.json({data:propiedad})
}

const create = async(req,res)=>{
    let userID;
    let data;
    console.log('lkjsalkfjsldkjlkdsjfs  ' + req.user)
    if (req.user === undefined || req.user === null) {
        data = req.body
    } else {
        userID = req.user._id
        data = {...req.body,userID}
    }
    const propiedad = await scanerController.create(data);
    res.json({data:propiedad})
}

const update = async(req,res)=>{
    const id = eq.params.id;
    const propiedad = await scanerController.update(id,req.body);
    res.json({data:propiedad})
}

const remove = async(req,res)=>{
    const id = req.params.id;
    const propiedad = await scanerController.remove(id);
    res.json({data:propiedad})
}

export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}