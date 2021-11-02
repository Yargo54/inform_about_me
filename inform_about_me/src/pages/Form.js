import React, { useState } from "react";
import style from "../styles/Form.module.css";
import Input from "../components/Input";
import Button from "../components/Button";

function Form() {

    return(
        <div className={style.personalInform}>
            <form className={style.formPersInform}>
                <div className={style.spanPersInform}>Персональные данные</div>
                <label className={style.labelPersInform}>
                    <Input title="Имя" type="text" placeholder="Введите здесь ваше имя"/>
                </label>
                <label className={style.labelPersInform}>
                    <Input title="Возраст" type="number" placeholder="Введите здесь ваш возраст (цифрой)"/>
                </label>
            </form>
            <Button text="Добавить ребёнка" typeButton="Add"/>
            <div className={style.child__text}>Дети (макс. 5)</div>
            <form className={style.formChildInform}>
                <label className={style.labelChildInform}>
                    <Input title="Имя" type="text" placeholder="Введите имя ребёнка"/>
                </label>
                <label className={style.labelChildInform}>
                    <Input title="Возраст" type="number" placeholder="Введите возраст (цифрой)"/>
                </label>
                <Button text="Добавить ребёнка" typeButton="Delete"/>
            </form>
        </div>
    )
}

export default Form;


















{/* <button 
    className={style.button} 
    type="button"
>
    <img src={plus} alt="plus" className={style.button__plus}/>
    <span className={style.button__text}>Добавить ребёнка</span>
</button> */}