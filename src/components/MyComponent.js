import React from "react";
import UserInfor from "./UserInfo";
import DisplayInfor from "./DisplayInfo";
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "eric", age: "26" },
            { id: 3, name: "harry pham dev", age: "69" }
        ]
    }

    //JSX
    render() {
        // DRY: don't repeat yourself
        return (

            <div>
                <UserInfor></UserInfor>
                <br />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />
            </div>
        );
    }
}
export default MyComponent;