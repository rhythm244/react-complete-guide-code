import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  //พอ user กด focus ไปที่อื่น หรือกดเพื่อส่ง form isTouched จะเป็น true(เพราะ onBlur มันจะกระทำเมื่อ lost focus ที่ form นั้น)
  //และถ้าค่าที่ได้รับมาไม่ valid
  //hasError จะ เป็นจริง (true)
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  ////The onblur event occurs when an object loses focus.
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
