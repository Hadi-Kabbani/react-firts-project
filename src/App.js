import './App.css';
import { useState } from 'react';
import Form from './transaction-project/Form';
import TransactionList from './transaction-project/TransactionList';
import Stats from './transaction-project/Stats';

function App() {
  const [items, setItems] = useState([]);
  const [updateValue, setUpdateValue] = useState({ description: "", className: 0, amount: 0 });
  const [updateBoolean, setUpdateBoolean] = useState(false);
  function addItem(item) {
    setItems([...items, item]);
  }
  function Delete(value) {
    setItems(items.filter((ele) => ele.className !== Number(value)))
  }
  function update(value, a) {
    setUpdateBoolean(a);
    items.filter((ele) => {
      if (ele.className == value) {
        setUpdateValue({ description: ele.description, className: ele.className, amount: ele.amount });
      }
    })
  }
  function resetUpdateValue(a) {
    setUpdateBoolean(a);
  }
  function changeValuesOfUpdatedObject(className, description, amount) {
    const updatedItems = items.map(item => {
      if (item.className === className) {
        return {
          ...item,
          description: description,
          amount: amount
        };
      }
      return item;
    });
    setItems(updatedItems);
  }


  return <div className="container " >
    <div className='row d-flex align-items-center'>
      <div className='col-6'>
        <div className='col-12'>
          <Stats items={items} />
        </div>
        <div className='col-12'>
          <Form changeValuesOfUpdatedObject={changeValuesOfUpdatedObject} addTransaction={addItem} updateValue={updateValue} updateBoolean={updateBoolean} resetUpdateValue={resetUpdateValue} />
        </div>
      </div>
      <div className='col-6'>
        <TransactionList items={items} update={update} Delete={Delete} />
      </div>
    </div>
  </div>
}


export default App;
