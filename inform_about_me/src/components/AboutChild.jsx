import React from "react";
import style from "../styles/AboutChild.module.css"
import Input from "../components/Input";
import Button from "../components/Button";

function AboutChild({ remove, childrenArray, page, formData, handleCgange }) {

    switch(page){
        case "form":
            return(
                <>
                    <div className={style.child__text}>Дети (макс. 5)</div>
                    <form className={style.formChildInform} id="children_form" onSubmit={(e) => {
                        e.preventDefault()
                        localStorage.setItem ("child", JSON.stringify(formData));
                    }}>
                        {childrenArray.map(child =>
                            <>
                                <label className={style.labelChildInform}>
                                    <Input 
                                        title="Имя" 
                                        type="text" 
                                        placeholder="Введите имя ребёнка"
                                        name = {child.name}
                                        onChange={handleCgange}
                                    />
                                </label>
                                <label className={style.labelChildInform}>
                                    <Input 
                                        title="Возраст" 
                                        type="number" 
                                        placeholder="Введите возраст (цифрой)"
                                        name = {child.age}
                                        onChange={handleCgange}
                                    />
                                </label>
                                <Button text="Удалить" typeButton="Delete" remove={remove} child={child}/>
                            </>
                        )}
                    </form>
                </>
            )
        case "preview":
            if(localStorage.length > 0){
                return(
                    <form className={style.previewAboutChild}>
                        <div className={style.titlePersInformPreview}>Дети</div>
                        <label>
                            {
                                JSON.parse(localStorage.getItem ("child")).name0 && JSON.parse (localStorage.getItem ("child")).age0
                                    ?
                                        <div className={`${style.inform} ${style.inform__child__frame}`}>
                                            {JSON.parse (localStorage.getItem ("child")).name0}, {JSON.parse (localStorage.getItem ("child")).age0} лет
                                        </div>
                                    :
                                        ''
                            }
                            {
                                JSON.parse(localStorage.getItem ("child")).name1 && JSON.parse (localStorage.getItem ("child")).age1
                                    ?
                                        <div className={`${style.inform} ${style.inform__child__frame}`}>
                                            {JSON.parse (localStorage.getItem ("child")).name1}, {JSON.parse (localStorage.getItem ("child")).age1} лет
                                        </div>
                                    :
                                        ''
                            }
                            {
                                JSON.parse(localStorage.getItem ("child")).name2 && JSON.parse (localStorage.getItem ("child")).age2
                                    ?
                                        <div className={`${style.inform} ${style.inform__child__frame}`}>
                                            {JSON.parse (localStorage.getItem ("child")).name2}, {JSON.parse (localStorage.getItem ("child")).age2} лет
                                        </div>
                                    :
                                        ''
                            }
                            {
                                JSON.parse(localStorage.getItem ("child")).name3 && JSON.parse (localStorage.getItem ("child")).age3
                                    ?
                                        <div className={`${style.inform} ${style.inform__child__frame}`}>
                                            {JSON.parse (localStorage.getItem ("child")).name3}, {JSON.parse (localStorage.getItem ("child")).age3} лет
                                        </div>
                                    :
                                        ''
                            }
                            {
                                JSON.parse(localStorage.getItem ("child")).name4 && JSON.parse (localStorage.getItem ("child")).age4
                                    ?
                                        <div className={`${style.inform} ${style.inform__child__frame}`}>
                                            {JSON.parse (localStorage.getItem ("child")).name4}, {JSON.parse (localStorage.getItem ("child")).age4} лет
                                        </div>
                                    :
                                        ''
                            }
                        </label>
                    </form>
                )
            } else {
                return(
                    <form className={style.previewAboutChild}>
                        <div className={style.titlePersInformPreview}>Дети</div>
                    </form>
                )
            }
            
    }
    
}

export default AboutChild;