import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from '../hooks/useInput.js';

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: ''
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false
  // });
  
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) =>  isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) =>  hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault(); // ini agar form submit nggak refresh page

    if(emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);

    /*
    Reset Form kalo pake state
    */  
    // setEnteredValues({
    //   email: '',
    //   password: ''
    // });
  }

    // function handleInputChange(identifier, value) {
    //   setEnteredValues(prevValue => ({
    //     ...prevValue,
    //     [identifier]: value,
    //   }));

    //   setDidEdit((prevEdit) => ({
    //     ...prevEdit,
    //      [identifier]: false,
    //    }));
    // }

    // function handleInputBlur(identifier) {
    //   setDidEdit((prevValue) => ({
    //    ...prevValue,
    //     [identifier]: true,
    //   }));
    // }

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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange} 
          value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange} 
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password!'}
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
