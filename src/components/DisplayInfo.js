import React from "react";
class DisplayInfor extends React.Component {

    state = {
        isShowListUsers: true
    };
    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    };
    render() {
        //destructuring
        //props kieu opj => viet tat properties
        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUsers === true ? "Hide" : "Show"}
                    </span>
                </div>
                {this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                //covert string->number
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> my name {user.name} </div>
                                    <div> my age {user.age}</div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                }

            </div>
        );
    }
}
export default DisplayInfor;