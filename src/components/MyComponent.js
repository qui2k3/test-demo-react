import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {

    const [listUsers, setlistUser] = useState([
        { id: 1, name: "hoi dan it", age: "16" },
        { id: 2, name: "eric", age: "26" },
        { id: 3, name: "harry pham dev", age: "69" }
    ])
    const handleAddNewUser = (userObj) => {
        setlistUser([userObj, ...listUsers])
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setlistUser(listUsersClone)
    }
    return (
        <>
            <br />
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">
            </div>
        </>
    );
}
export default MyComponent;