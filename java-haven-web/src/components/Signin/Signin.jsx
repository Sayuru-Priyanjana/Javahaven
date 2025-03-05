import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useContext } from 'react';
import { AlertContext } from '../../App';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { showAlert } = useContext(AlertContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:');

                // Store user data in localStorage
                localStorage.setItem('user', JSON.stringify({ email, password }));

                // Log the stored data
                const storedUser = localStorage.getItem('user');
                console.log('Stored user data:', JSON.parse(storedUser));

                showAlert('Login successful!', 'success');

                // ✅ Navigate to home page
                navigate('/');
            } else {
                console.error('Login failed:', data.message);
                
                showAlert(`Login failed: ${data.message}`, 'error');
            }
        } catch (error) {
            console.error('Error during login:', error);
            
            showAlert('An error occurred during login.', 'error');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Welcome Back!</h2>
                <p>Sign in to your account</p>
                <form onSubmit={handleSubmit}>
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
                        Sign In
                    </button>
                </form>
                <p className="auth-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
