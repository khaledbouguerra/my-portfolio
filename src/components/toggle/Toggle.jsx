import React, {useContext} from 'react'
import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import {ThemeContext} from "../../context";
export default function Toggle() {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode
   const handleClick=(e)=>{
       theme.dispatch({type:'TOGGLE'});
    }

    return (
        <div className='t' onClick={handleClick}>
            <img src={Sun} alt="" className="t-icon"/>
            <img src={Moon} alt="" className="t-icon"/>
            <div className="t-button"   style={{left:darkMode?"0":"25px"}}></div>
        </div>
    )
}
