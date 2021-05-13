import React from 'react';
import BudgetInput from "./BudgetInput.js";
import ExpenseInput from "./ExpenseInput.js";
import Display from "./Display.js";
import ExpenseDetail from "./ExpenseDetail.js";
import './Budget.css';

function Budget() {
    return (
        <div className="d-flex justify-content-around">
            <div className="inputs">
                <BudgetInput></BudgetInput>
                <ExpenseInput></ExpenseInput>
            </div>
            <div className="details">
                <Display name="Budget" amount={0} class="fas fa-money-bill-alt fa-5x"></Display>
                <Display name="Expense" amount={0} class="fas fa-money-check fa-5x"></Display>
                <Display name="Balance" amount={0} class="fas fa-dollar-sign fa-5x"></Display>
            </div>
        </div>
    )
}

export default Budget;