import React from "react";
import style from "../styles/Button.module.css";
import plus from "../pictures/plus.svg";

function Button({ src, alt, text, typeButton }){

    switch(typeButton){
        case "Add":
            return(
                <button 
                    className={style.buttonAdd}
                    type="button"
                >
                    <img src={plus} alt="plus" className={style.buttonAdd__plus}/>
                    <span className={style.buttonAdd__text}>{text}</span>
                </button>
            )
        case "Delete":
            return(
                <button
                    className={style.buttonDel}
                    type="button"
                >
                    Удалить
                </button>
            )
    }
}

export default Button;