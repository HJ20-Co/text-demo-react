// dinh nghia component
/**
 * class component
 * function component
 */
import React from "react";

class MyComponent extends React.Component {
     
    state = {
        name: 'Diep Nguyen',
        age: 26,
        address: 'Ninh xuan, Hoa lu , Ninh binh'
    }
    handleClick () {
              console.log(">> Click me My Button");
              this.setState({
                  name: 'RWEK',
                  age: Math.floor((Math.random()*100) + 1),
                  setDefault:'NNNN',
                    address: 'Ninh Hai, Hoa Lu , Ninh Binh'
                    
              })
    }

    handleOnMoverOver(even){
            //   console.log(even.pageX)
    }

    // JSX
    render(){
        return (
            <div> 
                  My name is {this.state.name}
                  I am {this.state.age} years old
                <button onMouseOver={this.handleOnMoverOver}>Hover Me</button>
                <button onClick={(even) => {this.handleClick(even)}}>Click me</button>
            </div>
        ) ;    
    }
}
export default  MyComponent;