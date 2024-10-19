import React, { useEffect, useState } from 'react';
import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LoaderV2 from '../LoaderV2';

const BookingDetails = () => {

    const location = useLocation()

const {confirmationCode} = useParams();
const navigate  = useNavigate();
   const  isAuthenticated = ApiService.isAuthenticated()
    
    const [bookingDetails, setBookingDetails] = useState(null); // State variable for booking details
    const [error, setError] = useState(null); // Track any errors
    const [successMessage, setSuccessMessage] = useState(null);
    const [loading, setLoading] = useState(false);




    useEffect (() => {
        const fetchData = async () => {

            


            try {
                setLoading(true);
                // Call API to get booking details
                const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
                setBookingDetails(response.booking);
                setLoading(false);
                setError(null); // Clear error if successful
            } catch (error) {
                setLoading(false);
                setError(error.response?.data?.message || error.message);
                setTimeout(() => setError(''), 5000);
            }
        };
        fetchData();
    },[confirmationCode])

    const cancelBooking = async (bookingId) => {
        
        if (!isAuthenticated) {
            navigate("/login", { replace: true, state: { from: location } });
        } else {
            if (!window.confirm('Are you sure you want to cancel this booking?')) {
                return; // Do nothing if the user cancels
            }
    
            try {
                setLoading(true);
                const response = await ApiService.cancelBooking(bookingId);
                if (response.statusCode === 200) {
                    setSuccessMessage("The booking was Successfully cancelled")
                    setLoading(false);
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 3000);
                    navigate("/profile")
                }
            } catch (error) {
                setLoading(false);
                setError(error.response?.data?.message || error.message);
                setTimeout(() => setError(''), 5000);
            }
        }
    };


    return (
        <>
        {loading ? (<div className="profile-load"><LoaderV2/></div>) : ( <>
        
            <div className="find-booking-page">
            <h2>Your Booking Details</h2>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {/* {error && <p className='error-message'>{error}</p>} */}
            {successMessage && <p className='success-message'>{successMessage}</p>}
            {bookingDetails && (
                <div className="booking-details">
                    <h3>Booking Details</h3>
                    <p>Confirmation Code: {bookingDetails.bookingConfirmationCode}</p>
                    <p>Check-in Date: {bookingDetails.checkInDate}</p>
                    <p>Check-out Date: {bookingDetails.checkOutDate}</p>
                    <p>Num Of Adults: {bookingDetails.numOfAdults}</p>
                    <p>Num Of Children: {bookingDetails.numOfChildren}</p>

                    <br />
                    <hr />
                    <br />
                    <h3>Booker Detials</h3>
                    <div>
                        <p> Name: {bookingDetails.user.name}</p>
                        <p> Email: {bookingDetails.user.email}</p>
                        <p> Phone Number: {bookingDetails.user.phoneNumber}</p>
                    </div>

                    <br />
                    <hr />
                    <br />
                    <h3>Room Details</h3>
                    <div>
                        <p> Room Type: {bookingDetails.room.roomType}</p>
                        <img src={bookingDetails.room.roomPhotoUrl} alt="" sizes="" srcSet="" />
                    </div>

                            <button
                                    className="profile-cancel-booking"
                                    onClick={() => cancelBooking(bookingDetails.id)}>Cancel Booking
                            </button>
                   
                    
                </div>
            )}
        </div>
        
        </>)}
        </>
        
    );
};

export default BookingDetails;
