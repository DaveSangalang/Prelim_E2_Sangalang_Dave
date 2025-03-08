import React from "react";

function ProfilePicture({ imageUrl }) {
  return (
    <div className="profile-picture text-center">
      <img
        src={imageUrl || "https://ui-avatars.com/api/?name=User&size=150"}
        alt="Profile"
        className="rounded-circle img-fluid border shadow"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
    </div>
  );
}

export default ProfilePicture;
