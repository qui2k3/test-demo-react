import React from "react";
class MyComponent extends React.Component {
    state ={
        name: "Qui",
        address:"Tien Giang",
        age:21
    };
    //JSX
    render(){
        return(

            <div>
               My name is {this.state.name} and I'm from {this.state.address}, I'm {this.state.age} year old
            </div>
        );
    }
}
export default MyComponent;