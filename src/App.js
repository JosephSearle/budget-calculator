import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Income from './components/Income';
import Results from './components/Results';

function App() {

  const [ income, setIncome ] = useState('');
  const [ grossIncome, setGrossIncome ] = useState(0);
  const [ expenses, setExpenses ] = useState([]);

  function handleIncome(newIncome) {
    setIncome(() => newIncome);
  }

  function handleAddExpense(name, cost) {
    setExpenses((prevExpenses) => {
        const updatedExpenses = [
        {name: name, cost: parseFloat(cost)},
        ...prevExpenses
        ]
        return updatedExpenses;
    });
  }

  function handleDeleteExpense(index) {
    setExpenses((prevExpenses) => {
        const updatedExpenses = prevExpenses.filter((_, i) => i !== index);
        return updatedExpenses;
    })
  }

  const calculateGrossIncome = useCallback(() => {
    let totalExpense = 0;
    expenses.forEach(expense => totalExpense = totalExpense + expense.cost);
    const gross = income - totalExpense;
    setGrossIncome(() => gross.toFixed(2));
  }, [expenses, income]);
    
  useEffect(() => {
    calculateGrossIncome();
  }, [income, expenses, calculateGrossIncome])

  return (
    <div className="App">
      <Header />
      <Income income={income} handleIncome={handleIncome}/>
      <Expenses expenses={expenses} handleAddExpense={handleAddExpense} handleDeleteExpense={handleDeleteExpense}/>
      <Results gross={grossIncome}/>
    </div>
  );
}

export default App;
