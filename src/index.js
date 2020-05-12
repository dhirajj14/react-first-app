import React from 'react'
import {render} from 'react-dom'

let bookList = [
  {title:'Spark Essential', author: 'Dhiraj Jain', pages:900},
  {title:'Web Integration', author: 'Dhiraj Jain', pages:500},
  {title:'Embedded System', author: 'Dhiraj Jain', pages:700}
]
const Book = ({title, author, pages, freeBookmark}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages}</p>
      <p>Free Bookmark Today: {freeBookmark ? 'Yes' : 'No'}</p>
    </section>
  )
}

const Hiring = () => 
  <div>
    <p>The library is currently hiring! GO to www.library.com/jobs for more info.</p>
  </div>

const NotHiring = () => 
<div>
  <p>The library is currently not hiring! Please visit again for more info.</p>
</div>

class Library extends React.Component{
  state = {
    open : true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount(){
    this.setState({loading:true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
    .then(data => data.json())
    .then(data => this.setState({data, loading:false}))
  }

  componentDidUpdate(){
    console.log("component updated!")
  }

  toggleOpenClosed = () => {
    this.setState( prevState => ({
      open: !prevState.open
    }))
  }
  render(){
    const {books} = this.props;
    return(
      <div>
        {this.state.hiring ? <Hiring/> : <NotHiring/>}
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <div>
          {this.state.loading
            ? "loading...."
            : <div>
              {this.state.data.map(product => {
                return(
                  <div>
                    
                    <h3>Library Product of the Day!!</h3>
                    <h4>{product.name}</h4>
                    <img src={product.image} height={100}/>
                  </div>
                )
              })}
            </div>
            }
        </div>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => 
            <Book 
              key={i} 
              title={book.title} 
              author={book.author} 
              pages={book.pages}
              freeBookmark={this.state.freeBookmark}/>
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