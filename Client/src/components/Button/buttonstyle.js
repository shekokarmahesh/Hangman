function btnstyleType(styleType){
    if(styleType==="primary"){
        return "bg-blue-500 hover:bg-blue-700 text-white";
    } else if (styleType==="warning"){
        return "bg-yellow-500 hover:bg-yellow-700 text-white";
    } else if(styleType==="error"){
        return "bg-red-500 hover:bg-red-700 text-white";
    } else if(styleType==="success"){
        return "bg-green-500 hover:bg-green-700 text-white";
    }
}

export default btnstyleType;