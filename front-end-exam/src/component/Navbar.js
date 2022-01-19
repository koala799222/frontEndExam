import "../css/Navbar.scss"
import React from "react"
import PropTypes from "prop-types"
import logo from "../asset/logo.png"
import lightSvgImage from "../asset/fa-solid_pencil-ruler.svg"
import darkSvgImage from "../asset/fa-solid_pencil-ruler_black.svg"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.selectedNavBar = this.selectedNavBar.bind(this)
  }

  //  點擊navbar button 刷新 navbarSelected 值為home or tags
  selectedNavBar(selectedName) {
    const { onNavBarSelectChange } = this.props
    onNavBarSelectChange(selectedName)
  }

  render() {
    const { navbarSelected } = this.props
    return (
      <div className="navbar">
        <img src={logo} className="navbar_logo" alt="navbar_logo" />
        <div
          className={`navbar_home ${
            navbarSelected === "home" ? "selected" : ""
          }`}
          onClick={(e) => this.selectedNavBar("home", e)}
          aria-hidden="true"
        >
          <img
            src={navbarSelected === "home" ? lightSvgImage : darkSvgImage}
            alt="navbar_home"
          />
          <span>Home</span>
        </div>
        <div
          className={`navbar_tags ${
            navbarSelected === "tags" ? "selected" : ""
          }`}
          onClick={(e) => this.selectedNavBar("tags", e)}
          aria-hidden="true"
        >
          <img
            src={navbarSelected === "tags" ? lightSvgImage : darkSvgImage}
            alt="navbar_tags"
          />
          <span>Tags</span>
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  navbarSelected: PropTypes.string,
  onNavBarSelectChange: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
  navbarSelected: "home",
}

export default Navbar
