import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import axios from 'axios';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const url = action === "Sign Up" ? 'http://localhost:5001/api/auth/signup' : 'http://localhost:5001/api/auth/login';

        try {
            const response = await axios.post(url, formData);
            if (action === "Sign Up") {
                alert('Signup successful! Please log in.');
                setAction("Login");
                setFormData({ username: '', email: '', password: '' }); // Reset form data
            } else {
                alert('Login successful!');
                localStorage.setItem('token', response.data.token); // Save the token
                // Update the redirection path here
                window.location.href = '/smart-contract'; // Redirect to the SmartContractPage
            }
        } catch (error) {
            alert(error.response?.data?.error || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className='loginsignup-container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? null : (
                    <div className='input'>
                        <img src={user_icon} alt="User Icon" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className='input'>
                    <img src={email_icon} alt="Email Icon" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="Password Icon" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='submit-container'>
                <div className='toggle' onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}>
                    {action === "Sign Up" ? "Already have an account? Log In" : "New user? Sign Up"}
                </div>
                <div className='submit' onClick={handleSubmit}>
                    {action === "Sign Up" ? "Create Account" : "Log In"}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
