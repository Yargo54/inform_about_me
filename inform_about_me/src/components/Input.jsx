import React from "react";
import style from "../styles/Input.module.css"

function Input({ title, type, placeholder }) {
    return(
        <>
            <div className={style.input__title}>{title}</div>
            <input 
                type={type} 
                placeholder={placeholder}
                className={style.input}
            />
        </>
    )
};

export default Input;