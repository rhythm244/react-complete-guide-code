import classes from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ...props.input ensure other prop such as type="text" to input tag */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
