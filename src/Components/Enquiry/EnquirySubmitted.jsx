import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'; // Import BiArrowBack from react-icons/bi

function EnquirySubmitted() {
  return (
    <div className="relative h-auto sm:h-[20rem] bg-gradient-to-l from-green-400 to-blue-200 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <Link to="/enquiry-form" className="absolute top-12 left-12 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 hidden sm:inline-flex">
        <BiArrowBack className="inline-block mr-2" />
      </Link>
      <div className="bg-gradient-to-l from-green-400 to-blue-200 bg-opacity-70 rounded-lg shadow-lg p-8 max-w-full w-full">
        <div className="text-center text-gray-900">
          <h2 className="text-4xl font-semibold mb-6">All Done!</h2>
          <p>Your enquiry has been submitted, and our team will be working on it.</p>
          <p>Sit back and relax! You will also receive an email confirmation.</p>
        </div>
      </div>
    </div>
  );
}

export default EnquirySubmitted;
