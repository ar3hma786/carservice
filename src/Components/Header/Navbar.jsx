import React, { useRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '/images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'WHATS IT ALL ABOUT', href: '#home', current: false },
  { name: 'SERVICES', href: '#services', current: false },
  { name: 'ABOUT US', href: '#aboutus', current: false },
  { name: 'RESOURCE CENTER', href: '#resource', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const navigate = useNavigate();
  const resourceRef = useRef(null);

  const handleEnquiryClick = () => {
    navigate('/enquiry-form');
  };

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Adjust the timeout as needed
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-l from-green-400 to-blue-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <Link to="/" className="flex items-center justify-start sm:justify-center">
                <img
                  className="h-12 w-auto"
                  src={logoImage}
                  alt="Car Service"
                />
              </Link>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to="/"
                      onClick={(e) => handleScroll(e, item.href)}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium transition duration-300'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                <button
                  onClick={handleEnquiryClick}
                  className="bg-gray-800 text-white rounded-full py-1 px-4 text-sm shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-300"
                >
                  Schedule an Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Tablet and Mobile menu */}
          <Disclosure.Panel as="div" className="sm:hidden">
            <Disclosure.Panel className={`px-2 pt-2 pb-3 space-y-1 ${open ? 'block' : 'hidden'} transition-all duration-300`}>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to="/"
                  onClick={(e) => handleScroll(e, item.href)}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium transition duration-300'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <button
                onClick={handleEnquiryClick}
                className="bg-gray-800 text-white block w-full text-left rounded-md px-3 py-2 text-sm shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-300"
              >
                Schedule an Appointment
              </button>
            </Disclosure.Panel>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
