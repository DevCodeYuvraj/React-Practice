import { useState } from 'react'
import { DynamicAvatar } from "./DynamicAvatar";

import "../index.css"
function DynamicProfile({ username, role, description, image }) {
  return (
    <>
      
        <div className="card">
            <div className="profile">
          <DynamicAvatar image={image} />
          <div className="user-name">{username}</div>
          <div className="role">{role}</div>
          <div className="description">{description}</div>
        </div>
        </div>
    
    </>
  );
}
export default DynamicProfile
