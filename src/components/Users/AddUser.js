import React, { useState } from 'react';
import Card from '../UI/Card';
import userclasses from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUserName.length === 0 || enteredUserAge.length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid username and age (Empty value detected)',
      });
      return;
    }

    if (/[^\w]/gm.test(enteredUserName)) {
      setError({
        title: 'Invalid Username',
        message: 'Username includes alphanumeric values, please double check',
      });
      return;
    }

    if (/[^\d]/gm.test(enteredUserAge) || +enteredUserAge < 0) {
      setError({
        title: 'Invalid Age',
        message: 'Age must be a number greater or equal to zero',
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredUserAge(+e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          errorTitle={error.title}
          errorMessage={error.message}
          onConfirmError={errorHandler}
        />
      )}
      <Card className={userclasses.input}>
        <form onSubmit={addUserHandler}>
          {/* addUserHandler sin parentesis ya que no queremos ejecutar sino apuntar cada vez que el botón se oprima */}
          <label htmlFor="username">Username</label>
          {/* se usa htmlFor por el for normal de HTMl se confunde con el for de JS */}
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredUserAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
