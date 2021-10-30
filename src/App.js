import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./components/store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisble);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  //ใช้ useEffect ในการอัพเดท backend เมื่อ state ของ frontend เปลี่ยนแปลง
  useEffect(() => {
    let timer;
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending....",
          message: "Sending cart data.",
        })
      );
      const response = await fetch(
        "https://react-course-udemy-f670c-default-rtdb.asia-southeast1.firebasedatabase.app/mew4479532214sdvsdCyo9hv458mevtwicouh/redux.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Something error sending request.");
      }

      dispatch(
        uiActions.showNotification({
          status: "seccess",
          title: "Seccess....",
          message: "sent cart data successfully.",
        })
      );

      timer = setTimeout(() => {
        dispatch(uiActions.hieNotification());
      }, 2000);
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error....",
          message: error.message,
        })
      );
    });

    return () => {
      clearTimeout(timer);
    };
  }, [cart, dispatch]);

  //JSX
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
