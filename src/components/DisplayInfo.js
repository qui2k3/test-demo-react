import React from "react";
class DisplayInfor extends React.Component {

    render() {
        //destructuring
        //props kieu opj => viet tat properties
        const { name, age } = this.props;
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        );
    }
}
export default DisplayInfor;