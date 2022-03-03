import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    // <></> => denotes fragment
  const {transactions} = useContext(GlobalContext)
  const totalArr = transactions.map(transact => {
    return transact.amount;
  });

  const totalAmt = totalArr.reduce((acc, val) => acc+val, 0).toFixed(2)
  return (
    <>
      <h4>Balance</h4>
      <h1 id="balance">${totalAmt}</h1>
    </>
  );
};
