
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Loader from '../common/Loader';


const initialState = {
    password: "",
    password2: "",
};

const ResetPassword = () => {
    const [formData, setFormData] = useState(initialState);
    const { password, password2 } = formData;
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { resetToken } = useParams();
    const { tokenId } = useParams();
    
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!tokenId) {
            return setError("Reset token is not available");
        }
        if (!resetToken) {
            return setError("Reset token is not available");
        }

        if (password !== password2) {
            return setError("Passwords do not match");
        }

        try {
            setLoading(true);
            const response = await ApiService.resetPassword(tokenId, resetToken, password);
            navigate("/login");
            setSuccessMessage("Password reset successful");
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="auth-container">
            <h2>Reset your Password</h2>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Enter new password: </label>
                    <input
                        name='password'
                        type="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirm new password: </label>
                    <input
                        name='password2'
                        type="password"
                        value={password2}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">{loading ? (<Loader/>):("Reset Password")}</button>
            </form>
        </div>
    );
};

export default ResetPassword;
