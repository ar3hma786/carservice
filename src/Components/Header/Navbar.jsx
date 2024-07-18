import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '/images/Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../State/Authentication/Action';

const navigation = [
  { name: 'WHATS IT ALL ABOUT', href: '#home' },
  { name: 'SERVICES', href: '#services' },
  { name: 'ABOUT US', href: '#aboutus' },
  { name: 'RESOURCE CENTER', href: '#resource' },
];

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-l from-green-200 to-blue-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl">
            <div className="relative flex items-center justify-between h-16">
              <Link to="/" className="flex items-center">
                <img className="h-12 w-auto" src={logoImage} alt="Car Service" />
              </Link>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                        'text-white hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                {!isLoggedIn ? (
                  <Button onClick={() => navigate('/login')} className="text-dark">LOGIN</Button>
                ) : (
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center text-white">
                      <Avatar>{user?.fullName[0].toUpperCase()}</Avatar>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogout}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                LOGOUT
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to="/"
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {!isLoggedIn ? (
                <Button onClick={() => navigate('/login')} className="text-white origin-top-right">Login</Button>
              ) : (
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center text-white">
                    <Avatar>{user?.fullName[0].toUpperCase()}</Avatar>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogout}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
