import React from "react";
import "./style.css";
import Head from "../head/index.js";
import PageLayout from "../page-layout";
import BasketTool from "../basket-tool";

function Description({itemTitle}) {
    return(
        <PageLayout>
            <Head>{itemTitle}</Head>
            <BasketTool />
            <div>Описание товара</div>
            <div>Страна производитель</div>
            <div>Категория</div>
            <div>Год выпуска</div>
            <div>Цена</div>
            <dutton>Добавить</dutton>
        </PageLayout>  
    )
}