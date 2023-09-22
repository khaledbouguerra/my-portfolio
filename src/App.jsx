import Intro from "./components//intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import {useContext, useEffect} from "react";
import {ThemeContext} from "./context";
import { useTranslation } from "react-i18next";
import { Suspense } from 'react';
import ToggleLanguage from "./components/toggleLanguage/ToggleLanguage";
function App() {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

        return (
            <div style={{backgroundColor:darkMode?"#222":"#fff",color:darkMode&&"#fff"}}>
                <ToggleLanguage/>
                <Toggle/>
                <Intro/>
                <About/>
                <ProductList/>
                <Contact/>
            </div>
        );

}

export default function WrappedApp() {
    return (
        <Suspense fallback="...loading">
            <App />
        </Suspense>
    )
}
