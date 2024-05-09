import { userState } from "react";

function Stats({ items }) {
    let incomes = 0;
    let expenses = 0;
    let balance = 0;
    for (let i = 0; i < items.length; i++) {
        if (!isNaN(items[i].amount)) {
            if (items[i].amount > 0) {
                incomes += parseInt(items[i].amount);
            } else {
                expenses += parseInt(items[i].amount);
            }
        }
    }
    balance = incomes + expenses;
    return (

        <div className="row">
            <h3>Your Balance is: <span className="balance">{balance}</span></h3>
            <h6 className="col-6 income-div">Income: <span className="income ms-2">{incomes}</span></h6>
            <h6 className="col-6 expense-div">Expense: <span className="expense ms-2">{expenses}</span></h6>
        </div>

    );
}
export default Stats;