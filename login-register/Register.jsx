import React from "react";
import { useState } from "react";

export const Register = (props) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert ("Dear " + fname + " " + lname + ",\nYour login details are - " + email + " : " +password);
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type='text' name='fname' id='fname' value={fname} onChange={(e) => setFname(e.target.value)} />
                <label htmlFor="lname">Last Name</label>
                <input type='text' name='lname' id='lname' value={lname} onChange={(e) => setLname(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="submit-btn" type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}