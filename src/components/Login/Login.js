import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [show, setShow] = useState(false);
  const { logIn } = useContext(AuthContext);

  // redirect page using useNavigate
  const navigate = useNavigate();
  // get current route location
  const location = useLocation();
  const from=location.state?.from?.pathname || '/'

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // log in user
    logIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, {replace : true})
      })
      .catch(error => {
        console.error(error.message);
    })
  }
  
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show? "text" : "password"}
            name="password"
            id="password"
            placeholder="your password"
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        New to Ema-John?{' '}
        <Link className="link" to="/signup">
          Create New Account
        </Link>
      </p>
    </div>
  );
};

export default Login;