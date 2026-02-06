// src/components/UserRegister.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // or App.css - wherever you put the styles

function UserRegister() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users/`, {
        username,
        password,
        business_type: businessType,
      });

      setSuccess(true);
      setTimeout(() => {
        navigate('/financials');
      }, 1800);

    } catch (err) {
      const msg = err.response?.data?.detail || 'Something went wrong. Please try again.';
      setError(msg);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>Financial Health Dashboard</h1>
          <p>Quick & secure registration</p>
        </div>

        <div className="form-container">
          {success ? (
            <div className="success">
              Account created successfully!<br />
              Redirecting to dashboard...
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.trim())}
                  placeholder="Choose a username"
                  required
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessType">Business Type</label>
                <select
                  id="businessType"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  required
                >
                  <option value="">Select type</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Services">Services</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Agriculture">Agriculture</option>
                </select>
              </div>

              {error && <div className="error">{error}</div>}

              <button type="submit">Create Account</button>

              <button
                type="button"
                className="link-btn"
                onClick={() => navigate('/financials')}
              >
                Already have an account? Continue →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserRegister;