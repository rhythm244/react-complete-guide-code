import { useReducer } from "react";

const initaiInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }

  //init state
  return initaiInputState;
};

const useInputThong = (validateFn) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initaiInputState
  );

  const inputChangehandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const valueIsValid = validateFn(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    inputChangehandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputThong;
