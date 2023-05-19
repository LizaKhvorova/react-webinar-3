import React from "react";
import Head from "../head/index.jsx";
import List from "../list/index.jsx";
import "./style.css";

function Cart({cart, onRemoveItem, onClose, sum, button, count}) {
    return (
        <div className="overlay">
            <div className="Cart">
                <div className="Cart-Header">
                    <Head title="Корзина"/> 
                    <button onClick={onClose}>Закрыть</button>   
                </div>
                <List list={cart} onClick={onRemoveItem} button={button} count={count}/>
                <div className="Cart-Total">
                    {`Итого ${sum} ₽`}
                </div>
            </div>
        </div>  
    )
}

export default Cart;