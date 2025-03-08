import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "profile dark" : "profile"}>
      <h2>User Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Profile;
