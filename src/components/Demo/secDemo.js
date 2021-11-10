import React, { memo } from "react";

import classes from "./DemoList.module.css";

const SecDemo = (props) => {
  console.log("SecDemo RUNNING.");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

//memo ไม่เหมาะกับ Component ที่มีการเปลี่ยนแปลงของ props บ่อยๆ เพราะยังไง Component นั้นมันก็เปลี่ยน
export default memo(SecDemo);
