import { createStore } from "redux";

const initState = { counter: 0, showCounter: true };

//จะแยก Reducer ไปอีกไฟล์นึงก็ได้
const counterReducer = (state = initState, action) => {
  if (action.type === "INCREMENT") {
    return {
      //การ return object แบบนี้มันจะเป็นการ overwriten เป็นวิธีที่ควรทำ
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "TOGGLE") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
