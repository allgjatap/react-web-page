import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //cdo vlere e vendosur te componenti ku perdorim carden do te marr css e saj 
  return <div className={classes}>{props.children}</div>;
}

export default Card;
