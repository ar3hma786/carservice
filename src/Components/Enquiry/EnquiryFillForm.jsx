import React, { useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const EnquiryForm = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/enquiry-submitted');
  }, [navigate]);

  return (
    <div className="relative h-auto bg-gradient-to-l from-green-400 to-blue-200 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <Link to="/" className="absolute top-12 left-12 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10">
        <BiArrowBack className="inline-block mr-2" />
      </Link>
      <form onSubmit={handleSubmit} className="w-full bg-transparent rounded-lg shadow-2xl p-6 border-t-4 lg:grid lg:grid-cols-2 lg:gap-6 relative z-0">
        <h2 className="lg:col-span-2 text-4xl text-gray-900 mb-6 text-center">BOOK AN APPOINTMENT</h2>

        <MemoizedFormField label="Name" id="name" type="text" placeholder="Your Name" required />
        <MemoizedFormField label="Email" id="email" type="email" placeholder="Your Email" required />
        <MemoizedFormField label="Phone Number" id="phone" type="tel" placeholder="Your Phone Number" required />
        <MemoizedFormFieldSelect label="Country" id="country" options={['USA', 'Canada', 'UK', 'Australia']} required />
        <MemoizedFormFieldSelect label="Car Brand" id="carBrand" options={['BMW', 'Mercedes', 'Audi', 'Toyota']} required />

        <div className="lg:col-span-2 mb-6">
          <span className="block text-gray-700 text-sm font-semibold mb-2">Service Type</span>
          <div className="flex items-center mb-2">
            <input className="mr-2 leading-tight" type="radio" id="visitWorkshop" name="serviceType" value="visitWorkshop" />
            <label className="text-gray-700" htmlFor="visitWorkshop">Visit Workshop</label>
          </div>
          <div className="flex items-center">
            <input className="mr-2 leading-tight" type="radio" id="pickupDrop" name="serviceType" value="pickupDrop" />
            <label className="text-gray-700" htmlFor="pickupDrop">Require Pick Up & Drop</label>
          </div>
        </div>

        <MemoizedFormField label="Car Model" id="carModel" type="text" placeholder="Your Car Model" required />

        <div className="lg:col-span-2 mb-8">
          <MemoizedFormField label="Message" id="message" type="textarea" rows="4" placeholder="Your Message" required />
        </div>

        <div className="flex items-center justify-center lg:col-span-2">
          <button
            className="py-3 px-6 mt-8 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  );
};

const FormField = ({ label, id, type, placeholder, rows, required }) => (
  <div className={`mb-6 ${type === 'textarea' ? 'lg:col-span-2' : ''}`}>
    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={id}>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300"
        id={id}
        rows={rows || 4}
        placeholder={placeholder}
        required={required}
      />
    ) : (
      <input
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300"
        id={id}
        type={type || 'text'}
        placeholder={placeholder}
        required={required}
      />
    )}
  </div>
);

const FormFieldSelect = ({ label, id, options, required }) => (
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={id}>
      {label}
    </label>
    <select
      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300"
      id={id}
      required={required}
    >
      {options && options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

const MemoizedFormField = React.memo(FormField);
const MemoizedFormFieldSelect = React.memo(FormFieldSelect);

export default EnquiryForm;
