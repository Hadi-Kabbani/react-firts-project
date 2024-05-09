function Trasaction({ items, updateTransaction }) {
    function updateTransactionList(e) {
        let updatedTransaction = {
            amount: e.children[0].textNodes,
            description: e.children[0].textNodes
        }
        console.log(updatedTransaction)
        updateTransaction();
    }
    function updateTransactionList(e) {
        let index = e.classList[0];
        updateTransaction(index);

    }
    return items.map((ele, index) => (
        <li key={index} className={`${ele.className} w-100 d-flex align-items-center justify-content-evenly ${ele.amount < 0 ? "danger text-bg-danger" : "success text-bg-success"} p-1 mt-2 mb-2`}>
            <span className="text-light fs-5 fw-bold">{ele.description}</span>
            <span className="-text-light fs-6">{ele.amount}</span>
            <button className={`${ele.amount < 0 ? "btn btn-danger p-2" : "btn btn-success p-2"} fs-6`} onClick={(e) => updateTransactionList(e.target.parentNode)}>update</button>
            < button className={`danger-btn`} >x</button>
        </li >
    ));
}

export default Trasaction;