import "./ExpenseForm.css";

function ExpenseForm(props) {
  function titleChangeHangler(event) {
    console.log(event.target.value);
  }
  return (
    <form onSubmit={props.onSubmit}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHangler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
