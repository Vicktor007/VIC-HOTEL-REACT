import React, { useState } from "react";
import { useNavigate,useLocation, NavLink } from "react-router-dom";
import ApiService from "../../service/ApiService";
import Loader from "../common/Loader";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || '/';


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields.');
            setTimeout(() => setError(''), 5000);
            return;
        }

        try {
            setLoading(true);
            const response = await ApiService.loginUser({email, password});
            if (response.statusCode === 200) {
               
                localStorage.setItem('token', response.token);
                localStorage.setItem('role', response.role);
                navigate(from, { replace: true });
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
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>{loading ? (<Loader/>):("login")}</button>
            </form>

            <p className="register-link">
                Forgot your password? <NavLink to="/forgot-password">Reset your password</NavLink>
            </p>
            <p className="register-link">
                Don't have an account? <NavLink to="/register">Register</NavLink>
            </p>
        </div>
    );
}

export default LoginPage;
