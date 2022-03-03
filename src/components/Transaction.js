import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = (props) => {
    const sign = props.transact.amount < 0 ? '-' : '+';
    const classType = sign === '-' ? 'minus' : 'plus'

    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <li className={classType}>
          {props.transact.text} <span>{sign}${Math.abs(props.transact.amount)}</span>
          <button className="delete-btn" onClick={() => deleteTransaction(props.transact.id)}>x</button>
        </li>
    )
}
