import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

//return true if empty
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    //เอาค่าที่ได้มาเชคว่ามัน valid มั้ย
    const enteredNameIsValid = !isEmpty(enteredName); //return true if empty
    const enteredStreetIsValid = !isEmpty(enteredStreet); //return true if empty
    const enteredCityIsValid = !isEmpty(enteredCity); //return true if chars not exactly 5
    const enteredPostalIsValid = !isFiveChars(enteredPostal); //return true if empty

    //ส่วนนี้เป็นการ set ค่า form เพื่อ show ให้ user เห็นว่า ที่คุณใส่ลงมามันไม่ valid
    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    //เอาทั้งหมดมารวมกันใน form valid
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    const userData = {
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    };

    props.onConfirm(userData);
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please Enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please Enter a valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please Enter a valid postalCode!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please Enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
