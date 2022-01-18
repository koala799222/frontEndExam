import "../css/Root.scss"
import React from "react"

function Root() {
  return (
    <div className="Root">
      {/* pageLayout   */}
      <div className="navbar">NavBar</div>
      <div className="content-wrapper">
        <div className="home-content">Home Content</div>
        <div className="foller-wrapper">Follower Wrapper</div>
      </div>
    </div>
  )
}

export default Root
