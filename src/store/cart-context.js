import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  //ฟังก์ชั่นด้านล่างนี้ไม่ทำก็ได้ แต่ทำเพื่อให้ IDE แนะนำเวลาจะใช้ในไฟล์อื่น ***
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
