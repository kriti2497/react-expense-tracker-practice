import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transactn => {
          return <Transaction key={transactn.id} transact={transactn}/>
        })}
        
      </ul>
    </div>
  );
};
