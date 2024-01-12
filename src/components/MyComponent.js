// dinh nghia component
/**
 * class component
 * function component
 */
import React from "react";

class MyComponent extends React.Component {
     
    state = {
        name: 'Jackn',
        age: 26,
        address: 'Ninh xuan, Hoa lu , Ninh binh'
    }

    // JSX
    render(){
        return (
            <div> 
                  My name is {this.state.name}
                  I am {this.state.age} years old
            </div>
        ) ;    
    }
}
export default  MyComponent;