import React from 'react';
import './AdminDashboard.css'; // Ensure this path is correct
import Table from './Table'; // Custom table component
import PieChart from './PieChart'; // Custom pie chart component
import { FaUser, FaExclamationCircle, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-content">
        <div className="card-grid">
          <div className="dashboard-card">
            <h2>User Statistics</h2>
            <p>Total Users: 1024</p>
            <p>Active Users: 768</p>
            <p>New Users This Month: 120</p>
          </div>
          <div className="dashboard-card">
            <h2>Notifications</h2>
            <ul className="notification-list">
              <li className="notification-item">
                <FaUser className="notification-icon" />
                <span className="notification-text">New user sign-up: John Doe</span>
              </li>
              <li className="notification-item">
                <FaExclamationCircle className="notification-icon" />
                <span className="notification-text">Post reported: "Spam content in forum"</span>
              </li>
              <li className="notification-item">
                <FaExclamationCircle className="notification-icon" />
                <span className="notification-text">System maintenance scheduled for Sunday</span>
              </li>
            </ul>
          </div>
          <div className="dashboard-card">
            <h2>Messages</h2>
            <ul className="message-list">
              <li className="message-item">
                <FaEnvelope className="message-icon" />
                <span className="message-text">You have 3 unread messages.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard-card">
          <h2>Statistics Overview</h2>
          <PieChart />
        </div>
        <div className="dashboard-card">
          <h2>Recent Activities</h2>
          <Table title="Recent User Activities" />
        </div>
        <div className="dashboard-card">
          <h2>Top Posts</h2>
          <Table title="Top Forum Posts" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
