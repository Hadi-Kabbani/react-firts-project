import './App.css';
import { useState } from 'react';
import Form from './transaction-project/Form';
import TransactionList from './transaction-project/TransactionList';
import Stats from './transaction-project/Stats';

function App() {
  const [items, setItems] = useState([]);
  const [updateValue, setUpdateValue] = useState({ description: "", className: 0, Amount: 0 });
  function addItem(item) {
    setItems([...items, item]);
  }
  function Delete(value) {
    console.log(value)
    setItems(items.filter((ele) => ele.className !== Number(value)))
  }
  function update(value) {
    items.filter((ele) => {
      if (ele.className == value) {
        setUpdateValue({ description: ele.description, className: ele.className, Amount: ele.amount });
      }
    })
  }

  return <div className="container " >
    <div className='row d-flex align-items-center'>
      <div className='col-6'>
        <div className='col-12'>
          <Stats items={items} />
        </div>
        <div className='col-12'>
          <Form addTransaction={addItem} updateValue={updateValue} />
        </div>
      </div>
      <div className='col-6'>
        <TransactionList items={items} update={update} Delete={Delete} />
      </div>
    </div>
  </div>
}


export default App;
