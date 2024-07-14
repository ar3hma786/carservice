import React from 'react';
import { GrMoney, GrDocumentDownload } from 'react-icons/gr';
import { AiOutlineCar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50" style={{ fontFamily: 'Montserrat' }} id='services'>
      <h1 className="text-3xl sm:text-4xl text-center mb-4 mt-8">It's As Easy As 1-2-3</h1>
      <p className="text-center text-base sm:text-sm max-w-lg px-4 mb-8">
        We assist in securing compensation for overcharged car loan interest rates. Our process is designed to simplify your experience and ensure you receive fair treatment.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:w-4/5">
        <div className="rounded-lg p-4 flex flex-col items-center justify-center bg-white shadow-md max-w-xs w-full sm:w-auto">
          <GrMoney size={48} className="text-gray-800" />
          <h3 className="text-lg font-medium text-center mt-4 mb-2">EVALUATE YOUR LOAN</h3>
          <p className="text-sm text-center px-4">
            Assess your car loan details to identify potential overcharges. We help you understand the terms and conditions affecting your repayment.
          </p>
        </div>
        <div className="rounded-lg p-4 flex flex-col items-center justify-center bg-white shadow-md max-w-xs w-full sm:w-auto mt-4 sm:mt-0">
          <AiOutlineCar size={48} className="text-gray-800" />
          <h3 className="text-lg font-medium text-center mt-4 mb-2">FILE A CLAIM</h3>
          <p className="text-sm text-center px-4">
            Initiate a claim against unfair interest rates. Our legal experts guide you through the process, ensuring your rights are protected.
          </p>
        </div>
        <div className="rounded-lg p-4 flex flex-col items-center justify-center bg-white shadow-md max-w-xs w-full sm:w-auto mt-4 sm:mt-0">
          <GrDocumentDownload size={48} className="text-gray-800" />
          <h3 className="text-lg font-medium text-center mt-4 mb-2">RECEIVE COMPENSATION</h3>
          <p className="text-sm text-center px-4">
            Once your claim is approved, receive compensation for overpaid interest rates. We strive for a swift resolution to restore financial fairness.
          </p>
        </div>
      </div>
      <Link
        to="/enquiry-form"
        className="bg-gray-800 text-white rounded-md mt-8 py-3 px-6 text-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 mb-8 transition-opacity duration-500"
        style={{ fontFamily: 'Montserrat' }}
      >
        START YOUR CLAIM
      </Link>
    </div>
  );
}

export default Services;
