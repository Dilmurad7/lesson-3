// import React from "react";







import React from 'react';


const list = ["Яблоко", "Апельсин", "Груша"];

class List extends React.Component {

render () {
  return (
    <ul>
      {this.props.listArr.map(element => {
        return <li key ={element}>{element}</li>

      })}
    </ul>
  ) 
}
}

const listsec = [
  {
    id:'1',
    value: 'Яблоко'
  },
  {
    id:'2',
    value: 'Апельсин'
  },
  {
    id:'3',
    value: 'Груша'
  }
]


class ListSec extends React.Component {

  render () {
    return (
      <ul>
        {this.props.listArr.map(element => {
          return <li key ={element.id}>{element.value}</li>
  
        } )}
      </ul>
    ) 
  }
  }

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick () {
    this.setState({
      count : this.state.count + 1
    })
  }

  handleClicke() {
    this.setState((prevState,props)=>{
    
    return {
      count : prevState.count - 1 
      }
    
    }) 
    } 

  render() {
    return (
      <div className = 'App'>
        <div><h1>{this.state.count}</h1></div>
        <button onClick = {this.handleClick}>
          Click +
        </button>
        <button onClick = {() => this.handleClicke()}>
        Click -
      </button>
      </div>
    )
  }
}



class App extends React.Component {
  render () {
  return (
    <div>
      <header>

    <Button />
    <List listArr = {list}/>
    <ListSec listArr = {listsec}/>

      </header>
    </div>
  
  );
  }
}





export default App;



// class StateExample extends React.Component {

//     constructor (props) {
//         super (props);
//         this.state = {
//             value: 0
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick (e) {
//         this.setState (
           
//             {
                
//                 value: this.state.value +1
//             }
//         )
//     }

// render () {

//     console.log(this.state);
//     return (

       

//         <div>
//             StateExample

//             <p>
//                 {this.state.value}
//             </p>
//             <button onClick={this.handleClick}>
//                 +
//             </button>
//         </div>
//     )
// }
// }
// export default StateExample;

// // this.setState({value: this.state.value + 1 })