import React from "react";
import btnstyleType from "./buttonstyle";

function Button({type,text,styleType,onClickHandler,}){
    return(
        <button className={`px-6 py-3 font-bold rounded-lg shadow-lg   ${btnstyleType(styleType)} `}
        onClick={onClickHandler}
        type={type}
        >{text}</button>
    )
}

export default Button;