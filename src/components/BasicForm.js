import useInputThong from "../hook/use-customHook-thong";

const isEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  //Name Input
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: nameInputHasError,
    inputChangehandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInputThong(isEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    inputChangehandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset,
  } = useInputThong(isEmpty);

  //Email Input
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    inputChangehandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInputThong(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  console.log(formIsValid);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("test");

    if (!formIsValid) {
      return;
    }

    console.log(firstName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    nameReset();
    lastNameReset();
    emailReset();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={firstName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">LastName must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={email}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be includes @.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
