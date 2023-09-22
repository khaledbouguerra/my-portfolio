import React from 'react'
import './about.css';

import LeftImg from '../../img/cover_10.png';
import {useTranslation} from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <div className="about">
        <div className="about-left">
            <div className="about-card bg">  </div>
            <div className="about-card">
                <img src={LeftImg} alt="" className="about-img"/>
            </div>
        </div>
        <div className="about-right">
            <h1 className="about-title"> {t('aboutMe.title')}</h1>
            <p className="about-sub">
                {t('aboutMe.sub')}
            </p>
            <p className="about-desc">
                {t('aboutMe.desc_1')}
                <br/>
                {t('aboutMe.desc_2')}
            </p>
{/*            <div className="about-award">
                <img src={Award} alt="" className="about-award-img" />
                <div className="about-award-texts">
                    <h4 className="about-award-title">International Design Awards 2021</h4>
                    <p className="about-award-desc">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                        and fugit.
                    </p>
                </div>
            </div>*/}
        </div>
        </div>
    )
}
