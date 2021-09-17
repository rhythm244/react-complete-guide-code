import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIdValid, setAmountIdValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIdValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id, // this changed!,
          type: "number",
          min: "number",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" onClick={submitHandler}>
        + Add
      </button>
      {!amountIdValid && <p>Plase enter valid number!</p>}
    </form>
  );
};

export default MealItemForm;
