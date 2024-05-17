import React from "react";
class MyComponent extends React.Component {
    state ={
        name: "Qui",
        address:"Tien Giang",
        age:21
    };

    handleOnClick(event){
        console.log(event)
        console.log(`Toi ten la ${this.state.name}`)
    }
    handleOnMouseOver(event){
        console.log(event)
    }
    //JSX
    render(){
        return(
            <div>
               My name is {this.state.name} and I'm from {this.state.address}, I'm {this.state.age} year old
               <button onClick={this.handleOnClick}>Click Me!</button>
               <button onMouseOver={this.handleOnMouseOver}>Hover Me!</button>
            </div>
        );
    }
}
export default MyComponent;