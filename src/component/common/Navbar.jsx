import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";



function Navbar(){
    const [dropdownOpen, setDropdownOpen] = useState(false);
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

    const toggleDropdown = () => {
        if (window.innerWidth <= 830) {
            setDropdownOpen(!dropdownOpen);
        }
      };


    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">Vic Royal</NavLink>
            </div>
            <div className="menu-button" onClick={toggleDropdown}> </div>
            <ul onClick={toggleDropdown} className={`navbar-ul ${dropdownOpen ? "a" : ""}`}>
                <li className="close-button"> <img src="/assets/images/xmark-solid.svg" alt="close" /> </li>
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
                <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

                {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                {!isAuthenticated &&<>
                    <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
                    <li><NavLink to="/register" activeclassname="active">Register</NavLink></li>
                </>}
                {isAuthenticated && (
                                    <li>
                                        <NavLink 
                                        onClick={() => {
                                            handleLogout();
                                        }} 
                                        activeclassname="active"
                                        >
                                        Logout
                                        </NavLink>
                                    </li>
                                    )}

            </ul>
        </nav>
    )
}

export default Navbar;

