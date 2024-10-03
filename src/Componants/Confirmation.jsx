import React from 'react';


const Confirmation = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className='ci'>
      <h2>Confirm your information</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Address Line 1:</strong> {formData.addressLine1}</p>
      <p><strong>Address Line 2:</strong> {formData.addressLine2}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>State:</strong> {formData.state}</p>
      <p><strong>Zip:</strong> {formData.zip}</p>

      <button id='ciback' onClick={prevStep}>Back</button>
      <button id='cisub' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Confirmation;
