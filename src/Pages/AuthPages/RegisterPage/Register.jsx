import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css';
import ImgRegister from '../../../assets/RegisterImage.png';

function Register() {
    const [isDevAIUser, setIsDevAIUser] = useState(false);
    const [version, setVersion] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate(); 

    const handleDevAIChange = (e) => {
        setIsDevAIUser(e.target.value === 'yes');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="register-container">
            <div className="register-content">
                <div className="register-form-section">
                    <h2 className="register-heading">Register Your Account</h2>
                    <form onSubmit={handleSubmit} className="register-form">
                        <div className="input-group">
                            <label htmlFor="username" className="input-label">Username</label>
                            <input type="text" id="username" name="username" required className="input-field" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="realFirstName" className="input-label">First Name</label>
                            <input type="text" id="realFirstName" name="realFirstName" required className="input-field" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName" className="input-label">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required className="input-field" />
                        </div>
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

                        <div className="input-group">
                            <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                            <div className="password-container">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required
                                    className="input-field"
                                />
                                <button type="button" className="toggle-btn" onClick={toggleConfirmPassword}>
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="devAI" className="input-label">Will you be using DevAI tool?</label>
                            <select onChange={handleDevAIChange} required className="input-field">
                                <option value="">Select Yes or No</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        {isDevAIUser && (
                            <div className="input-group">
                                <label htmlFor="devAIversion" className="input-label">Which version do you want to choose?</label>
                                <select
                                    id="devAIversion"
                                    name="devAIversion"
                                    value={version}
                                    onChange={(e) => setVersion(e.target.value)}
                                    required
                                    className="input-field"
                                >
                                    <option value="">Select Version</option>
                                    <option value="v1">Normal Version</option>
                                    <option value="v2">Intermidiate Version</option>
                                    <option value="v3">Advance Version</option>
                                </select>
                            </div>
                        )}

                        <div className="input-group">
                            <label htmlFor="age" className="input-label">Age</label>
                            <input type="number" id="age" name="age" min="18" required className="input-field" />
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>

                    <div className="login-link">
                        <p className='para-login'>Already have an account? <a onClick={handleLoginClick} className="login-link-text">Login Here</a></p>
                    </div>
                </div>

                <div className="register-image-section">
                    <img src={ImgRegister} alt="Register Image" className="register-image" />
                </div>
            </div>
        </div>
    );
}

export default Register;
