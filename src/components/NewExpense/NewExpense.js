import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showMenu, setShowMenu] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    };

    const showMenuHandler = () => {
        setShowMenu(!showMenu);
    };

    


    return (
        <div className="new-expense">
            {!showMenu && <button type='button' onClick={showMenuHandler}>Add New Expense</button>}
            {showMenu && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={showMenuHandler} />}
        </div>
    )
}

export default NewExpense;