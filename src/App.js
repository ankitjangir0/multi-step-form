import React, { useState, useEffect } from 'react';
import PersonalInfo from './Componants/PersonalInfo';
import AddressInfo from './Componants/AddressInfo';
import Confirmation from './Componants/Confirmation';
import './App.css'
import './Address.css'
import './Confirm.css'


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Form Submitted Successfully', formData);
  };

  return (
    <div className="App">
      {step === 1 && <PersonalInfo nextStep={nextStep} handleChange={handleChange} formData={formData} />}
      {step === 2 && <AddressInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
      {step === 3 && <Confirmation formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
