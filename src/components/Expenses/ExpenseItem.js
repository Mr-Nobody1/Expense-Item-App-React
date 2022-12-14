import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  const [Title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('UpdatedTitle');
    console.log('Clicked');
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{Title}</h2>
        <div className='expense-item__price'>${props.amount}</div>

      </div>
      <button onClick={clickHandler} >Change Title</button>
    </Card>
  );
}

export default ExpenseItem;