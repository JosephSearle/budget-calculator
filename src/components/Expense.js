import './Expense.css'
import bin from '../assets/bin.png'

export default function Expenses({ expenseIndex, expenseName, expenseCost, handleDelete }) {

    function handleDeleteExpense() {
        handleDelete(expenseIndex);
    }

    return (
        <span id="expense-container">
            <span id="expense-labels">
                <label>{expenseName}</label>
                <label>£{expenseCost}</label>
            </span>
            <button onClick={handleDeleteExpense}><img alt='bin' style={{width: 30}} src={bin} /></button>
        </span>
    );
}