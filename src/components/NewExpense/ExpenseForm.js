import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };



    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangedHandler} value={enteredAmount} type='number' min='.01' step='0.01'></input>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangedHandler} value={enteredDate} type='date' min="2019-01-01" max="2022-01-01"></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;