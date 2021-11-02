import React, { useState } from "react";
import style from "../styles/Form.module.css";
import Input from "../components/Input";
import Button from "../components/Button";

function Form() {

    let [childrenArray, setChildren] = useState([]);

    const addChildren = () => {
        if(childrenArray.length != 5){
            const newChild = {
                id: Date.now()
            };
            setChildren([...childrenArray, newChild])
        } else {
            alert('Вы добавили максимум')
        }
    }

    const delChildren = (child) => {
        setChildren(childrenArray.filter(ch => ch.id !== child.id))
    }

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
            <Button text="Добавить ребёнка" typeButton="Add" add={addChildren}/>
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
                        <Button text="Добавить ребёнка" typeButton="Delete" remove={delChildren} child={child}/>
                    </>
                )}
                
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