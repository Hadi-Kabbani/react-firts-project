import React, { useState, useEffect } from 'react';

function Form({ changeValuesOfUpdatedObject, addTransaction, updateValue, updateBoolean, resetUpdateValue }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [key, setKey] = useState(0);

    function submitHandler(e) {
        e.preventDefault();
        if (description.trim() !== "" && amount !== 0) {
            if (updateBoolean) {
                changeValuesOfUpdatedObject(updateValue.className, description, amount);
                resetUpdateValue(false);
            } else {
                const newTransaction = {
                    description: description,
                    amount: amount,
                    className: key
                };
                setKey(key + 1);
                addTransaction(newTransaction);
            }
            setDescription("");
            setAmount("");
        }
    }
    function cancel() {
        resetUpdateValue(false);
        setDescription("");
        setAmount("");
    }


    useEffect(() => {
        if (updateBoolean) {
            setDescription(updateValue.description);
            setAmount(updateValue.amount);
        }
    }, [updateBoolean, updateValue, resetUpdateValue]);


    return (
        <form onSubmit={submitHandler}>
            <div className='row'>
                <div className='col-12 form-floating mb-3 '>
                    <input className="form-control" type="text" name="desc" id="desc" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <label htmlFor="desc">Enter Description</label>
                </div>
                <div className='col-12 form-floating mb-3' >
                    <input className="form-control" name="amount" id="amount" type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                    <label htmlFor="amount">Enter Amount</label>
                </div>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <input className='btn btn-outline-info w-100 mb-2' type="submit" value={updateBoolean ? 'Confirm Update' : 'Add Transaction'} />
                        </div>
                        <div className='col-12 col-lg-6'>
                            <input className='btn btn-dark w-100 mb-2' type="submit" value="Cancel" onClick={cancel} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
