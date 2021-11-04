import React, { useState } from "react";
import style from "../styles/Input.module.css"

function Input({ name, title, ...props }) {

    return(
        <>
            <div className={style.input__title}>{title}</div>
            <input 
                {...props}
                className={style.input}
                name={name}
            />
        </>
    )
};

export default Input;