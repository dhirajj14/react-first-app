import React, { Component } from 'react'
import ReactDOM, {render} from 'react-dom'

const Book = ({title, author, pages}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}
const Library = () => {
  return(
    <div>
      <Book title="Spark Essential" author="Dhiraj" pages={900}/>
      <Book title="Web" author="Dhiraj" pages={500}/>
      <Book title="Embbeded System" author="Dhiraj" pages={300}/>
    </div>
  )
}

render(
  <div>
    <Library/>
  </div>,
  document.getElementById('root')
  )