import React from 'react'
import './productList.css'
import Product from "../product/product";
import {products} from "../../data";
import {useTranslation} from "react-i18next";

export default function ProductList() {
    const { t } = useTranslation();
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">{t('products.title')}</h1>
                <p className="pl-desc">
                    {t('products.desc')}
                </p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(
                    <Product key={item.id} project={item} />
                ))}


            </div>
        </div>
    )
}
