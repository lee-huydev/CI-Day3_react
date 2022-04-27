import React from 'react';
import './style.css';
// Funtion React.createElement Button
const Button = ({ text, color }) => {
   return <button style={color}>{text}</button>;
};

export default Button;
