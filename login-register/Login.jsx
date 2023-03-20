import React from "react";
import { useState } from "react";

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert ("Your login details are - " + email + " : " +password);
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="submit-btn" type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}