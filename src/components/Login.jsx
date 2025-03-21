import { useRef } from 'react';

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // ini agar form submit nggak refresh page
    
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(`Email: ${enteredEmail}, Password: ${enteredPassword}`);

    /*
    Reset Form kalo pake ref tapi cara ini SANGAT TIDAK DIREKOMENDASIKAN
    Karena langsung update value pada DOM
    */  
    // email.current.value = '';
    // password.current.value = '';
  }

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
            ref={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            ref={password}
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
