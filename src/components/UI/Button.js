import React from 'react';
import buttonclasses from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={buttonclasses.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
