import React from "react";
import style from "../styles/AboutMe.module.css"
import Input from "../components/Input";

function AboutMe({ page }) {
    switch(page){
        case "form":
            return(
                <form className={style.formPersInform}>
                    <div className={style.titlePersInformForm}>Персональные данные</div>
                    <label className={style.labelPersInform}>
                        <Input title="Имя" type="text" placeholder="Введите здесь ваше имя"/>
                    </label>
                    <label className={style.labelPersInform}>
                        <Input title="Возраст" type="number" placeholder="Введите здесь ваш возраст (цифрой)"/>
                    </label>
                </form>
            )
        case "preview":
            return(
                <form className={style.formPreviewAboutMe}>
                    <div className={style.titlePersInformPreview}>Персональные данные</div>
                    <label>
                        <div className={style.inform}>Василий, 30 лет</div>
                    </label>
                </form>
            )
    }
    
}

export default AboutMe;