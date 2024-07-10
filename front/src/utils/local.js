
const saveToken =(token)=>{
    localStorage.setItem("token",token);
    //una linea donde coja el id del usuario
    
}
const saveUserId =(userId)=>{
    localStorage.setItem("userId",userId);
}

const getToken = ()=>{
    return localStorage.getItem("token");

}

const getUserId = ()=>{
    return localStorage.getItem("userId");
}


export{
    saveToken,
    getToken,
    saveUserId,
    getUserId
}