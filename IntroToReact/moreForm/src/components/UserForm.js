import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setEmail("")
        setFirstName("")
        setLastName("")
        setPassword("")
        setConfirmPassword("")
        setNameError("")
        setLastNameError("")
        setEmailError("")
    };
    const handleUserFirstName = (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 2)
            setNameError(" field must be at least 2 characters.")
        else {
            setNameError("")
        }
        setFirstName(e.target.value)


    }
    const handleUserLastName = (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 2)
            setLastNameError(" field must be at least 2 characters.")
        else {
            setLastNameError("")
        }
        setLastName(e.target.value)


    }
    const handleUserEmail = (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 5)
            setEmailError(" Email must be at least 5 characters.")
        else {
            setEmailError("")
        }
        setEmail(e.target.value)


    }
    const handleConfirmPassword = (e) => {
        if (e.target.value !== password)
            setConfirmPasswordError("password and confirm password should match")
        else {
            setConfirmPasswordError("")
        }
        setConfirmPassword(e.target.value)


    }

    return (
        < div className="formStyle" >
            <form onSubmit={createUser} >
                <div>
                    <label>Firstname: </label>
                    <input type="text" onChange={handleUserFirstName} value={firstName} />
                    <p>{nameError}</p>
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" onChange={handleUserLastName} value={lastName} />
                    <p>{lastNameError}</p>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleUserEmail} value={email} />
                    <p>{emailError}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handleConfirmPassword} value={confirmPassword} />
                    <p>{confirmPasswordError}</p>
                </div>

            </form>


        </div>

    );
};

export default UserForm;



