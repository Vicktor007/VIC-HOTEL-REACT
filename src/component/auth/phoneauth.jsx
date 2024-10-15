import React, { useState } from 'react'
// import "../../phonenumber.css"
// import PhoneInput from 'react-phone-input-2';
// import PhoneInput from 'react-phone-input-pro';
// import 'react-phone-input-2/lib/style.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const Phoneauth = () => {

    const [PhoneNumber, setPhoneNuber]=useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNuber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern  = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }


    return (
    <div className='container'>
        <label>

        Phone Number:
        {/* <PhoneInput 
        country={'us'}
        value={PhoneNumber}
        onChange={handleChange}
        inputProps={{
            required: true,
        }} */}

        
        {/* /> */}

<PhoneInput
      country="US"
      value={PhoneNumber}
      onChange={handleChange} />
            {/* <PhoneInput
            initialFormat={true} 
            value={PhoneNumber}
            prefix={true}
            onchange={handleChange}
            fullIsoCode={true}
            />  */}
        </label>
        {!valid && <p>Please enter a valid 10-digit phone number</p>}
    </div>
  )
}

export default Phoneauth