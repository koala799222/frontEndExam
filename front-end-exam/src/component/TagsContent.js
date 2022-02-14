import "../css/TagsContent.scss"
import "../css/Root.scss"
import React from "react"
import TextField from "./TextField"

function TagsContent() {
  return (
    <div className="content tags-content">
      搜尋youtube
      <TextField />
      使你的推薦更改，這裡會呼叫
    </div>
  )
}

export default TagsContent
