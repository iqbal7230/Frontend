import React, { useState } from 'react';
import InputForm from '../cards/InputForm';
import NEFTDetails from '../cards/NEFT';
import axios from 'axios';

const GetNEFTDetails = () => {
  const [neftRef, setNeftRef] = useState('');
  const [neftData, setNeftData] = useState(null);
  const [error, setError] = useState('');

  // Fetch NEFT details from API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setNeftData(null); 
    if (!neftRef) {
      setError('Please enter a valid NEFT reference number.');
      return;
    }

    try {
      // Replace with your actual API endpoint
    //   handle api for NEFT details
      const response = await axios.get(`http://localhost:5000/neft/${neftRef}`); // API endpoint
      if (response.data) {
        setNeftData(response.data);
      } else {
        setError('No data found for this NEFT reference number.');
      }
    } catch (err) {
      setError('Error fetching NEFT details. Please check the reference number and try again.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Get NEFT Details</h1>

  
      <InputForm handleSubmit={handleSubmit} neftRef={neftRef} setNeftRef={setNeftRef} />

      <p className="text-red-500">{error}</p>

      {neftData && <NEFTDetails details={neftData} />}
      <p>No Data Found(Need to handle)</p>
    </div>
  );
};

export default GetNEFTDetails;
