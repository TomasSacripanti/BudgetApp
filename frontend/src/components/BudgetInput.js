import React from 'react';
import './Input.css';

function BudgetInput() {
    return (
        <form action="" className="input budget-input">
            <label className="my-3" htmlFor="budget">Please enter your budget</label>
            <input className="my-2" type="text" name="budget" id="budget" />
            <button className="btn btn-info my-2">Calculate</button>
        </form>
    )
}

export default BudgetInput;