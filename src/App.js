import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState({ name: "John Doe", darkMode: false });

  return (
    <Router>
      <div className={user.darkMode ? "dark-mode" : "light-mode"}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">User Profile App</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/profile">Profile</Link>
              <Link className="nav-link" to="/settings">Settings</Link>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
        </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
