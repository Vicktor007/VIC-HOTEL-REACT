
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import './App.css';
import Home from './component/home/Home';
import Navbar from './component/common/Navbar';
import AllRoomsPage from './component/booking&Rooms/AllRoomsPage';
import FindBookingPage from './component/booking&Rooms/FindBookingPage';
import { AdminRoute, ProtectedRoute } from './service/guard';
import ProfilePage from './component/profile/ProfilePage';
import EditProfilePage from './component/profile/EditProfilePage';
import RoomDetailsPage from './component/booking&Rooms/RoomDetailsPage';
import LoginPage from './component/auth/LoginPage';
import RegisterPage from './component/auth/RegisterPage';
import Footer from './component/common/Footer';
import AdminPage from './component/admin/AdminPage';
import ManageRoomPage from './component/admin/ManageRoomPage';
import EditRoomPage from './component/admin/EditRoomPage';
import AddRoomPage from './component/admin/AddRoomPage';
import ManageBookingsPage from './component/admin/ManageBookingsPage';
import EditBookingPage from './component/admin/EditBookingPage';
import BookingDetails from './component/booking&Rooms/BookingDetailsPage';
import Phoneauth from './component/auth/phoneauth';
import ForgotPassword from './component/auth/ForgotPassword';
import ResetPassword from './component/auth/ResetPassword';


function App() {

  

  return (
 
    <BrowserRouter>
   
    <div className="App">
    <Navbar/>
      <div className='content'>
        <Routes>
          {/* Public Routes */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:tokenId/:resetToken" element={<ResetPassword />} />
          <Route path="/rooms" element={<AllRoomsPage />} />
          <Route path="/find-booking" element={<FindBookingPage />} />
          <Route path="/bookingDetails/:confirmationCode" element={<BookingDetails />} />
          <Route  path='/phone' element={<Phoneauth/>}/>

          {/* Protected Routes */}
          <Route path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetailsPage />} />}
            />
            <Route path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
            <Route path="/edit-profile"
              element={<ProtectedRoute element={<EditProfilePage />} />}
            />

            {/* Admin Routes */}
            <Route path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      <Footer/>
    </div>
   
    </BrowserRouter>
    
  );
}

export default App;
