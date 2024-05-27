import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'
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
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUsers === true ? "Hide" : "Show"}
                    </button>
                </div>
                {this.state.isShowListUsers &&
                    <>
                        {listUsers.map((user) => {
                            return (
                                //covert string->number
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div> my name {user.name} </div>
                                        <div> my age {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}
                    </>
                }

            </div>
        );
    }
}
export default DisplayInfor;