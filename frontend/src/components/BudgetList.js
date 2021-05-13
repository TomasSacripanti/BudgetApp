import React from "react";
import { Link } from "react-router-dom";

function BudgetList(props) {
  if (!props.budgets) {
    return (
      <Link className="btn btn-success mt-3" to="/budget">Create a Budget</Link>
    )
  }
  return (
    props.budgets.forEach(budget => {
      <Link className="btn btn-primary">{budget.name}</Link>
    })
  )
}

export default BudgetList;
