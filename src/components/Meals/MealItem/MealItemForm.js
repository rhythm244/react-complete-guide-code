import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
          id: 'amount_' + props.id, // this changed!,
          type: 'number',
          min: 'number',
          max: '5',
          step: '1',
          defaultValue: '1',
      }} />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
