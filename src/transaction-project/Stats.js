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

        <div className="row d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-12">
                <h3 className="balance fs-3 fw-bold text-uppercase text-center text-secondary mb-3">
                    Your Balance is:
                    <span className={balance > 0 ? "text-success ms-2" : balance < 0 ? "text-danger ms-2" : "text-secondary ms-2"} >
                        {balance}
                    </span>
                </h3>
            </div>
            <div className="col-12 col-md-6 ">
                <h6 className="income-div text-uppercase fs-6 fw-bold">Income: <span className="ms-2">{incomes}</span></h6>
            </div>
            <div className="col-12 col-md-6 ">
                <h6 className="expense-div text-uppercase fs-6 fw-bold">Expense: <span className="ms-2">{expenses}</span></h6>
            </div>
        </div >

    );
}
export default Stats;