import React, { useState } from 'react';

const PersonalInfo = ({ nextStep, handleChange, formData }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    console.log(formData); 
    let tempErrors = {};
    
    if (!formData) {
      tempErrors.general = 'Form data is not defined';
      return tempErrors;
    }

    if (!formData.name) tempErrors.name = 'Name is required';

    
    if (!formData.email || !formData.email.includes('@')) {
      tempErrors.email = 'Valid email is required';
    }
    
    if (!formData.phone) {
        tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
        tempErrors.phone = 'Phone number must be of 10-digit';
    }

    return tempErrors;
  };

  const handleNext = () => {
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      nextStep();
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <div className='pi'>
      <h2>Personal Information</h2>
      
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>} <br />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} <br />

      <label>Phone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>} <br />

      <button onClick={handleNext}>Next</button>
      {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>} 
    </div>
  );
};

export default PersonalInfo;
