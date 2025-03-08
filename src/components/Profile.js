import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture.js"; 
import UserInfo from "./UserInfo.js"; 
import Settings from "./Settings.js"; // ✅ Fixed import name
import "./Profile.css";

function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("John Doe"); // ✅ Added state for name

  return (
    <div className={darkMode ? "profile dark" : "profile"}>
      <h2>User Profile</h2>
      
      {/* ✅ Profile Picture Component */}
      <ProfilePicture imageUrl="" /> 

      {/* ✅ User Info Component (Passes name as a prop) */}
      <UserInfo name={name} />

      {/* ✅ Input to update name */}
      <label>
        Name: 
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>

      <p>Email: johndoe@example.com</p>

      {/* ✅ Settings Component (Passes dark mode state and function) */}
      <Settings darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Profile;
