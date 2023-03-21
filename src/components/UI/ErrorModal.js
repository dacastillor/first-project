import React from 'react';
import Card from './Card';
import Button from './Button';
import errorclasses from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={errorclasses.backdrop} onClick={props.onConfirmError} />
      <Card className={errorclasses.modal}>
        <header className={errorclasses.header}>
          <h2>{props.errorTitle}</h2>
        </header>
        <div className={errorclasses.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={errorclasses.actions}>
          <Button onClick={props.onConfirmError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
