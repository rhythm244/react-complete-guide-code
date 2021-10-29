import { useState, useEffect } from "react";

const useBump = (cartTotalQuantity) => {
  const [btnIsBump, setBtnIsBump] = useState(false);

  useEffect(() => {
    if (cartTotalQuantity === 0) {
      return;
    }
    setBtnIsBump(true);

    const timer = setTimeout(() => {
      setBtnIsBump(false);
    }, 100);

    return () => {
      console.log("Clean up.");
      clearTimeout(timer);
    };
  }, [cartTotalQuantity]);

  return {
    btnIsBump,
  };
};

export default useBump;
