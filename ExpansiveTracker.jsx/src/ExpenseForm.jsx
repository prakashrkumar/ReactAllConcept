import React from 'react'

const ExpenseForm = () => {
  return (
    	<form class="expense-form">
			<input placeholder="Expense Title" type="text" value=""/>
			<input placeholder="Amount ₹" type="number" value=""/>
			<button type="submit">Add Expense</button>
		</form>
  )
}

export default ExpenseForm
