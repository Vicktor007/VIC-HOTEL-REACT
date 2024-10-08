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
            navigate("/home");
        }
    }


    return(
        <nav>
            <div className="">
                <ui>
                    <li>
                       <NavLink to="/home" activeClass="active">
                        Home
                        </NavLink> 
                        <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
                <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

                {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                {!isAuthenticated &&<div>
                    <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
                    <li><NavLink to="/register" activeclassname="active">Register</NavLink></li>
                </div>}
                {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
                    </li>
                </ui>
            </div>
        </nav>
    )
}

export default Navbar;