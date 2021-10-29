import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
import useBump from "../hook/use-bump";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const { btnIsBump } = useBump(cartTotalQuantity);

  const btnClasses = `${classes.button} ${btnIsBump ? classes.bump : ""}`;

  return (
    <button className={btnClasses} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={`${classes.badge} ${classes.bump}`}>
        {cartTotalQuantity}
      </span>
    </button>
  );
};

export default CartButton;
