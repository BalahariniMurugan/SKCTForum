import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../redux/authSlice';
import './Signup.css';

const Signup = () => {
  const [values, setValues] = useState({ email: '', password: '', confirmPassword: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
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

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setValues({ ...values, confirmPassword });
    setConfirmPasswordError(confirmPassword !== values.password ? 'Passwords do not match' : '');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (values.email && validateEmail(values.email) && values.password.length >= 6 && values.password === values.confirmPassword) {
      // Handle signup logic here
      const user = { email: values.email }; // Replace with actual user data
      dispatch(signup(user));
      navigate('/');
    } else {
      setEmailError(!values.email ? 'Email is required' : validateEmail(values.email) ? '' : 'Invalid email format');
      setPasswordError(!values.password ? 'Password is required' : values.password.length < 6 ? 'Password must be at least 6 characters long' : '');
      setConfirmPasswordError(values.password !== values.confirmPassword ? 'Passwords do not match' : '');
    }
  };

  return (
    <div id="signup-box">
      <form onSubmit={handleFormSubmit}>
        <h2 id="signupTitle">Sign Up</h2>
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
        <div id="user-box" className="user-box">
          <input
            type="password"
            id="confirmPassword"
            onChange={handleConfirmPasswordChange}
            value={values.confirmPassword}
          />
          <label>Confirm Password</label>
          {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
        </div>
        <button type="submit" id="signupBtn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
