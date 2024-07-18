import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Avatar, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import logoImage from '/images/Logo.png';
import Claims from './Claims';
import { logoutUser } from '../State/Authentication/Action';
 // Import the DashboardRouter component

const navigation = [
  { name: 'CLAIMS', href: '/dashboard/claims'  },
  { name: 'COMPENSATED CLAIMS', href: '' },
  { name: 'ANALYTICS', href: '#analytics' },
  { name: 'HELP', href: '#help' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };


  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gradient-to-b from-green-200 to-blue-200 text-gray-1000">
        <div className="p-4">
          <img src={logoImage} alt="Company Logo" className="h-12" />
        </div>
        <nav className="mt-[5rem]">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2.5 px-4 rounded hover:bg-gray-800 hover:text-white mt-3"
            >
              {item.name}
            </a>
          ))}
        </nav> 
      </aside>
      <div className="flex flex-col flex-grow">
        <Disclosure as="nav" className="bg-white shadow">
          {({ open }) => (
            <>
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="hidden sm:ml-6 sm:flex mt-3">
                      <div className="relative flex-1">
                        <TextField
                          variant="outlined"
                          size="small"
                          placeholder="Search..."
                          className="w-full rounded-l rounded-r-none bg-white"
                          style={{ width: '500px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <span className="sr-only">Open user menu</span>
                          <Avatar>{user?.fullName[0].toUpperCase()}</Avatar>
                        </Menu.Button>
                      </div>
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
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
        <Claims/>
      </div>
    </div>
  );
};

export default Dashboard;
