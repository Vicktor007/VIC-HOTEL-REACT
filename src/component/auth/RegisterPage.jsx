// import React, { useState } from 'react';
// import ApiService from '../../service/ApiService';
// import { useNavigate } from 'react-router-dom';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'


// function RegisterPage() {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         phoneNumber: ''
//     });

//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const validateForm = () => {
//         const { name, email, password, phoneNumber } = formData;
//         if (!name || !email || !password || !phoneNumber) {
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) {
//             setErrorMessage('Please fill all the fields.');
//             setTimeout(() => setErrorMessage(''), 5000);
//             return;
//         }
//         try {
//             // Call the register method from ApiService
//             const response = await ApiService.registerUser(formData);

//             // Check if the response is successful
//             if (response.statusCode === 200) {
//                 // Clear the form fields after successful registration
//                 setFormData({
//                     name: '',
//                     email: '',
//                     password: '',
//                     phoneNumber: ''
//                 });
//                 setSuccessMessage('User registered successfully');
//                 setTimeout(() => {
//                     setSuccessMessage('');
//                     navigate('/login');
//                 }, 3000);
//             }
//         }
//          catch (error) {
//             setErrorMessage(error.response?.data?.message || error.message);
//             setTimeout(() => setErrorMessage(''), 5000);
//         }
//     };

//     return (
//         <div className="auth-container">
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Name:</label>
//                     <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
//                 </div>
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
//                 </div>
//                 <div className="form-group">
//                 <PhoneInput
//                         country="US"
//                         value={formData.phoneNumber}
//                         onChange={handleInputChange}
//                         name="phoneNumber"
//                         required />
//                     {/* <label>Phone Number:</label>
//                     <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required /> */}
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//             <p className="register-link">
//                 Already have an account? <a href="/login">Login</a>
//             </p>
//         </div>
//     );
// }

// export default RegisterPage;


// // todo 

// // npm install react-phone-input-2


// // import React, { useState } from 'react';
// // import ApiService from '../../service/ApiService';
// // import { useNavigate } from 'react-router-dom';
// // import 'react-phone-input-2/lib/style.css';
// // import PhoneInput from 'react-phone-input-2';

// // function RegisterPage() {
// //     const navigate = useNavigate();

// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         password: '',
// //         phoneNumber: ''
// //     });

// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [successMessage, setSuccessMessage] = useState('');

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({ ...formData, [name]: value });
// //     };

// //     const handlePhoneChange = (value) => {
// //         setFormData({ ...formData, phoneNumber: value });
// //     };

// //     const validateForm = () => {
// //         const { name, email, password, phoneNumber } = formData;
// //         if (!name || !email || !password || !phoneNumber) {
// //             return false;
// //         }
// //         return true;
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         if (!validateForm()) {
// //             setErrorMessage('Please fill all the fields.');
// //             setTimeout(() => setErrorMessage(''), 5000);
// //             return;
// //         }
// //         try {
// //             // Call the register method from ApiService
// //             const response = await ApiService.registerUser(formData);

// //             // Check if the response is successful
// //             if (response.statusCode === 200) {
// //                 // Clear the form fields after successful registration
// //                 setFormData({
// //                     name: '',
// //                     email: '',
// //                     password: '',
// //                     phoneNumber: ''
// //                 });
// //                 setSuccessMessage('User registered successfully');
// //                 setTimeout(() => {
// //                     setSuccessMessage('');
// //                     navigate('/login');
// //                 }, 3000);
// //             }
// //         } catch (error) {
// //             setErrorMessage(error.response?.data?.message || error.message);
// //             setTimeout(() => setErrorMessage(''), 5000);
// //         }
// //     };

// //     return (
// //         <div className="auth-container">
// //             {errorMessage && <p className="error-message">{errorMessage}</p>}
// //             {successMessage && <p className="success-message">{successMessage}</p>}
// //             <h2>Sign Up</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name:</label>
// //                     <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Email:</label>
// //                     <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Phone Number:</label>
// //                     <PhoneInput
// //                         country={'us'}
// //                         value={formData.phoneNumber}
// //                         onChange={handlePhoneChange}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Password:</label>
// //                     <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
// //                 </div>
// //                 <button type="submit">Register</button>
// //             </form>
// //             <p className="register-link">
// //                 Already have an account? <a href="/login">Login</a>
// //             </p>
// //         </div>
// //     );
// // }

// // export default RegisterPage;

// // import React, { useState } from 'react';
// // import ApiService from '../../service/ApiService';
// // import { useNavigate } from 'react-router-dom';
// // import 'react-phone-input-2/lib/style.css';
// // import PhoneInput from 'react-phone-input-2';
// // import Modal from 'react-modal';
// // import Select from 'react-select';
// // import countryList from 'react-select-country-list';



// // Modal.setAppElement('#root');

// // function RegisterPage() {
// //     const navigate = useNavigate();
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         password: '',
// //         phoneNumber: ''
// //     });
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [successMessage, setSuccessMessage] = useState('');
// //     const [isModalOpen, setIsModalOpen] = useState(false);
// //     const [selectedCountry, setSelectedCountry] = useState(null);
// //     const options = countryList().getData();

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({ ...formData, [name]: value });
// //     };

// //     const handlePhoneChange = (value) => {
// //         setFormData({ ...formData, phoneNumber: value });
// //     };

// //     const validateForm = () => {
// //         const { name, email, password, phoneNumber } = formData;
// //         if (!name || !email || !password || !phoneNumber) {
// //             return false;
// //         }
// //         return true;
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         if (!validateForm()) {
// //             setErrorMessage('Please fill all the fields.');
// //             setTimeout(() => setErrorMessage(''), 5000);
// //             return;
// //         }
// //         try {
// //             const response = await ApiService.registerUser(formData);
// //             if (response.statusCode === 200) {
// //                 setFormData({
// //                     name: '',
// //                     email: '',
// //                     password: '',
// //                     phoneNumber: ''
// //                 });
// //                 setSuccessMessage('User registered successfully');
// //                 setTimeout(() => {
// //                     setSuccessMessage('');
// //                     navigate('/login');
// //                 }, 3000);
// //             }
// //         } catch (error) {
// //             setErrorMessage(error.response?.data?.message || error.message);
// //             setTimeout(() => setErrorMessage(''), 5000);
// //         }
// //     };

// //     const openModal = () => {
// //         setIsModalOpen(true);
// //     };

// //     const closeModal = () => {
// //         setIsModalOpen(false);
// //     };

// //     const handleCountryChange = (selectedOption) => {
// //         setSelectedCountry(selectedOption);
// //         setFormData({ ...formData, phoneNumber: `+${selectedOption.value}` });
// //         closeModal();
// //     };

// //     return (
// //         <div className="auth-container">
// //             {errorMessage && <p className="error-message">{errorMessage}</p>}
// //             {successMessage && <p className="success-message">{successMessage}</p>}
// //             <h2>Sign Up</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name:</label>
// //                     <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Email:</label>
// //                     <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Phone Number:</label>
// //                     <div onClick={openModal}>
// //                         <PhoneInput
// //                             country={'us'}
// //                             value={formData.phoneNumber}
// //                             onChange={handlePhoneChange}
// //                             required
// //                             inputStyle={{ width: '100%' }}
// //                         />
// //                     </div>
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Password:</label>
// //                     <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
// //                 </div>
// //                 <button type="submit">Register</button>
// //             </form>
// //             <p className="register-link">
// //                 Already have an account? <a href="/login">Login</a>
// //             </p>

// //             <Modal
// //                 isOpen={isModalOpen}
// //                 onRequestClose={closeModal}
// //                 contentLabel="Select Country"
// //                 className="modal"
// //                 overlayClassName="modal-overlay"
// //             >
// //                 <h2>Select Country</h2>
// //                 <Select
// //                     options={options}
// //                     value={selectedCountry}
// //                     onChange={handleCountryChange}
// //                 />
// //                 <button onClick={closeModal}>Close</button>
// //             </Modal>
// //         </div>
// //     );
// // }

// // export default RegisterPage;



import React, { useState } from 'react';
import ApiService from '../../service/ApiService';
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Loader from '../common/Loader';

function RegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
       
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        
    };

    const handleChange = (value) => {
        setFormData({ ...formData, phoneNumber: value });
    };

    const validateForm = () => {
        const { name, email, password, phoneNumber } = formData;
        if (!name || !email || !password || !phoneNumber) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!validateForm()) {
            setErrorMessage('Please fill all the fields.');
            setTimeout(() => setErrorMessage(''), 5000);
            return;
        }
        try {
            
            // Call the register method from ApiService
            const response = await ApiService.registerUser(formData);

            // Check if the response is successful
            if (response.statusCode === 200) {
                // Clear the form fields after successful registration
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    phoneNumber: ''
                });
                setSuccessMessage('User registered successfully');
                setLoading(false)
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.response?.data?.message || error.message);
            setTimeout(() => setErrorMessage(''), 5000);
        }
    };

    return (
        <div className="auth-container">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group phone-group">
                <label>Phone number:</label>
                    <PhoneInput
                        country="US"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        name="phoneNumber"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <button type="submit">{loading ? (<Loader/>):("Register")}</button>
            </form>
            <p className="register-link">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
}

export default RegisterPage;
