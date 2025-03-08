import React from "react";
import ProfilePicture from "./ProfilePicture.js"; 
import UserInfo from "./UserInfo.js";
import "./Profile.css";

function Profile({ user, setUser }) {
  return (
    <div className={`profile container mt-4 ${user.darkMode ? "dark" : ""}`}>
      <h2 className="text-center">User Profile</h2>

      {/* Profile Picture Component */}
      <ProfilePicture imageUrl="" />

      {/* User Info Component */}
      <UserInfo name={user.name} />

      {/* Name Input Field */}
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input 
          type="text" 
          className="form-control"
          value={user.name} 
          onChange={(e) => setUser({ ...user, name: e.target.value })} 
        />
      </div>

      <p>Email: johndoe@example.com</p>

      {/* Dark Mode Toggle Button */}
      <button 
        className="btn btn-secondary mt-3"
        onClick={() => setUser({ ...user, darkMode: !user.darkMode })}
      >
        {user.darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
}

export default Profile;
