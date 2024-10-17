import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import LoaderV2 from '../LoaderV2';
import Loader from '../common/Loader';

const EditProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                setLoading(true)
                const response = await ApiService.getUserProfile();
                setUser(response.user);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleDeleteProfile = async () => {
        if (!window.confirm('Are you sure you want to delete your account?')) {
            return;
        }
        try {
            setLoading(true);
            await ApiService.deleteUser(user.id);
            setLoading(false);
            navigate('/signup');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <div className="edit-profile-page">
            {loading ? <LoaderV2/> : <>
            <h2>Edit Profile</h2>
            {error && <p className="error-message">{error}</p>}
            {user && (
                <div className="profile-details">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                    <button className="delete-profile-button" onClick={handleDeleteProfile}>{loading ? <Loader/> : ("Delete Profile")}</button>
                </div>
            )}</>}
            
        </div>
    );
};

export default EditProfilePage;
