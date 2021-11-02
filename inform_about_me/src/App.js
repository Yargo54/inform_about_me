import React from "react";
import logo from "./pictures/logo.svg";
import {Link, Route} from "react-router-dom";
import style from "./styles/App.module.css"
import Form from "./pages/Form";
import Preview from "./pages/Preview";

function App() {
  return(
    <>
      <header className={style.header}>
        <img 
          src={logo} 
          alt="logo"
          className={style.img}/>
        <Link 
          to="/form" 
          className={`${style.link} ${style.link__form}`}>
          Форма
        </Link>  
        <Link 
          to="/preview" 
          className={style.link}>
          Превью
        </Link>  
      </header>
      <hr className={style.hr}/>
      <main>
        <Route 
          path='/form' 
          component={Form} 
          exact/>
        <Route 
          path='/preview' 
          component={Preview} 
          exact/>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App;
