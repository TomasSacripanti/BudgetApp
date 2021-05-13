import React from 'react';
import './Display.css';

function Display(props) {
    return (
        <div className="display">
            <h3>{props.name}</h3>
            <i className={props.class}></i>
            <p>${props.amount}</p>
        </div>
    )
}

export default Display;
