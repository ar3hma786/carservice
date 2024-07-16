import React, { useEffect, useState } from 'react';
import bmwImage from '/images/BMW.png';
import mercedesImage from '/images/Mercedes.png';
import { ReactTyped } from 'react-typed'; 
import { Link } from 'react-router-dom';

function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);
 
  return (
    <div className="relative h-[15rem] sm:h-[25rem] bg-gradient-to-l from-green-200 to-blue-200 flex flex-col items-center justify-center" id='home'>
      
      <h1
        className={`text-3xl sm:text-[1.5rem] md:text-[2rem] font-extrabold text-gray-800 text-center mb-2 mt-8 transition-opacity duration-4000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ fontFamily: 'Montserrat' }}
      >
        CHAMPIONING YOUR RIGHT TO FAIR CAR LOAN RATES
      </h1>
      
      <p
        className={`text-lg sm:text-base text-white text-center mb-3 transition-opacity duration-5000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ReactTyped
          strings={[
          "We Secure Compensation for Unfair Car Loan Interest Charges.",
          "We Offer Comprehensive Financial Solutions to help you navigate the complexities of fair car loan rates."
  
          ]}
          typeSpeed={100} // Set to maximum speed
          backSpeed={50} // Backspacing speed in milliseconds
          loop // Infinite looping of strings
        />
      </p>
      
      <Link
        to="/login"
        className={`bg-gray-800 text-white rounded-md py-3 px-6 text-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 mb-8 transition-opacity duration-5000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ fontFamily: 'Montserrat' }}
      >
        GET STARTED
      </Link>
      
      <div className="relative w-full h-[450px] md:w-[900px]">
        <img
          src={bmwImage}
          alt="BMW"
          className="absolute rounded-lg w-[450px] left-[1.5rem] transition-transform hover:scale-105 top-1/2 transform -translate-y-1/2 mt-10 md:block hidden"
        />
        <img
          src={mercedesImage}
          alt="Mercedes"
          className="absolute rounded-lg w-[450px] right-[1.5rem] transition-transform hover:scale-105 top-1/2 transform -translate-y-1/2 mt-3 md:block hidden"
        />
      </div>
    </div>
  );
}

export default HomePage;
