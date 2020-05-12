import React, { Component } from 'react'
import ReactDOM, {render} from 'react-dom'

let skiData = {
  total: 100,
  powder: 40,
  backcountry:20,
  goal: 200
}

class SkiDayCounter extends Component{
  render(){
    const {total, powder, backcountry, goal} = this.props
    return(
      <section>
        <div>
          <p>Total Days:{total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Days: {goal}</p>
        </div>
      </section>
    )
  }
}


render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  document.getElementById('root')
  )