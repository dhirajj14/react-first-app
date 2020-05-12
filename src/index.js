import React from 'react'
import {render} from 'react-dom'

let bookList = [
  {title:'Spark Essential', author: 'Dhiraj Jain', pages:900},
  {title:'Web Integration', author: 'Dhiraj Jain', pages:500},
  {title:'Embedded System', author: 'Dhiraj Jain', pages:700}
]
const Book = ({title, author, pages}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}

class Library extends React.Component{
  state = {open : false}
  toggleOpenClosed = () => {
    this.setState( prevState => ({
      open: !prevState.open
    }))
  }
  render(){
    const {books} = this.props;
    return(
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <input type="Button" onClick={this.toggleOpenClosed} value="Change"></input>
        {books.map(
          (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}/>
        )}   
      </div>
    )  
  }
}
  
render(
  <div>
    <Library books={bookList}/>
  </div>,
  document.getElementById('root')
  )