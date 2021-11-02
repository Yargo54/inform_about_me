import React from "react";
import style from "../styles/AboutChild.module.css"
import Input from "../components/Input";
import Button from "../components/Button";

function AboutChild({ remove, childrenArray }) {
    return(
        <>
            <div className={style.child__text}>Дети (макс. 5)</div>
            <form className={style.formChildInform}>
                {childrenArray.map(child =>
                    <>
                        <label className={style.labelChildInform}>
                            <Input title="Имя" type="text" placeholder="Введите имя ребёнка"/>
                        </label>
                        <label className={style.labelChildInform}>
                            <Input title="Возраст" type="number" placeholder="Введите возраст (цифрой)"/>
                        </label>
                        <Button text="Удалить" typeButton="Delete" remove={remove} child={child}/>
                    </>
                )}
            </form>
        </>
    )
}

export default AboutChild;