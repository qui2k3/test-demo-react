import React from "react";

class UserInfor extends React.Component{
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
    handleOnChangeName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleOnChangeAge=(event)=>{
        this.setState({
            age:event.target.value
        })
    }
    handleOnSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div>
            My name is {this.state.name} and I'm from {this.state.address}, I'm {this.state.age} year old
               
               <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
                <label>Your name:</label>
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={(event)=>{this.handleOnChangeName(event)}}
                />
                <label>Your age:</label>
                <input 
                    type="text"
                    value={this.state.age}
                    onChange={(event)=>{this.handleOnChangeAge(event)}}
                />
                <button>Submit</button>
               </form>
            </div>
        );
    }
}
export default UserInfor;