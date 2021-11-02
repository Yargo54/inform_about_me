import React from "react";
import style from "../styles/AboutMe.module.css"
import Input from "../components/Input";

function AboutMe() {
    return(
        <form className={style.formPersInform}>
            <div className={style.spanPersInform}>Персональные данные</div>
            <label className={style.labelPersInform}>
                <Input title="Имя" type="text" placeholder="Введите здесь ваше имя"/>
            </label>
            <label className={style.labelPersInform}>
                <Input title="Возраст" type="number" placeholder="Введите здесь ваш возраст (цифрой)"/>
            </label>
        </form>
    )
}

export default AboutMe;