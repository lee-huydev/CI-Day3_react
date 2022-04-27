import React from 'react';
import './style.css';
// Function React.createElement Input
const Input = ({ name, type, id }) => {
   return (
      <div className="item-input">
         <label htmlFor={id}>{name}</label>
         <input type={type} id={id} placeholder={name} />
      </div>
   );
};
export default Input;
