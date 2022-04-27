import React from 'react';
import './App.css';
import Button from './components/Button/button';
import Input from './components/Input/input';

// Function Create Buttons
function Buttons() {
   const buttonProp = [
      {
         content: 'Cancel',
         color: {
            backgroundColor: '#D67548',
         },
      },
      {
         content: 'Sell',
         color: {
            backgroundColor: '#48416C',
         },
      },
      {
         content: 'OK',
         color: {
            backgroundColor: '#09706A',
         },
      },
      {
         content: 'Approve',
         color: {
            backgroundColor: '#6FD297',
         },
      },
      {
         content: 'Create',
         color: {
            backgroundColor: '#2F1413',
         },
      },
   ];
   const buttons = (
      <div className="btn-container">
         {buttonProp.map((e, i) => {
            return <Button key={i} text={e.content} color={e.color} />;
         })}
      </div>
   );
   return buttons;
}
// Function Create Input
function Inputs() {
   return (
      <div className="input-container">
         <Input name={'Username'} type={'text'} id={'name'} />
         <Input name={'Passworld'} type={'passworld'} id={'pass'} />
         <Input name={'Address'} type={'text'} id={'contact'} />
      </div>
   );
}
export { Inputs };
export default Buttons;
