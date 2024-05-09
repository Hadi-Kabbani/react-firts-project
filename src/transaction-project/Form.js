import React, { useState, useEffect } from 'react';
function Form({ addTransaction, updateValue }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState();
    const [key, setKey] = useState(0);
    let num;
    function submitHanddler(e) {
        e.preventDefault();
        if (description !== "" && amount != 0) {
            let newTransaction = {
                description: description,
                amount: amount,
                className: key
            }
            setKey(key + 1);
            addTransaction(newTransaction);
        }
        setDescription("");
        setAmount("");
    }

    return (
        <form onSubmit={submitHanddler}>
            <div className='row'>
                <div className='col-12 form-floating mb-3 '>
                    <input class="form-control" type="text" name="desc"
                        id="desc" placeholder="Enter DescripFtion" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <label for="desc">Enter Description</label>
                </div>
                <div className='col-12 form-floating mb-3' >
                    <input class="form-control" name="amount" id="amount" type="number" placeholder="Enter Amount" onChange={(e) => setAmount(Number(e.target.value))} value={amount} />
                    <label for="amount">Enter Amount</label>
                </div>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <input className='btn btn-outline-info w-100 mb-2' type="submit" value='Add Transaction' />
                        </div>
                        <div className='col-12 col-lg-6'>
                            <input className='btn btn-outline-dark ms-0 w-100' type="submit" value='Confirm Update' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;