import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import LoaderV2 from '../LoaderV2';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                setLoading(true);
                const response = await ApiService.getUserProfile();
                // Fetch user bookings using the fetched user ID
                const userPlusBookings = await ApiService.getUserBookings(response.user.id);
                if (response.statusCode === 200) {
                setUser(userPlusBookings.user)
                setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setError(error.response?.data?.message || error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        ApiService.logout();
        navigate('/');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    // const cancelBooking = async (bookingId) => {
    //     if (!window.confirm('Are you sure you want to cancel this booking?')) {
    //         return; // Do nothing if the user cancels
    //     }

    //     try {
    //         setLoading(true);
    //         const response = await ApiService.cancelBooking(bookingId);
    //         if (response.statusCode === 200) {
    //             setSuccessMessage("The boking was Successfully cancelled")
    //             setLoading(false);
    //             setTimeout(() => {
    //                 setSuccessMessage('');
    //             }, 3000);
    //         }
    //     } catch (error) {
    //         setLoading(false);
    //         setError(error.response?.data?.message || error.message);
    //         setTimeout(() => setError(''), 5000);
    //     }
    // };

    return (
        <div className="profile-page">
            {error && <p className='error-message'>{error}</p>}
            {loading ? (<div className="profile-load"><LoaderV2/></div>) : ( <>
            {user && <h2>Welcome, {user.name}</h2>}
            <div className="profile-actions">
                <button className="edit-profile-button" onClick={handleEditProfile}>Edit Profile</button>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            {user && (
                <div className="profile-details">
                    <h3>My Profile Details</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                </div>
            )}
            <div className="bookings-section">
                <h3>My Booking History</h3>
                <div className="booking-list">
                    {user && user.bookings.length > 0 ? (
                        user.bookings.map((booking) => (
                            <div key={booking.id} className="booking-item">
                                <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
                                <p><strong>Check-in Date:</strong> {booking.checkInDate}</p>
                                <p><strong>Check-out Date:</strong> {booking.checkOutDate}</p>
                                <p><strong>Total Guests:</strong> {booking.totalNumOfGuest}</p>
                                <p><strong>Room Type:</strong> {booking.room.roomType}</p>
                                <img src={booking.room.roomPhotoUrl} alt="Room" className="room-photo" />
                               
                               <div className="booking-nav-button"> <NavLink className="nav"  to={`/bookingDetails/${booking.bookingConfirmationCode}`}>booking details</NavLink></div>

                            </div>
                        ))
                    ) : (
                        <p>No bookings found.</p>
                    )}
                </div>
            </div>
            </>)}
        </div>
    );
};

export default ProfilePage;
