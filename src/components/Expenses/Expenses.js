import React, {useState} from 'react';
import Card from "../UI/Card";
import './Expenses.css';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {

    const { expenses } = props;

    const [filteredYear, setFilteredYear] = useState("2020");

    // eventually when we update year --> component is getting re-render; --> why
    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    let filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filteredYear} onFilterChanged={filterChangedHandler}/>
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList filteredExpenses={filteredExpenses}/>               
            </Card>
        </div> 
    );
}

export default Expenses;