import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css"; // Shared CSS for both SignIn and SignUp
import { useContext } from 'react';
import { AlertContext } from '../../App';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { showAlert } = useContext(AlertContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('User registered successfully:', data);
                navigate('/signin');
                showAlert('User registered successfully!', 'success');
            } else {
                console.error('Registration failed:', data.message);
                showAlert(`Registration failed: ${data.message}`, 'error');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Create an Account</h2>
                <p>Join us and enjoy the best coffee experience</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">
                        Sign Up
                    </button>
                </form>
                <p className="auth-link">
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;