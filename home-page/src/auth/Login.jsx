import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../redux/authSlice'; // Ensure the correct path to authSlice
import './Login.css';

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValues({ ...values, email });
    setEmailError(validateEmail(email) ? '' : 'Invalid email format');
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setValues({ ...values, password });
    setPasswordError(password.length < 6 ? 'Password must be at least 6 characters long' : '');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (values.email && validateEmail(values.email) && values.password.length >= 6) {
      // Perform login logic here
      const user = { email: values.email }; // Replace with actual user data
      dispatch(login(user));
      navigate('/');
    } else {
      setEmailError(!values.email ? 'Email is required' : validateEmail(values.email) ? '' : 'Invalid email format');
      setPasswordError(!values.password ? 'Password is required' : values.password.length < 6 ? 'Password must be at least 6 characters long' : '');
    }
  };

  return (
    <div id="login-box">
      <form onSubmit={handleFormSubmit}>
        <h2 id="loginTitle">Login</h2>
        <div id="user-box" className="user-box">
          <input
            type="text"
            id="email"
            onChange={handleEmailChange}
            value={values.email}
          />
          <label>Email</label>
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div id="user-box" className="user-box">
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
            value={values.password}
          />
          <label>Password</label>
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button type="submit" id="loginBtn">Login</button>
        <div className="user-account"> 
          <h4>Don't have an account?</h4>
        </div>
        <button id="signupBtn">
          <Link to="/signup" className="no-underline">Sign up here</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
