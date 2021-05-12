import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

function Expenses(props) {

    const [year, setYear] = useState('');

    const saveYearHandler = (selectedYear) => {
        setYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={year} onYearSelect={saveYearHandler} />
                {props.expenses.map(expenses => (
                    <ExpenseItem
                        date={expenses.date}
                        title={expenses.title}
                        amount={expenses.amount}
                        key={expenses.id}
                        />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;