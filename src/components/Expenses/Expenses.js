import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { Fragment } from "react";

const Expenses = (props) => {
  return (
    <Card className="expense">
      {props.expenses.map((expense) => {
        return (
          <Fragment key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </Fragment>
        );
      })}
    </Card>
  );
}

export default Expenses;
