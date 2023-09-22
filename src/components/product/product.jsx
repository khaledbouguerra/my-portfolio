import React, {useContext, useState} from 'react'
import './product.css'
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {ThemeContext} from "../../context";

export default function Product({project}) {
    const [open, setOpen] = useState(false);
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    const onOpenModal = (e) => {
        e.preventDefault()
        setOpen(true)
    };
    const closeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='close-btn' width="28" height="28"  viewBox="0 0 50 50"  style={{postion:"absolute",top:"30px", right:"28px"}}>
            <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
        </svg>
    );
    const onCloseModal = () => setOpen(false);
    return (
        <div className="product">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href='#' onClick={onOpenModal} target="_blank" rel="noreferrer">
                <img src={project.img} alt="" className="p-img"/>
            </a>
            <Modal open={open} onClose={onCloseModal} center classNames={{modal: darkMode?'customModalStyleDark':'customModalStyle'}} closeIcon={closeIcon} style={{backgroundColor:darkMode && "#333"}}>
                <h2>{project?.title}</h2>
                <div className="model-content">
                <p>
                    {project?.desc}
                </p>

                <h4>Stack :</h4>
                <p>
                    {project?.stack?.api}
                    <br/>
                    {project?.stack?.front}
                    <br/>
                    {project?.stack?.tools}
                    <br/>
                    { project.code &&"code :"}
                    {
                        project?.code &&
                       <a href={project?.code} target="_blank" rel="noreferrer">github</a>
                    }

                </p>
        </div>
            </Modal>
        </div>
    )
}
