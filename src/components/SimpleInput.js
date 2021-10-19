import useInput from "../hook/user-input";

const SimpleInput = (props) => {
  const validateName = (value) => {
    return value.trim() !== "";
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangehandler,
    inputBlurHandler: nameInputBlur,
    reset: nameReset,
  } = useInput(validateName);

  const validateEmail = (value) => {
    return value.includes("@");
  };

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangehandler,
    inputBlurHandler: emailInputBlur,
    reset: emailReset,
  } = useInput(validateEmail);

  const formSubmitssionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    nameReset();
    emailReset();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

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
        {nameInputHasError && (
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
        {emailInputHasError && (
          <p className="error-text">Email must not be include '@'.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
