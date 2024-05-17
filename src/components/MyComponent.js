import React from "react";
class MyComponent extends React.Component {
    state ={
        name: "Qui",
        address:"Tien Giang",
        age:21
    };

    handleOnClick(event){
        console.log(`Toi ten la ${this.state.name}`)
        this.setState({
            name:"ProVjp",
            age: Math.floor(Math.random() * 10)+1
        })
    }
    handleOnMouseOver=(event)=>{
        console.log(event)
    }
    handleOnChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleOnSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render(){
        return( 
            <div>
               My name is {this.state.name} and I'm from {this.state.address}, I'm {this.state.age} year old
               
               <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
                <input type="text"
                onChange={(event)=>{this.handleOnChange(event)}}
                />
                <button>Submit</button>
               </form>
            </div>
        );
    }
}
export default MyComponent;