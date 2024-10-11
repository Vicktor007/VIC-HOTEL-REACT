import React, { useEffect, useState } from 'react';
import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js
import { useParams } from 'react-router-dom';

const BookingDetails = () => {

const {confirmationCode} = useParams();
   
    // const [confirmationCode, setConfirmationCode] = useState(''); // State variable for confirmation code
    const [bookingDetails, setBookingDetails] = useState(null); // State variable for booking details
    const [error, setError] = useState(null); // Track any errors

    useEffect (() => {
        const fetchData = async () => {
            // if (!confirmationCode.trim()) {
            //     setError("Please Enter a booking confirmation code");
            //     setTimeout(() => setError(''), 5000);
            //     return;
            // }
            try {
                // Call API to get booking details
                const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
                setBookingDetails(response.booking);
                setError(null); // Clear error if successful
            } catch (error) {
                setError(error.response?.data?.message || error.message);
                setTimeout(() => setError(''), 5000);
            }
        };
        fetchData();
    },[confirmationCode])

    return (
        <div className="find-booking-page">
            <h2>Your Booking Details</h2>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
                </div>
            )}
        </div>
    );
};

export default BookingDetails;
