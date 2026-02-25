import React from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const App = () => {
  const [expense, setExpense]=useStatae([])
  
  return (
    
	<div class="app-container">
		<h1>💰 Expense Tracker</h1>
		<ExpenseForm/>
		<h3 class="total">Total Expense: ₹750.00</h3>
    <ExpenseList/>
		
	</div>

  )
}

export default App

