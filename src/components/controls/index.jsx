import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({onGoToCart, count, sum}){
  return (
    <div className='Controls'>
        <div className="Count">
            В корзине: {count? `${count} товара(ов) / ${sum}` : "пусто"}
        </div>
      <button onClick={onGoToCart}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
    onGoToCart: PropTypes.func
};

Controls.defaultProps = {
    onGoToCart: () => {}
}

export default React.memo(Controls);
