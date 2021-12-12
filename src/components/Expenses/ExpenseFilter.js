import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const {selectedYear, onFilterChanged} = props;

    const dropDownChangeHandler = (event) => {
        onFilterChanged(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select value={selectedYear} onChange={dropDownChangeHandler}>
                    <option vlaue="2022">2022</option>
                    <option vlaue="2021">2021</option>
                    <option vlaue="2020">2020</option>
                    <option vlaue="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;