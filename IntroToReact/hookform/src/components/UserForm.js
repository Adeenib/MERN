import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setEmail("")
        setFirstName("")
        setLastName("")
        setPassword("")
    };


    return (
        < div className="formStyle" >
            <form onSubmit={createUser} >
                <div>
                    <label>Firstname: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>

            </form>
            <table >
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>password</th>
                </tr>
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    {password ? <td>password</td> : <td></td>}
                </tr>

            </table>

        </div>

    );
};

export default UserForm;


export const RenderInfo = (props) => {
    return (
        <div>


        </div>

    )
}
