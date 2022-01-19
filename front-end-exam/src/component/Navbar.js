import "../css/Navbar.scss"
import React from "react"
import logo from "../asset/logo.png"
import homeSvgImage from "../asset/fa-solid_pencil-ruler.svg"
import tagsSvgImage from "../asset/fa-solid_pencil-ruler_black.svg"

function Navbar() {
  return (
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
  )
}

export default Navbar
