export default function Login() {
  

  function handleSubmit(event) {
    event.preventDefault(); // ini agar form submit nggak refresh page
    console.log('Submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {/* HTML FOR tuh kayak for di HTML biasa */}
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
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
