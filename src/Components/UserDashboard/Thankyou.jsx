import React from 'react';

const ThankYou = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">Thank You for Submitting Your Claim</h1>
        <p className="text-gray-700 mb-4">Your query has been received, and you will receive an email confirmation shortly.</p>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded shadow"
          onClick={() => window.location.href = '/dashboard'}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
    
  );
};

export default ThankYou;
