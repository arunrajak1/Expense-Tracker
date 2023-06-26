import React, { useContext } from "react"
import { deleteTransaction } from "../Context/Action"
import { GlobalContext } from "../Context/GlobalState";
function Transaction({transaction}) {

    const { dispatch } = useContext(GlobalContext);
    const handleClick = (id) => {
        dispatch(deleteTransaction(id));
      };
    const sign=transaction.amount <0? '-':'+';
    return (
        <li className={transaction.amount<0 ? 'minus':'plus'}>{transaction.text}
            <span>{sign}Rs{Math.abs(transaction.amount) }</span>
            <button className='delete-btn' onClick={()=> handleClick(transaction.id)}>x</button>
        </li>

    )
}

export default Transaction