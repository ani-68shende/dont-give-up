import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const [selected, setSelected] = useState(0);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //to connect to the parent
        props.onAddExpense(expenseData);
        // console.log(expenseData);
        setSelected(0);
    };

    const onSelectedHandler = () => {
        setSelected(1);
    };

    const onUNSelectHandler = () => {
        setSelected(0);
    }

    return (
        <div className='new-expense'>
            {selected === 0 && <button onClick={onSelectedHandler}>Add new expense</button>}
            {selected === 1 && <ExpenseForm onCancel={onUNSelectHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;
