import "../css/HomeContent.scss"
import "../css/Root.scss"
import React from "react"
import TextField from "./TextField"

function HomeContent() {
  return (
    <div className="content home-content">
      <p>Search</p>
      <TextField />
    </div>
  )
}

export default HomeContent
