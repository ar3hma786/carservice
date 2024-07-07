import React, { useState } from 'react';
import { GrChatOption } from 'react-icons/gr';
import { AiOutlineCar, AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Services() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50" style={{ fontFamily: 'Montserrat' }} id='services'>
      <h1 className="text-3xl sm:text-4xl text-center mb-4 mt-8">It's As Easy As 1-2-3</h1>
      <p className="text-center text-base sm:text-sm max-w-lg px-4 mb-8">
        We offer a wide range of car maintenance and repair services. From basic car checks to complex car repairs, we're here to help you find the best solution for your needs.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:w-4/5">
        <div className="rounded-lg p-4 flex flex-col items-center justify-center bg-white shadow-md max-w-xs w-full sm:w-auto">
          <GrChatOption size={48} className="text-gray-800" />
          <h3 className="text-lg font-medium text-center mt-4 mb-2">SELECT YOUR VEHICLE</h3>
          <p className="text-sm text-center px-4">
            Choose your vehicle type to begin exploring our range of services. Whether you drive a compact sedan or a rugged SUV, we cater to all types of vehicles.
          </p>
        </div>
        <div className="rounded-lg p-4 flex flex-col items-center justify-center bg-white shadow-md max-w-xs w-full sm:w-auto mt-4 sm:mt-0">
          <AiOutlineCar size={48} className="text-gray-800" />
          <h3 className="text-lg font-medium text-center mt-4 mb-2">RAISE AN ENQUIRY</h3>
          <p className="text-sm text-center px-4">
            Have a question about our services? Need a customized solution for your specific car issue? Submit an enquiry and our expert team will get back to you promptly.
          </p>
        </div>
        <div className="rounded-lg p-4 flex flex-col items-center justify-center bg-white shadow-md max-w-xs w-full sm:w-auto mt-4 sm:mt-0">
          <AiOutlineCheck size={48} className="text-gray-800" />
          <h3 className="text-lg font-medium text-center mt-4 mb-2">GET RESOLVED</h3>
          <p className="text-sm text-center px-4">
            Once you've submitted your enquiry, sit back and relax. We'll work diligently to resolve your car maintenance or repair issue efficiently, ensuring your vehicle is back on the road in no time.
          </p>
        </div>
      </div>
      <Link
        to="/enquiry-form"
        className="bg-gray-800 text-white rounded-md mt-8 py-3 px-6 text-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 mb-8 transition-opacity duration-500"
        style={{ fontFamily: 'Montserrat' }}
      >
        ENQUIRE NOW
      </Link>
    </div>
  );
}

export default Services;
