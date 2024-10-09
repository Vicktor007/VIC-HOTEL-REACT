
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Navbar from './component/common/Navbar';
import AllRoomsPage from './component/booking&Rooms/AllRoomsPage';
import FindBookingPage from './component/booking&Rooms/FindBookingPage';
import { ProtectedRoute } from './service/guard';
import ProfilePage from './component/profile/ProfilePage';
import EditProfilePage from './component/profile/EditProfilePage';
import RoomDetailsPage from './component/booking&Rooms/RoomDetailsPage';
import LoginPage from './component/auth/LoginPage';
import RegisterPage from './component/auth/RegisterPage';
import Footer from './component/common/Footer';


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
          <Route path="/rooms" element={<AllRoomsPage />} />
          <Route path="/find-booking" element={<FindBookingPage />} />

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
        </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
