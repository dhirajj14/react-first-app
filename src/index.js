import React from 'react'
import {render} from 'react-dom'
import Library from './Library'


let bookList = [
  {title:'Spark Essential', pages:900},
  {title:'Web Integration', author: 'Dhiraj Jain', pages:500},
  {title:'Embedded System', author: 'Dhiraj Jain', pages:700}
]



// class FavColorPicker extends React.Component{
//   state = {value: ''}

//   newColor = e => 
//     this.setState({ value: e.target.value})

//   submit = e => {
//     console.log(`New Value: ${this.state.value}`)
//     e.preventDefault()
//   }
  
//   render(){
//     return(
//       <form onSubmit={this.submit}>
//         <label>Favorite Color:
//           <input type = "color" onChange={this.newColor}/>
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }



render(
  <div>
    <Library books={bookList} />
  </div>,
  document.getElementById('root')
  )