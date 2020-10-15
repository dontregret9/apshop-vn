import React from 'react';
import './Price.css';

function Price(props) {
    if (props.old_price === 0) {
        return (
        <div id="price">
            <span id="new-price">{props.new_price}₫</span>
        </div>
        );
    }
    else {
        return (
            <div id="price">
            <span id="new-price">{props.new_price}₫</span>
            <span id="old-price">{props.old_price}₫</span>
        </div>
        );
    }
}

export default Price;