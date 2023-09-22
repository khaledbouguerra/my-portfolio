import React, {useContext, useRef, useState} from 'react'
import './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from '@emailjs/browser'
import {Comment} from "react-loader-spinner";
import {ThemeContext} from "../../context";
import {useTranslation} from "react-i18next";

export default function Contact() {
    const PK=process.env.REACT_APP_EMAIL_PUBLIC_KEY;
    const TEMPLATE_ID=process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    console.log('pk ' , PK);
    console.log('TI ', TEMPLATE_ID)
    const { t } = useTranslation();
    const formRef=useRef();
    const [done,setDone]=useState(false);
    const [submitEnabled,setEnableSubmit]=useState(false);
    const [isSendEmailLoading,setSendEmailLoading]=useState(false);
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    const handleSubmit=(e)=>{

        e.preventDefault();
        if(formRef.current.user_name.value && formRef.current.user_subject.value && formRef.current.user_email.value && formRef.current.message.value ){
            setSendEmailLoading(true);
            emailjs.sendForm('service_42gzte2', 'template_8rs7v4i', formRef.current, 'ro71KPyQL5fzNlwf1')
                .then((result) => {
                    console.log(result.text);
                    setDone(true);
                    setTimeout(()=>{
                        setDone(false);
                    },5000)

                    setSendEmailLoading(false)
                }, (error) => {
                    console.log(error.text);
                });
        }
    }
    const handleFormChange=(e)=>{
        if(!formRef?.current?.user_name?.value || !formRef?.current?.user_subject?.value || !formRef?.current?.user_email?.value || !formRef?.current?.message?.value){
            setEnableSubmit(false)
        }else{
            setEnableSubmit(true)
        }
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        {t('contact.title')}
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt=""  className="c-icon" />
                            +33784045229
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            contact@khaledbouguerra.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            92500 Rueil-Malmaison, Île-de-France, France
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>{t('contact.descTitle')}</b>  {t('contact.desc')}
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} onChange={handleFormChange}>
                        <input style={{backgroundColor:darkMode && "#333",color:darkMode && "#fff"}} type="text" placeholder= {t('contact.name')} name="user_name"/>
                        <input style={{backgroundColor:darkMode && "#333",color:darkMode && "#fff"}} type="text" placeholder={t('contact.subject')} name="user_subject"/>
                        <input style={{backgroundColor:darkMode && "#333",color:darkMode && "#fff"}} type="email" placeholder={t('contact.email')} name="user_email"/>
                        <textarea style={{backgroundColor:darkMode && "#333",color:darkMode && "#fff"}} name="message" rows="5" placeholder={t('contact.message')}>

                        </textarea>
                        <Comment
                            visible={isSendEmailLoading}
                            height="40"
                            width="40"
                            ariaLabel="comment-loading"
                            wrapperStyle={{}}
                            wrapperClass="comment-wrapper"
                            color="#fff"
                            backgroundColor="#59b256"
                        />
                        <button disabled={!submitEnabled}>{t('contact.submit')}</button>
                        <span className="email-sent-msg">{done && t('contact.emailSent')}</span>

                    </form>
                </div>
            </div>
        </div>
    )
}
