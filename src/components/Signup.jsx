import { useState } from 'react';

export default function Signup() {
    const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);

    function handleSubmit(event) {
        // biar ga ngeload page ulang
        event.preventDefault();

        // ini FormData contructor dari browser, dan event.target itu kek FORM nya gitu la intinya
        // SYARATNYA SETIAP BAGIAN FORM HARUS ADA NAMENYA KARNA DIA BACA DARI SITU
        const fd = new FormData(event.target);

        // kalo mau ambil valuenya secara spesifik
        const enteredEmail = fd.get('email');
        const enteredPassword = fd.get('password');

        // buat ambil checkbox (ga ke detect karna dia namanya sama tp ada banyak)
        const acquisitionChannel = fd.getAll('acquisition');

        // ambil semua value-value nya di form, kemudian diubah ke object dalam bentuk key value pairs
        const data = Object.fromEntries(fd.entries());

        // masukan data yg tadi diambil ke dalam
        data.acquisition = acquisitionChannel;

        // validasi password dan confirm password yang diinput
        if(data.password !== data['confirm-password']) {
            setPasswordAreNotEqual(true);
            return;
        }


        console.log(data);

        // kosongkan form setelah submit (reset form)
        event.target.reset();
    }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          <label htmlFor="email">Email</label>
          {/* required is a built in props */}
          <input id="email" type="email" name="email" required/>
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required minLength={6}/>
          </div>
  
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              required
            />
            <div className="control-error">
                {passwordAreNotEqual && <p>Passwords must match.</p>}
            </div>
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required/>
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required/>
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role" required>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
  
          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>
  
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" required/>I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
            {/* Type Reset otomatis reset seluruh form */}
            <button type="reset" className="button button-flat">
                Reset
            </button>
            <button type="submit" className="button">
                Sign up
            </button>
        </p>
      </form>
    );
}