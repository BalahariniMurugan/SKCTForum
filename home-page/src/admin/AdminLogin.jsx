import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Ensure this path is correct

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your admin authentication logic
    if (username === 'admin' && password === 'admin13') {
      navigate('/admin/dashboard'); // Adjust the path if you have a dashboard route
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div id="admin-box">
      {error && <p id="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <h2 id="adminTitle">Admin Login</h2>
        <div className="user-box">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=" " /* Add placeholder to support label animation */
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" " /* Add placeholder to support label animation */
          />
          <label>Password</label>
        </div>
        <button type="submit" id="loginBtn">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
