// src/pages/Profile.jsx
import React from "react";
import { getUser, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2>Profile</h2>

        <div className="profile-info">
          <div className="profile-row">
            <span className="label">Username:</span>
            <span className="value">{user.username}</span>
          </div>

          {/* <div className="profile-row">
            <span className="label">Email:</span>
            <span className="value">{user.username}@example.com</span>
          </div> */}

          <div className="profile-row">
            <span className="label">Role:</span>
            <span className="value">Portal User</span>
          </div>
        </div>

        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
