// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import UserDashboard from './user/UserDashboard'; // Import UserDashboard

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} /> {/* Add UserDashboard route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
