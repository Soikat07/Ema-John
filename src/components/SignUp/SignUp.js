import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);

  const handleSignUp = event => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    setError('');
    // console.log(email, password, confirm);
    // password error validation
    if (confirm !== password) {
      setError('Your password did not match');
      return;
    }
    else if (password.length < 6) {
      setError('Your password must be 6 character or longer')
      return;
    }
    // create User
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.error(error.message);
        setError(error.message);
    })
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
            type="password"
            name="password"
            id="password"
            placeholder="your password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            placeholder="type same"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Sing Up" />
      </form>
      <p>
        Already have an account?{' '}
        <Link className="link" to="/login">
          Login
        </Link>
      </p>
      <p className='text-error'>{error}</p>
    </div>
  );
};

export default SignUp;