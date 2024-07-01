import scanerModel from "../../models/scanerModel.js";


const getAll = async(scanerId=null)=> {
    try {
        const datos = await scanerModel.find();
        return datos;
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getscanerData(scaner){
    return {
        _id: scaner._id,
        userID: scaner.userID,
        date: scaner.date,
        url: scaner.url,
        data: scaner.sata        
    }
}

const getById = async(id) =>{
    try {
        const datos = await scanerModel.findById(id);
        return datos;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const getByProperty = async(property,value) =>{
    try {
        const datos = await scanerModel.find({[property]:value})
        return datos;
    } catch (error) {
        return null;
    }
}


const create = async(data) =>{
    try {
        const datos = await scanerModel.create(data);
        return datos;
    } catch (error) {
        console.error(error); 
        return null;  
    }
} 


const update = async(id,data) =>{
    try {
        const olddatos = await scanerModel.findByIdAndUpdate(id,data);
        const datos = await scanerModel.findById(id);
        console.log("datos",datos);
        return datos;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const datos = await scanerModel.findByIdAndDelete(id);
        return datos;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getscanerData,
    getById,
    getByProperty,
    create,
    update,
    remove
}

export default functions;