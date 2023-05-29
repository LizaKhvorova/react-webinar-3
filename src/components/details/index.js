import React, { useCallback} from "react";
import {cn as bem} from '@bem-react/classname';
import "./style.css";
import PropTypes, { string } from 'prop-types';

function Details({item, addToBasket}) {
    const cn = bem('Details');
    return(
        <div className={cn()}>
            <div>{item.description}</div>
            <div>Страна производитель: <b>{item.madeIn.title} ({item.madeIn.code})</b></div>
            <div>Категория: <b>{item.category.title}</b></div>
            <div>Год выпуска: <b>{item.edition}</b></div>
            <div className={cn("price")}>{`Цена: ${item.price.toLocaleString("ru-RU")} ₽ `}</div>
            <button
                className={cn("btn")}
                onClick={() => addToBasket(location.pathname.slice(1, location.pathname.length))}
            >Добавить</button>
        </div>
    )
}

Details.propTypes = {
    item: PropTypes.shape({
        _id: string,
        title: string,
        description: string,
        price: string,
        madeIn: string,
        edition: string,
        category: string
    }),
    addToBasket: PropTypes.func
}

export default Details;