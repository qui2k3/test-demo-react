import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'
// class DisplayInfor extends React.Component {

//     render() {
//         console.log("call me render")
//         //destructuring
//         //props kieu opj => viet tat properties
//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 //covert string->number
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div> my name {user.name} </div>
//                                         <div> my age {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </>
//                 }

//             </div>
//         );
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    console.log("call me render")
    useEffect(
        () => {
            if(listUsers.length==0){
                alert("you deleted all users ")
            }
            console.log("callme use effect")
        }, [listUsers]
    );
    return (
        <div className="display-infor-container">
            <div>
                <button onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide" : "Show"}
                </button>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            //covert string->number
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div> my name {user.name} </div>
                                    <div> my age {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
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

export default DisplayInfor;