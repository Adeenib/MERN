import React, { useState } from 'react';

const Info = (props) => {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [age, setAge] = useState(props.age);
    const [hairColor, setHairColor] = useState(props.hairColor);

    const agePlus = () => {
        setAge(age + 1)
    }
    return (
        <div>


            <h1>{lastName}, {firstName} </h1>
            <p>Age : {age}</p>
            <p> Hair Color : {hairColor}</p>



            <button onClick={agePlus}>BirthDay Button for {lastName}, {firstName}</button>

        </div>
    )
}

export default Info
