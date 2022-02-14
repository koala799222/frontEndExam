import "../css/WeakupContent.scss"
import "../css/Root.scss"
import "../css/Clock.scss"
import React, { useEffect, useState } from "react"
import Clock from "react-clock"
import "react-clock/dist/Clock.css"
import Button from "@mui/material/Button"

function WeakupContent() {
  const [value, setValue] = useState(new Date())
  let weakUpDataArray = useState([])
  let todayWeakUpData = useState({})

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const alreayWeakUp = (itemValue) =>
    itemValue.date === new Date().toLocaleDateString()

  //  新增
  const setNewLocalS = () => {
    const clickDate = new Date() // 儲存點擊時間
    weakUpDataArray = JSON.parse(localStorage.getItem("weakUpData")) // 取得LocalStorage時間
    console.log(weakUpDataArray)
    todayWeakUpData = {
      date: clickDate.toLocaleDateString(),
      time: `${clickDate.getHours().toString()}:${clickDate
        .getMinutes()
        .toString()}`,
    }
    //  塞資料進去
    if (weakUpDataArray === null) {
      localStorage.setItem("weakUpData", JSON.stringify([todayWeakUpData]))
    } else if (Array.isArray(weakUpDataArray)) {
      if (weakUpDataArray.find(alreayWeakUp)) {
        alert("alreayWeakUp")
      } else {
        weakUpDataArray.push(todayWeakUpData)
      }
      localStorage.setItem("weakUpData", JSON.stringify(weakUpDataArray))
    }
  }

  return (
    <div className="content home-content">
      <h1>你不是最早起的</h1>
      <h2>怎麼過一天就是怎麼過一年</h2>
      <span>{new Date().toDateString()}</span>
      <Clock
        value={value}
        className="Watch"
        hourHandLength={46}
        hourHandWidth={12}
        minuteHandLength={65}
        minuteHandWidth={10}
        secondHandLength={60}
        hourHandOppositeLength={10} // 時針長度
        hourMarksLength={18}
        size={280}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setNewLocalS()
        }}
      >
        get up 起床
      </Button>

      <p>How bad to you want it</p>
      <p>List localStorage Data and delete Features</p>
      {/* <p>日出時間</p>
      <p>勵志文章</p>
      <p>單字</p>
      <p>讀書twitch</p> */}
    </div>
  )
}

export default WeakupContent
