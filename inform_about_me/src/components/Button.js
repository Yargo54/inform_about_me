import React from "react";
import style from "../styles/Button.module.css";
import plus from "../pictures/plus.svg";

function Button({ text, typeButton, add, remove, child }){

    switch(typeButton){
        case "Add":
            return(
                <button 
                    className={style.buttonAdd}
                    type="button"
                    onClick={() => add()}
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
                    onClick={() => remove(child)}
                >
                    Удалить
                </button>
            )
    }
}

export default Button;