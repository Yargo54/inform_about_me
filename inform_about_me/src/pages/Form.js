import React, { useState } from "react";
import style from "../styles/Form.module.css";
import Input from "../components/Input";
import Button from "../components/Button";
import AboutMe from "../components/AboutMe";
import AboutChild from "../components/AboutChild";

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
        <div className={style.mainForm}>
            <AboutMe />
            <Button text="Добавить ребёнка" typeButton="Add" add={addChildren}/>
            <AboutChild remove={delChildren} childrenArray={childrenArray}/>
            {
                childrenArray.length != 0
                    ?
                        <Button text="Сохранить" typeButton="Save"/>
                    :
                        ''
            }
        </div>
    )
}

export default Form;