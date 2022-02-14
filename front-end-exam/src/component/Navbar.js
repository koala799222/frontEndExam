import "../css/Navbar.scss"
import React from "react"
import PropTypes from "prop-types"
import logo from "../asset/facebook.png"
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
        <div className="logo_container">
          <img src={logo} className="navbar_logo" alt="navbar_logo" />
          <p>pure react</p>
        </div>
        {/* 你不是最早起的 Tag */}
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
          <span>你不是最早起的</span>
        </div>
        <div
          className={`navbar_tags ${
            navbarSelected === "weakupList" ? "selected" : ""
          }`}
          onClick={(e) => this.selectedNavBar("weakupList", e)}
          aria-hidden="true"
        >
          <img src={lightSvgImage} alt="navbar_tags" />
          <span>list</span>
        </div>
        {/* 訓練你的youtube關鍵字 */}
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
          <span>訓練你的youtube搜尋關鍵字</span>
        </div>
        {/* 上傳圖片 處理圖片後 */}
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
          <span>上傳圖片 處理圖片後</span>
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
          <span>訓練你的youtube搜尋關鍵字</span>
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
          <span>影片顯示</span>
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
          <span>勵志/HIIT/利用時間／英文</span>
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
