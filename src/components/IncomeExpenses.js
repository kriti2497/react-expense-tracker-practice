import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)

  const incomeValArr = transactions.map(transact => {
    return transact.amount >= 0 ? transact.amount : 0;
  });

  const expenseValArr = transactions.map(transact => {
    return transact.amount < 0 ? transact.amount : 0;
  });

  // console.log(incomeValArr, expenseValArr)

  const income = incomeValArr.reduce((prev, curr) => prev+curr, 0)
  const expense = expenseValArr.reduce((prev, curr) => prev+curr, 0)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
};
