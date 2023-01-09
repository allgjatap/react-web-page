import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); //marrim vetem muajin
  const year = props.date.getFullYear(); //marrim vitin e plote
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); //marrim daten me dy shifra

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
