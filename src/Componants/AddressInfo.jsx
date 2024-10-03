import React, { useState } from 'react';

const AddressInfo = ({ nextStep, prevStep, handleChange, formData, tempErrors }) => {

  const [localErrors, setLocalErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
 
    if (!formData.addressLine1.trim()) {
      tempErrors.addressLine1 = 'Address  is required';
    }
 
    if (!formData.city.trim()) {
      tempErrors.city = 'City is required';
    }
 
    if (!formData.state.trim()) {
      tempErrors.state = 'State is required';
    }
   
    if (!formData.zip.trim()) {
      tempErrors.zip = 'Zip Code is required';
    } else if (!/^\d+$/.test(formData.zip)) {
      tempErrors.zip = 'Zip Code must be numeric';
    }

    setLocalErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; 
  };

  const handleNext = () => {
    if (validate()) {
      nextStep(); 
    }
  };

  return (
    <div className='ai'>
      <h2>Address Information</h2>
      
      <label>Address Line 1:</label>
      <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} />
      {localErrors.addressLine1 && <p className="error">{localErrors.addressLine1}</p>} <br />

      <label>Address Line 2:</label>
      <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} /> <br />

      <label>City:</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />
      {localErrors.city && <p className="error">{localErrors.city}</p>} <br />

      <label>State:</label>
      <input type="text" name="state" value={formData.state} onChange={handleChange} />
      {localErrors.state && <p className="error">{localErrors.state}</p>} <br />

      <label>Zip Code:</label>
      <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
      {localErrors.zip && <p className="error">{localErrors.zip}</p>} <br />

      <button id='aiback' onClick={prevStep}>Back</button>
      <button id='ainext' onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddressInfo;
