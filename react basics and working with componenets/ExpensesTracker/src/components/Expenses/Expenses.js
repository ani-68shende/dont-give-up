import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpensesChart';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpensesList';

function Expenses(props) {
    // console.log(props);
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (filters) => {
        setFilteredYear(filters);
        console.log(filters);
    }

    const filteredExpenses = props.items.filter((expense) => {
        //if true then the element is included in the list else excluded
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
