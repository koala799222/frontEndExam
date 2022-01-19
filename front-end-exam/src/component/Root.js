import "../css/Root.scss"
import React from "react"
import Navbar from "./Navbar"
import HomeContent from "./HomeContent"
import TagsContent from "./TagsContent"

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

    //  via "navbarSelected" state show home or tagsComponent. start
    let contentComponent
    if (navbarSelected === "home") {
      contentComponent = <HomeContent />
    } else if (navbarSelected === "tags") {
      contentComponent = <TagsContent />
    }
    //  via "navbarSelected" state show home or tagsComponent. end

    return (
      <div className="Root">
        {/* pageLayout   */}
        <Navbar
          navbarSelected={navbarSelected}
          onNavBarSelectChange={this.onNavBarSelectChange}
        />
        <div className="content-wrapper">
          {contentComponent}
          <div className="foller-wrapper">Follower Wrapper</div>
        </div>
      </div>
    )
  }
}

export default Root
