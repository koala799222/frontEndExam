import "../css/Root.scss"
import React from "react"
import Navbar from "./Navbar"

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = { navbarSelected: "home" }
    this.onNavBarSelectChange = this.onNavBarSelectChange.bind(this)
  }

  onNavBarSelectChange(selectedName) {
    this.setState(() => ({
      navbarSelected: selectedName,
    }))
  }

  render() {
    const { navbarSelected } = this.state
    return (
      <div className="Root">
        {/* pageLayout   */}
        <Navbar
          navbarSelected={navbarSelected}
          onNavBarSelectChange={this.onNavBarSelectChange}
        />
        <div className="content-wrapper">
          <div className="home-content">Home Content</div>
          <div className="foller-wrapper">Follower Wrapper</div>
        </div>
      </div>
    )
  }
}

export default Root
