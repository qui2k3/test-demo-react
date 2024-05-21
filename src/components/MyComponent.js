import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "eric", age: "26" },
            { id: 3, name: "harry pham dev", age: "69" }
        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    //JSX
    render() {
        // DRY: don't repeat yourself
        return (

            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}
export default MyComponent;