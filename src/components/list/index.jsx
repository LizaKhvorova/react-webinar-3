import React from "react";
import PropTypes from 'prop-types';
import Item from "../item/index.jsx";
import './style.css';

function List({list, onClick, button, count}){
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} onClick={onClick} button={button} count={count}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
    })).isRequired,
    onClick: PropTypes.func,
};

List.defaultProps = {
    onClick: () => {},
}

export default React.memo(List);
