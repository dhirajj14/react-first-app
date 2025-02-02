import PropTypes from 'prop-types'
import React from 'react'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'

class Library extends React.Component{

    static defaultProps = {
      books: [
        {"title": "The Great Book", "author":"Dhiraj jain", "pages": 100}
      ]
    }
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
                    <div key={product.id}>
                      <h3>Library Product of the Day!!</h3>
                      <h4>{product.name}</h4>
                      <img alt={product.name} src={product.image} height={100}/>
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
    
  Library.propTypes = {
    books: PropTypes.array
  }
  
  Book.propTypes = {
    title : PropTypes.string,
    author : PropTypes.string,
    pages : PropTypes.number,
    freeBookmark : PropTypes.bool
  }

  export default Library