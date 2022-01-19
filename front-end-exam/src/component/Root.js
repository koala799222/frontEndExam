import "../css/Root.scss"
import React from "react"
import logo from "../asset/logo.png"
import homeSvgImage from "../asset/fa-solid_pencil-ruler.svg"
import tagsSvgImage from "../asset/fa-solid_pencil-ruler_black.svg"

function Root() {
  return (
    <div className="Root">
      {/* pageLayout   */}
      <div className="navbar">
        <img src={logo} className="navbar_logo" alt="navbar_logo" />
        <div className="navbar_home">
          <img src={homeSvgImage} alt="navbar_home" />
          <span>Home</span>
        </div>
        <div className="navbar_tags">
          <img src={tagsSvgImage} alt="navbar_tags" />
          <span>Tags</span>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="home-content">Home Content</div>
        <div className="foller-wrapper">Follower Wrapper</div>
      </div>
    </div>
  )
}

export default Root
