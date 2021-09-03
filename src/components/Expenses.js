import './ExpenseItem.css'
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div>
        {props.expenses.map((expense) => {
          return (
            <div key={expense.id}>
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            </div>
          );
        })}
      </div>
    )
}

export default Expenses;