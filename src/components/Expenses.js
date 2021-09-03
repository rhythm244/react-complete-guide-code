import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";

function Expenses(props) {
  return (
    <Card className="expense">
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
    </Card>
  );
}

export default Expenses;
