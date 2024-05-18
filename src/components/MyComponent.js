import React from "react";
import UserInfor from "./UserInfo";
import DisplayInfor from "./DisplayInfo";
class MyComponent extends React.Component {
    //JSX
    render() {

        return (

            <div>
                <UserInfor></UserInfor>
                <br />
                <br />
                <DisplayInfor name="hoi dan it" age="30"></DisplayInfor>
                <hr />
                <DisplayInfor name={"eric"} age={26} ></DisplayInfor>
            </div>
        );
    }
}
export default MyComponent;