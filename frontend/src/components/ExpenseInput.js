import React from 'react';
import './Input.css';

function ExpenseInput() {
    return (
        <form action="" className="input expense-input">
            <label className="my-2" htmlFor="expense">Please enter your expense</label>
            <input type="text" name="expense" id="expense" />
            <label className="my-2" htmlFor="amount-expense">Please enter expense amount</label>
            <input type="number" name="amount-expense" id="amount-expense" />
            <button className="btn btn-danger my-2">Add expense</button>
        </form>
    )
}

export default ExpenseInput;
