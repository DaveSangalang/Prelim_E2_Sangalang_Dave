import React from "react";

function Settings({ user, setUser }) {
  return (
    <div className="settings container mt-4">
      <h2>Settings</h2>
      <label className="form-check-label">
        <input 
          type="checkbox" 
          className="form-check-input"
          checked={user.darkMode} 
          onChange={() => setUser({ ...user, darkMode: !user.darkMode })} 
        />
        Enable Dark Mode
      </label>
    </div>
  );
}

export default Settings;
