import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransactions = () => {

    const [text, settext] = useState('')
    const [amount, setamount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)


    const onSubmitHandler = (event) => {
      event.preventDefault()

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction)

      settext('');
      setamount(0)
    }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => settext(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
