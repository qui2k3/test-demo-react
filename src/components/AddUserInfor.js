import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [name, setName] = useState("Qui")
    const [address, setAddress] = useState("hoi dan it ")
    const [age, setAge] = useState("")
    const handleOnClick = (event) => {
        console.log(`Toi ten la ${name}`)
        setName("ProVjp")
        setAge(Math.floor(Math.random() * 10) + 1)
    }
    const handleOnMouseOver = (event) => {
        console.log(event)
    }
    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + "-random",
            name: name,
            age: age
        });
    }
    return (
        <div>
            My name is {name} and I'm from {address}, I'm {age} year old

            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => { handleOnChangeName(event) }}
                />
                <label>Your age:</label>
                <input
                    type="text"
                    value={age}
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}
export default AddUserInfor;