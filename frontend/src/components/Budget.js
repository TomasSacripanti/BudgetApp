import React from 'react';
import Input from './Input';
import Display from "./Display.js";
import './Budget.css';

function Budget() {
    return (
        <div className="d-flex justify-content-around">
            <div className="inputs">
                <Input buttonClass="btn btn-info my-2" formClass="input budget-input" budgetName="Please, enter the name of the budget" budgetAmount="Please, enter the amount of the budget" button="Calculate"></Input>
                <Input buttonClass="btn btn-danger my-2" formClass="input expense-input" budgetName="Please, enter the name of the expense" budgetAmount="Please, enter the amount of the expense" button="Spend"></Input>
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