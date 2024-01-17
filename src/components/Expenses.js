import './Expenses.css';
import { useState } from 'react';
import Expense from './Expense.js';
 
export default function Expenses({ expenses, handleAddExpense, handleDeleteExpense }) {
    const [ name, setName ] = useState('');
    const [ cost, setCost ] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCostChange(event) {
        const val = event.target.value;
        if(onlyContainsNumbers(val) || val === '') setCost(val);
    }

    function handleAdd() {
        if (name === '' || cost === '') {
            console.error('Must have an expense title and name.');
            return;
        }
        handleAddExpense(name, cost);
        setName(() => '');
        setCost(() => '');
    }

    const onlyContainsNumbers = (str) => /^\d*(\.\d*)?$/.test(str);

    return (
        <section id='expense-section'>
            <span id='expense-header'>
                <input id='expense-input-name' type='text' placeholder='Expense Type' value={name} onChange={handleNameChange}/>
                <input type='text' placeholder='Price' value={cost} onChange={handleCostChange}/>
                <button onClick={handleAdd}>Add Expense</button>
            </span>
            <div id='expense-scrollable'>
                {expenses.map((expense, expenseKey) => <Expense key={expenseKey} expenseIndex={expenseKey} expenseName={expense.name} expenseCost={expense.cost} handleDelete={handleDeleteExpense}/>)}
            </div>
        </section>
    );
}