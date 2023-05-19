import React from "react";
import Head from "../head/index.jsx";
import List from "../list/index.jsx";
import "./style.css";

function Cart({cart, onRemoveItem, onClose, sum, count}) {
    return (
        <div className="Overlay">
            <div className="Cart">
                <div className="Cart-Header">
                    <Head title="Корзина"/> 
                    <button onClick={onClose}>Закрыть</button>   
                </div>
                <List list={cart} onClick={onRemoveItem} buttonText="Удалить" count={count}/>
                <div className="Cart-Total">
                    {`Итого ${sum} ₽`}
                </div>
            </div>
        </div>  
    )
}

export default Cart;