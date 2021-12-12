import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css'


const ExpenseItem = (props) => {
        
    const {date: expenseDate, title: expenseTitle, amount: expenseAmount} = props

    // use state return a previous value and function to update that value
    // so setTitle can be used to update the value;
    const [title, setTitle] = useState(expenseTitle);

    // this function is getting called on clicking;
    const clickHandler = () => { setTitle("Updated"); }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={expenseDate}/>     
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    )
}

export default ExpenseItem;