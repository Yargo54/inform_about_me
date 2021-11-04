import React from "react";
import style from "../styles/AboutMe.module.css"
import Input from "../components/Input";
import { useSelector } from "react-redux";

function AboutMe({ page, nameMe, ageMe, setName, setAge }) {

    switch(page){
        case "form":
            return(
                <form className={style.formPersInform}>
                    <div className={style.titlePersInformForm}>Персональные данные</div>
                    <label className={style.labelPersInform}>
                        <Input 
                            title="Имя" 
                            type="text" 
                            placeholder="Введите здесь ваше имя"
                            value={nameMe}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label className={style.labelPersInform}>
                        <Input 
                            title="Возраст" 
                            type="number" 
                            placeholder="Введите здесь ваш возраст (цифрой)"
                            value={ageMe}
                            onChange={e => setAge(e.target.value)}
                        />
                    </label>
                </form>
            )
        case "preview":
            return(
                <form className={style.formPreviewAboutMe}>
                    <div className={style.titlePersInformPreview}>Персональные данные</div>
                    <label>
                        {localStorage.getItem('name') && localStorage.getItem('age')
                            ?
                                <div className={style.inform}>
                                    {localStorage.getItem('name')}, {localStorage.getItem('age')} лет
                                </div>
                            : 
                                ""
                        }
                    </label>
                </form>
            )
    }
    
}

export default AboutMe;