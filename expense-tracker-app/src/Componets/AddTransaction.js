import React, { useState } from "react"
import { addTransaction } from "../Context/Action";
function AddTransaction() {
const [text,setText]=useState('');
const [amount,setAmount]=useState();

const onSubmit=e=>{
    e.preventDefault();

    const   newTransaction={
        id:Math.floor(Math.random()*100000000),
        text,
        amount:+amount,
    }

    addTransaction(newTransaction);
}
    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit} name="form">
                <div className='form-control'>
                    <lable htmlFor="text">Text</lable>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."  />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br></br>(Negitive - Expense , Positive - Income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount..."></input>
                </div>
                <button className="btn" type="submit">Add Transaction</button>

            </form>
        </>
    )
}

export default AddTransaction