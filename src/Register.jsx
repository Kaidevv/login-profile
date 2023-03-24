import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h3 id="profile">Profile</h3>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name:</label>
                <input value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} type="name" />
                <label htmlFor="date">Day Of Birth:</label>
                <input value={date} name="date" id="date" onChange={(e) => setDate(e.target.value)} type="date" />
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                <label htmlFor="phone">Phone: </label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" id="number" name="number" />
                <div className="box-btn">
                    <button className="profile-btn" id="update" type="submit">Update</button>
                    <button className="profile-btn" id="cancel" type="submit">Cancel</button>
                </div>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')} > Already have an acount? Login here</button>
        </div>
    )
}