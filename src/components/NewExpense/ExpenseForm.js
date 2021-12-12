import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    
    /**
     * optimised way of capturing details from form
     */
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })

    // // passing function to setUserInput ensures that react always passes recent state, in order to update.
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredTitle : event.target.value
    //         }
    //     });
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredAmount : event.target.value
    //         }
    //     });
    // }

    // const dateChangedHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredDate : event.target.value
    //         }
    //     });   
    // }

    const {onSaveExpenseData, onCancelAddExpense} = props;

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }

        // communicating to upper component through function passed to form component.
        // component is function so we can pass a function.
        onSaveExpenseData(expenseData);
    }

    const cancelHandler = (event) => {
        onCancelAddExpense(false);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date`</label>
                    <input type="date"value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__action__container">
                <div className="new-expense__actions">
                    <button type="button" onClick={cancelHandler}>Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Save Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;