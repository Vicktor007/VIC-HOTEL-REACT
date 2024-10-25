import React, { useState } from 'react'
import ApiService from '../../service/ApiService';
import { useNavigate } from 'react-router-dom';
import Loader from '../common/Loader';

const ForgotPassword = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    

    

    const validateForm = () => {
        if (!email) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setError('Please enter your email');
            setTimeout(() => setError(''), 5000);
            return;
        }
        try {
            setLoading(true);
            // Call the register method from ApiService
            const response = await ApiService.forgotPassword(email);

            // Check if the response is successful
            if (response.statusCode === 200) {
                // Clear email field after successful registration
               
                setEmail("");
                setSuccessMessage('Reset Password Email sent! Please check your email');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
           
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        } finally {
            setLoading(false)
        }
    };


  return (
    <div className="auth-container">
            <h2>Password Reset Email</h2>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                    name='email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{loading ? (<Loader/>):("Send Email")}</button>
            </form>

        </div>
  )
}

export default ForgotPassword