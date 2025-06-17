// JCC/frontend/src/components/HeroForm.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // NEW: Import useNavigate hook

// Removed: import SuccessMessage from './SuccessMessage';
// SuccessMessage is now rendered by SuccessPage via its own route

const HeroForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'error' | 'loading'>('idle'); // Removed 'success' from status
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate(); // NEW: Initialize useNavigate hook

  const API_LEADS_URL = 'http://127.0.0.1:8000/api/leads/';

  // No longer need resetForm here, as navigation handles "reset" by going to new page

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('loading');
    setErrorMessage(null); // Clear previous errors

    try {
      const response = await axios.post(API_LEADS_URL, {
        name: name,
        phone_number: phoneNumber,
      });

      console.log('Lead submitted successfully:', response.data);
      setSubmissionStatus('idle'); // Reset status after successful submission, before navigation
      setName(''); // Clear form fields immediately
      setPhoneNumber('');

      // NEW: Redirect to the success page upon successful submission
      navigate('/success'); 

    } catch (err) {
      setSubmissionStatus('error');
      if (axios.isAxiosError(err) && err.response) {
        console.error('Lead submission failed (Backend Error):', err.response.data);
        if (err.response.data.phone_number) {
          setErrorMessage(`Phone Number: ${err.response.data.phone_number[0]}`);
        } else if (err.response.data.name) {
          setErrorMessage(`Name: ${err.response.data.name[0]}`);
        } else if (err.response.data.detail) {
            setErrorMessage(err.response.data.detail);
        } else {
          setErrorMessage('Submission failed. Please try again.');
        }
      } else {
        console.error('Lead submission failed (Network Error):', err);
        setErrorMessage('Network error. Please check your connection or try again later.');
      }
    }
  };

  return (
    // The container still provides animation and width constraints
    <div className="w-full max-w-sm mx-auto animate-fade-in-up">
      {/* The form itself is always rendered here */}
      <div className="bg-white p-8 rounded-lg shadow-xl text-dark-panel w-full">
        <h3 className="text-2xl font-bold mb-6 font-poppins text-center">Get a Call</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              placeholder="Your Name"
              required
              disabled={submissionStatus === 'loading'}
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              placeholder="e.g., 9876543210"
              required
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              disabled={submissionStatus === 'loading'}
            />
          </div>

          {/* Submission Status Message */}
          {submissionStatus === 'loading' && (
            <p className="text-primary-blue text-sm text-center">Submitting...</p>
          )}
          {submissionStatus === 'error' && errorMessage && (
            <p className="text-red-600 text-sm text-center">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-blue hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-75 transition duration-300 ease-in-out font-poppins disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={submissionStatus === 'loading'}
          >
            {submissionStatus === 'loading' ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;