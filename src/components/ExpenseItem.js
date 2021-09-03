import classes from "./ExpenseItem.css";

function ExpenseItem() {



  return (
    <div className="expense-item">
      <div>March 28.</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">249.79</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
