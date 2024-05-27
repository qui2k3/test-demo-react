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
    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers]
        listUsersClone = listUsersClone.filter(item => item.id !== userId
        )
        this.setState({
            listUsers: listUsersClone
        })
    }

    //JSX
    render() {
        // DRY: don't repeat yourself

        return (
            <>

                <br />
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br />
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b">
                </div>
            </>
        );
    }
}
export default MyComponent;