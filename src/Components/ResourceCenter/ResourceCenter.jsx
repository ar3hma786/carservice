import React from 'react';
import ThreeDModel from './ThreeDModel/ThreeDModel';

function ResourceCenter() {
  return (
    <div className="relative flex flex-col items-center" id="resource">
      <ThreeDModel />
      <div className="text-gray-600 text-center px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="text-sm sm:text-base">
          <p className="my-2 hidden md:block md:absolute md:top-[3em] md:left-[8rem] text-sm md:text-base">
            COMPREHENSIVE ENGINE DIAGNOSTICS <br />& REPAIRS
          </p>
          <p className="my-2 hidden md:block md:absolute md:top-[3rem] md:right-[8rem] text-sm md:text-base">
            EFFICIENT BRAKE SYSTEM <br />MAINTENANCE & REPLACEMENT
          </p>
          <p className="my-2 hidden md:block md:absolute md:bottom-[3rem] md:right-[8rem] text-sm md:text-base">
            COMPLETE TIRE SERVICES INCLUDING <br />ROTATION, BALANCING & REPLACEMENT
          </p>
          <p className="my-2 hidden md:block md:absolute md:bottom-[3rem] md:left-[8rem] text-sm md:text-base">
            ADVANCED ELECTRICAL SYSTEM <br />REPAIRS & UPGRADES
          </p>
          <p className="my-2 hidden md:block md:absolute md:top-[15rem] md:right-[3rem] text-sm md:text-base">
            QUALITY OIL CHANGES <br />& FLUID CHECKS
          </p>
          <p className="my-2 hidden md:block md:absolute md:top-[15rem] md:left-[3rem] text-sm md:text-base">
            THOROUGH VEHICLE INSPECTIONS <br />& DIAGNOSTICS
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResourceCenter;