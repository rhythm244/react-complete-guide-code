import React from "react";
import Transition from "react-transition-group/transition";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 100,
};

const modal = (props) => {
  return (
    // <Transition
    //   in={props.show}
    //   timeout={animationTiming}
    //   mountOnEnter
    //   unmountOnExit
    //   //สามาถ รัน ฟังก์ชั่นที่คุณอยาก run ภายในการ enter หรือ exit ตามนี้ได้
    //   onEnter={() => console.log("onEnter")}
    //   onEntering={() => console.log("onEnter")}
    //   onEntered={() => console.log("onEntered")}
    //   onExit={() => console.log("onEnter")}
    //   onExiting={() => console.log("onEntering")}
    //   onExited={() => console.log("onEntered")}
    // >
    //   {(state) => {
    //     const cssClasses = [
    //       "Modal",
    //       state === "entering"
    //         ? "ModalOpen"
    //         : state === "exsiting"
    //         ? "ModalClosed"
    //         : null,
    //     ];
    //     return (
    //       <div className={cssClasses.join(" ")}>
    //         <h1>A Modal</h1>
    //         <button className="Button" onClick={props.closed}>
    //           Dismiss
    //         </button>
    //       </div>
    //     );
    //   }}
    // </Transition>
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      //cssClassName มันจะทำให้เราเขียนง่ายขึ้นมาก *ดูจากด้านบนก็ได้ ไม่ต้องใช้ state อะไรมากมาย ถ้าเราไม่ได้ custom อะไรมาก
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
