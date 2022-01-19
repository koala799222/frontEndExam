import "../css/Root.scss"
import React from "react"
import Navbar from "./Navbar"

function Root() {
  return (
    <div className="Root">
      {/* pageLayout   */}
      <Navbar />
      <div className="content-wrapper">
        <div className="home-content">Home Content</div>
        <div className="foller-wrapper">Follower Wrapper</div>
      </div>
    </div>
  )
}

export default Root
