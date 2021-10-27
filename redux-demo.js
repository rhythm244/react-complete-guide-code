const redux = require("redux");

//Reducer should be a pure function.
//ตอนที่ createStore ครั้งแรก ต้อง สร้าง object initail state ไว้ด้วย ----> state = { counter: 0 }
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

//ตัวนี้เหมือนเป็น Component นึงที่ให้ redux ชี้มาได้
const counterSubscriber = () => {
  const lastedState = store.getState();
  console.log(lastedState);
};

//เอา redux ชี้ไปที่ Component
//มันจะไม่เกิดอะไรขึ้นถ้าไม่ dispatch
//เมื่อเกิดการ dispatch ฟังก์ชั่นที่ถูก subscribe จะถูกรันอีกครั้งเพราะ state change
store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
