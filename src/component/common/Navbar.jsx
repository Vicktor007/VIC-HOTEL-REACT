import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";


function Navbar(){
    
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm("Are you sure you want to logout?");
        if (isLogout) {
            ApiService.logout();
            navigate("/");
        }
    }


    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">Vic Royal</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
                <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

                {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                {!isAuthenticated &&<>
                    <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
                    <li><NavLink to="/register" activeclassname="active">Register</NavLink></li>
                </>}
                {isAuthenticated && <NavLink activeclassname="active" onClick={handleLogout}>Logout</NavLink>}
            </ul>
        </nav>
    )
}

export default Navbar;

