import React, { useCallback, useState } from "react";

import "./App.css";
import SecDemo from "./components/Demo/secDemo";
import Button from "./components/UI/Button/Button";

function SecApp() {
  const [showpara, setShowpara] = useState(false);

  const [allowToggle, setallowToggle] = useState(false);

  const toggleShowpara = useCallback(() => {
    if (allowToggle) {
      setShowpara((prev) => !prev);
    }
    //ถ้าไม่ใส่ dependencies allow toggle มันจะเป็นค่าเดิมตลอดไม่เปลี่ยน
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setallowToggle(true);
  };

  console.log("APP RUNNING.");
  return (
    <div className="app">
      <h1>Hi There!</h1>
      <SecDemo show={showpara} />
      {/* <SecDemo show={false} /> */}

      {/* ตรงนี้จะมีความต่างจากด้านบนเพราะมันเป็น function  */}
      {/* function มันจะสร้างขึ้นมาใหม่ทุกครั้งที่ SecApp re render */}
      {/* เพราะฉะนั้นเราจะต้องใช้ useCallback เพื่อให้มันเป็นอันเดิม ไม่งั้น */}
      {/* ไม่งั้นถึงเราใช้ memo ใน Button ไปแล้ว Button มันก็จะ rerender อยู่ดีเพราะ */}
      {/* เราส่ง function ตัวใหม่เข้าไปตลอด ถ้าไม่ใช้ useCallback */}
      <Button onClick={allowToggleHandler}>Allow Toggle.</Button>
      <Button onClick={toggleShowpara}>Toggle Paragragh</Button>
    </div>
  );
}

export default SecApp;
