import React from 'react'
import ReactDom from 'react-dom'

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}



ReactDom.render(
  <div style={style}> 
    <h1>Hello world</h1>
    <p id="heading-par">This is JSX</p>
  </div>,
  document.getElementById('root')
)