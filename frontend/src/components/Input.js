import React from 'react';
import './Input.css';

function Input(props) {
    return (
        <form action="" className={props.formClass}>
            <label className="my-2" htmlFor="budget-name">{props.budgetName}</label>
            <input className="my-1" type="text" name="budget-name" id="budget-name" />
            <label className="my-2" htmlFor="budget-amount">{props.budgetAmount}</label>
            <input className="my-1" type="text" name="budget-amount" id="budget-amount" />
            <button className={props.buttonClass} >{props.button}</button>
        </form>
    )
}

export default Input;