import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ...props.input ensure other prop such as type="text" to input tag */}
      <input id={props.input.id} {...props.input} />
    </div>
  );
};

export default Input;
