import React, { useState } from "react";
import style from "../styles/Form.module.css";
import Button from "../components/Button";
import AboutMe from "../components/AboutMe";
import AboutChild from "../components/AboutChild";

function Form() {

    const [formData, updateFormData] = useState([])

    const handleCgange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const[childrenArray, setChildren] = useState([]);

    const[nameMe, setName] = useState('');
    const[ageMe, setAge] = useState('');

    const addChildren = () => {
        if(childrenArray.length !== 5){
            const newChild = {
                id: childrenArray.length,
                name: 'name' + childrenArray.length,
                age: 'age' + childrenArray.length
            }
            setChildren([...childrenArray, newChild])
        } else {
            alert('Вы добавили максимум')
        }
    }

    const delChildren = (child) => {
        setChildren(childrenArray.filter(ch => ch.id !== child.id))
    }

    const saveInform = () => {
        localStorage.setItem('name', nameMe)
        localStorage.setItem('age', ageMe)
    }

    return(
        <div className={style.mainForm}>
            <AboutMe 
                page="form" 
                nameMe={nameMe} 
                ageMe={ageMe} 
                setName={setName} 
                setAge={setAge}
            />
            {
                childrenArray.length < 5
                    ?
                        <Button 
                            text="Добавить ребёнка" 
                            typeButton="Add_On" 
                            add={addChildren}
                        />
                    :
                        <Button 
                            text="Добавить ребёнка" 
                            typeButton="Add_Off" 
                            add={addChildren}
                        />
            }
            <AboutChild 
                remove={delChildren} 
                childrenArray={childrenArray}
                page="form"
                formData={formData}
                handleCgange={handleCgange}
            />
            {
                childrenArray.length !== 0
                    ?
                        <Button text="Сохранить" typeButton="Save" save={saveInform}/>
                    :
                        ''
            }
        </div>
    )
}

export default Form;