import React, {useContext} from 'react'
import En from "../../img/english.png";
import Fr from "../../img/france.png";
import './toggleLanguage.css'
import {ThemeContext} from "../../context";
import {useTranslation} from "react-i18next";

export default function ToggleLanguage() {
    const {  i18n } = useTranslation();
    const language=useContext(ThemeContext);
    const selectedLanguage=i18n.language;
    const handleClick=(e)=>{
        const lng=selectedLanguage==='fr'||selectedLanguage==='fr-FR'?'en':'fr';
        i18n.changeLanguage(lng);
        language.dispatch({type:'LANGUAGE_TOGGLE',payload:lng});
    }
    return (
        <div className='tl' onClick={handleClick} >
            <img src={Fr} alt="" className="tl-icon"/>
            <img src={En} alt=""  className="tl-icon"/>
            <div className="t-button" style={{left:selectedLanguage==='fr'||selectedLanguage==='fr-FR'?"0":"25px"}} ></div>
        </div>
    )
}
