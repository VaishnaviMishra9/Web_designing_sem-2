import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      setUsers([...users, formData]); // Add current form data to list
      setSubmitted(true);
      setFormData({ name: '', email: '', password: '' }); // Clear inputs
    }
  };

  return (
    <div className="outer-canvas">
      <div className="form-card">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" name="name" placeholder="Enter Name" 
            value={formData.name} onChange={handleChange} required 
          />
          <input 
            type="email" name="email" placeholder="Enter Email" 
            value={formData.email} onChange={handleChange} required 
          />
          <input 
            type="password" name="password" placeholder="Enter Password" 
            value={formData.password} onChange={handleChange} required 
          />
          
          <button type="submit" className="reg-btn">Register</button>
        </form>

        {submitted && <p className="success-msg">Registration Successful!</p>}

        {users.length > 0 && (
          <div className="user-list-section">
            <h3>Registered Users</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;