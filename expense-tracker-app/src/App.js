// import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddTransaction from './Componets/AddTransaction';
import Balance from './Componets/Balance';
import Header from './Componets/Header';
import IncomeExpense from './Componets/IncomeExpense';
import TransactionList from './Componets/TransactionList';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <div className='container'>
      <Balance></Balance>
      <IncomeExpense></IncomeExpense>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </div>
    </div>
  );
}

export default App;
