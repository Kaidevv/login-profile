import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [visible, setVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h3>Login</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-text" for="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className="login-text" for="password">Password:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type={visible ? "text" : "password"} placeholder="************" id="password" name="password" />

                <div id="login-box">
                    <div id="show-pass">
                        <input type="checkbox" onClick={() => setVisible(!visible)} id="check-box" />Show password

                    </div>
                    <button id="login-btn" type="submit">Log In</button>
                </div>
            </form >
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Check your profile</button>
        </div >
    )
}