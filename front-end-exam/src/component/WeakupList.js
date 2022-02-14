import React from "react"

function List(props) {
  const { items } = props

  if (!items || items.length === 0) {
    return null
  }

  const tbodyData = (
    <tbody>
      {items.map((item) => (
        <tr key={item.date}>
          <td>{item.date}</td>
          <td>{item.time}</td>
        </tr>
      ))}
    </tbody>
  )

  return tbodyData
}

class WeakupList extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const weakUpData = JSON.parse(localStorage.getItem("weakUpData"))

    console.log(weakUpData)
    this.setState({
      items: weakUpData,
    })
  }

  render() {
    const { items } = this.state
    return (
      <div className="container">
        <div className="filter-list">
          <p>過往起床時間：</p>
          <table className="table table-striped table-hover">
            <thead>
              <tr className="success">
                <th>id</th>
                <th>Album</th>
              </tr>
            </thead>
            <List items={items} />
          </table>
        </div>
      </div>
    )
  }
}
export default WeakupList
