import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import Transaction from "./Transaction";
import React from 'react';
function TransactionList(){
    const {transactions}=useContext(GlobalContext);
    
    return(
        <>
            <h1>History</h1>
            <ul  className="list">
            {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}></Transaction>
            ))}
            </ul>
        </>
    )
}

export default TransactionList