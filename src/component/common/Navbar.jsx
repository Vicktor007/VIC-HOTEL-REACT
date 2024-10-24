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
        setDropdownOpen(!dropdownOpen);
      };


    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">Vic Royal</NavLink>
            </div>
            <div className="menu-button" onClick={toggleDropdown}> menu</div>
            <ul className={`navbar-ul ${dropdownOpen ? "a" : ""}`}>
                <li className="close-button" onClick={toggleDropdown}> close</li>
                <li><NavLink onClick={toggleDropdown} to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink onClick={toggleDropdown} to="/rooms" activeclassname="active">Rooms</NavLink></li>
                <li><NavLink onClick={toggleDropdown} to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

                {isUser && <li><NavLink onClick={toggleDropdown} to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink onClick={toggleDropdown} to="/admin" activeclassname="active">Admin</NavLink></li>}

                {!isAuthenticated &&<>
                    <li><NavLink onClick={toggleDropdown} to="/login" activeclassname="active">Login</NavLink></li>
                    <li><NavLink onClick={toggleDropdown} to="/register" activeclassname="active">Register</NavLink></li>
                </>}
                {isAuthenticated && (
                                    <li>
                                        <NavLink 
                                        onClick={() => {
                                            toggleDropdown();
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

