import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './Login.css';
import ImgLogin from '../../../assets/LoginImage.png';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();  

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-form-section">
                    <h2 className="login-heading">Login to Your Account</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-group">
                            <label htmlFor="email" className="input-label">Email</label>
                            <input type="email" id="email" name="email" required className="input-field" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password" className="input-label">Password</label>
                            <div className="password-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    required
                                    className="input-field"
                                />
                                <button type="button" className="toggle-btn" onClick={togglePassword}>
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="login-btn">Login</button>

                        <div className="register-link">
                            <p className='para-register'>Don't have an account? <a href="/register" className="register-link-text">Register Here</a></p>
                        </div>
                    </form>
                </div>

                <div className="login-image-section">
                    <img src={ImgLogin} alt="Login Image" className="login-image" />
                </div>
            </div>
        </div>
    );
}

export default Login;
