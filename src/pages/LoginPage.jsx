import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Mock authentication
    localStorage.setItem('cam-auth-token', 'mock-token-12345');
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      {/* Floating diamonds background */}
      <div className="floating-diamonds">
        <div className="floating-diamond"></div>
        <div className="floating-diamond"></div>
        <div className="floating-diamond"></div>
        <div className="floating-diamond"></div>
      </div>

      <div className="auth-container">
        {/* Logo at top */}
        <div className="auth-logo">
          <div className="diamond-logo diamond-logo-large"></div>
          <h1>CAM</h1>
          <p>Crypto Adds Money</p>
        </div>

        <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Welcome Back</h2>
        <p style={{ color: 'var(--text-gray)', marginBottom: '2rem', fontSize: '0.875rem' }}>
          Login to your account to continue
        </p>

        <form onSubmit={handleLogin} className="auth-form">
          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login to Dashboard
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;