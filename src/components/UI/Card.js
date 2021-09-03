import "./Card.css";

function Card(props) {
  // children มี className อะไรอีกก็เอามาต่อด้วย
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
