import React, {useState} from 'react'

// components
import ExpenseForm from './ExpenseForm'

// css
import './NewExpense.css'

const NewExpense = (props) => {

    const [addExpense, setAddExpense] = useState(false); 

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        }
        props.onAddExpense(expenseData);
        setAddExpense(false);
    }

    const cancelAddExpenseHadler = (status) => {
        setAddExpense(status);
    }

    const addExpenseHandler = () => {
        setAddExpense(true);
    }

    return (
        <div className="new-expense">
            {!addExpense && <button onClick={addExpenseHandler}>Add Expense</button>}
            {addExpense && 
            <div>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelAddExpense={cancelAddExpenseHadler}/>
            </div>}
        </div>
    )
}

export default NewExpense;