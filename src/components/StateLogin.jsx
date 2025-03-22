import { useState } from 'react';
import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = 
    didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault(); // ini agar form submit nggak refresh page
    console.log(enteredValues);

    /*
    Reset Form kalo pake state
    */  
    // setEnteredValues({
    //   email: '',
    //   password: ''
    // });
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValue => ({
      ...prevValue,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
       [identifier]: false,
     }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValue) => ({
     ...prevValue,
      [identifier]: true,
    }));
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {/* HTML FOR tuh kayak for di HTML biasa */}
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)} 
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email.'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleInputChange('password', event.target.value)} 
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* button type ada 3 : reset, submit,  reset (by default itu submit)*/}
        {/* kalo submit, dia tuh bakal otomatis refresh page karna kirim data ke server react */}
        {/* pada umumnya ya kita pasti maunya ngirim data ke API Eksternal */}
        <button className="button">Login</button>
        {/* <button type="button" className="button" onClick={handleSubmit}>Login</button> */}
      </p>
    </form>
  );
}
