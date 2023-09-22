import {createContext,useReducer} from "react";
import {useTranslation} from "react-i18next";
export const ThemeContext=createContext()
const INITIAL_STATE={darkMode:false,language:'fr'};

const themeReducer=(state,action)=>{
    switch (action.type){
        case 'TOGGLE':
            return {...state,darkMode: !state.darkMode
            }
        case 'LANGUAGE_TOGGLE'  :
            return {...state,language:action.payload}
        default:
            return state
    }
}

export const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(themeReducer,INITIAL_STATE)
    return (
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )

}