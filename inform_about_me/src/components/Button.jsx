import React from "react";
import style from "../styles/Button.module.css";
import plus from "../pictures/plus.svg";

function Button({ text, typeButton, add, remove, child, save }){

    switch(typeButton){
        case "Add_On":
            return(
                <button 
                    className={style.buttonAdd}
                    type="button"
                    onClick={() => add()}
                >
                    <img src={plus} alt="plus" className={style.buttonAdd__plus}/>
                    <span className={style.buttonAdd__text__On}>{text}</span>
                </button>
            )
        case "Add_Off":
            return(
                <button 
                    className={style.buttonAdd}
                    type="button"
                    onClick={() => add()}
                >
                    <span className={style.buttonAdd__text__Off}>{text}</span>
                </button>
            )
        case "Delete":
            return(
                <button
                    className={style.buttonDel}
                    type="button"
                    onClick={() => remove(child)}
                >
                    {text}
                </button>
            )
        case "Save":
            return(
                <button
                    className={style.buttonSave}
                    type="submit"
                    onClick={() => save()}
                    form="children_form"
                >
                    {text}
                </button>
            )
    }
}

export default Button;