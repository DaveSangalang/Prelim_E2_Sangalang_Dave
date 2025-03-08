import React from "react";

function UserInfo({ name }) {
  return (
    <div className="user-info mt-3">
      <h3>User Info</h3>
      <p><strong>Name:</strong> {name}</p>
    </div>
  );
}

export default UserInfo;
