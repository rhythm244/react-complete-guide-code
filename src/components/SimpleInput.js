import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setenteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  const formSubmitssionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid && enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setenteredEmail("");
    setEnteredNameTouched(false);
    setenteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputIsValid
    ? "form-control invalid"
    : "form-control ";

  const nameInputChangehandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlur = () => {
    setEnteredNameTouched(true);
  };
  const emailInputChangehandler = (event) => {
    setenteredEmail(event.target.value);
  };

  const emailInputBlur = () => {
    setenteredEmailTouched(true);
  };

  return (
    <form onSubmit={formSubmitssionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangehandler}
          //onBlur จะทำงานเมื่อ Input Lose focus
          onBlur={nameInputBlur}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangehandler}
          //onBlur จะทำงานเมื่อ Input Lose focus
          onBlur={emailInputBlur}
          value={enteredEmail}
        />
        {emailInputIsValid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
