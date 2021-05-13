import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [year, setYear] = useState('2021');

    const saveYearHandler = (selectedYear) => {
        setYear(selectedYear);
        console.log(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter year={year} onYearSelect={saveYearHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </li>
    )
}

export default Expenses;