import { useState } from 'react'
import { Avatar } from '.avatar'
import "../index.css"
function StaticProfile() {
  return (
    <>
          <div className="card">
            <div className="profile">
              <Avatar />
              <div className="user-name">John Doe</div>
              <div className="role">Frontend Development Student</div>
              <div className="description">I enjoy building clean and responsive user interfaces using React.</div>
            </div>
          </div>
          
    </>
  )
}

export default StaticProfile
