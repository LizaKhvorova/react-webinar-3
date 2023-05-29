import React, {useEffect, useCallback} from "react";
import "./style.css";
import Head from "../head/index.js";
import PageLayout from "../page-layout";
import BasketTool from "../basket-tool";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import {cn as bem} from '@bem-react/classname';
import "./style.css";
import Basket from "../../app/basket";


function Description() {
    const store = useStore();
    const cn = bem('Description');
    const activeModal = useSelector(state => state.modals.name);

    console.log(store);
    useEffect(() => {
        store.actions.description.load(location.pathname);
    }, []);

    const select = useSelector(state => ({
            title: state.description.title,
            description: state.description.description,
            madeIn: state.description.madeIn,
            code: state.description.code,
            category: state.description.category,
            edition: state.description.edition,
            price: state.description.price, 
            amount: state.basket.amount,
            sum: state.basket.sum,
    }));

    const callbacks = {
        // Добавление в корзину
        addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
        // Открытие модалки корзины
        openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    };

    return(
        <PageLayout>
            <Head className={cn("title")} title={select.title}/>
            <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
        sum={select.sum}/>
        <div className={cn()}>
        <div>{select.description}</div>
            <div>Страна производитель: <b>{select.madeIn} ({select.code})</b></div>
            <div>Категория: <b>{select.category}</b></div>
            <div>Год выпуска: <b>{select.edition}</b></div>
            <div className={cn("price")}>{`Цена: ${select.price} ₽ `}</div>
            <button className={cn("btn")} onClick={() => callbacks.addToBasket(location.pathname.slice(1, location.pathname.length))}>Добавить</button>
        </div>
        {activeModal === 'basket' && <Basket/>}
        </PageLayout>  
    )
}

export default Description;