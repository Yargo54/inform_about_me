import React from "react";
import AboutChild from "../components/AboutChild";
import AboutMe from "../components/AboutMe";
import style from "../styles/Preview.module.css"

function Preview() {
    return(
        <div className={style.mainPreview}>
            <AboutMe page="preview"/>
            <AboutChild page="preview" />
        </div>
    )
}

export default Preview;