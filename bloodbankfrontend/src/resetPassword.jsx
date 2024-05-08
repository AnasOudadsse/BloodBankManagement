import React, { useState } from 'react';
import axios from 'axios';

function ChangePasswordForm() {
    const [inputs, setInputs] = useState({
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
    });

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/resetPassword', inputs, {
                withCredentials: true // needed for Sanctum to handle CSRF and session auth
            });
            console.log(response.data);
        } catch (error) {
            console.error('Password change error:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="password" name="current_password" placeholder="Current Password" onChange={handleChange} value={inputs.current_password} required />
            <input type="password" name="new_password" placeholder="New Password" onChange={handleChange} value={inputs.new_password} required />
            <input type="password" name="new_password_confirmation" placeholder="Confirm New Password" onChange={handleChange} value={inputs.new_password_confirmation} required />
            <button type="submit">Change Password</button>
        </form>
    );
}

export default ChangePasswordForm;
