import { useState } from 'react';

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const emailIsInvalid = 
    enteredValues.email !== '' && !enteredValues.email.includes('@');

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
    }))
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={(event) => handleInputChange('email', event.target.value)} 
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
            </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={(event) => handleInputChange('password', event.target.value)} 
            value={enteredValues.password}
          />
        </div>
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
