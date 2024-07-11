import React from 'react';
import ThreeDModel from './ThreeDModel/ThreeDModel';

function ResourceCenter() {
  return (
    <div className="relative flex flex-col items-center" id="resource">
      <ThreeDModel />
      <div className="text-gray-600 text-center px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="text-sm sm:text-base">
          <p className="my-2 hidden md:block md:absolute md:top-[3em] md:left-[8rem] text-sm md:text-base">
            FIGHT AGAINST UNFAIR CAR LOAN <br />INTEREST RATES
          </p>
          <p className="my-2 hidden md:block md:absolute md:top-[3rem] md:right-[8rem] text-sm md:text-base">
            LEGAL ASSISTANCE FOR CAR LOAN <br />DISPUTES
          </p>
          <p className="my-2 hidden md:block md:absolute md:bottom-[3rem] md:right-[8rem] text-sm md:text-base">
            NEGOTIATION OF CAR LOAN <br />REPAYMENT TERMS
          </p>
          <p className="my-2 hidden md:block md:absolute md:bottom-[3rem] md:left-[8rem] text-sm md:text-base">
            EXPERT ADVICE ON AVOIDING <br />PREDATORY LENDING PRACTICES
          </p>
          <p className="my-2 hidden md:block md:absolute md:top-[15rem] md:right-[3rem] text-sm md:text-base">
            EVALUATION OF CAR LOAN <br />CONTRACTS AND TERMS
          </p>
          <p className="my-2 hidden md:block md:absolute md:top-[15rem] md:left-[3rem] text-sm md:text-base">
            GUIDANCE ON SEEKING COMPENSATION <br />FOR UNFAIR FINANCIAL PRACTICES
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResourceCenter;
