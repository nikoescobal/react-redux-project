import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const place = useLocation();
  const back = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 lg:h-6 lg:w-6 fill-current text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
        clipRule="evenodd"
      />
    </svg>
  );
  const goBack = place.pathname.includes('id') ? back : '';
  return (
    <nav className="w-full bg-red-600">
      <div className="justify-start" />
      <div className="flex align-middle w-full items-center space-x-3 p-6 justify-end">
        <div className="w-1/12 justify-start lg:text-3xl flex text-white">
          <NavLink exact="true" to={{ pathname: '/' }}>
            {goBack}
          </NavLink>
        </div>

        <div className="text-yellow-500 font-nunito uppercase font-extrabold align-middle items-center w-full justify-center text-lg md:text-3xl lg:text-5xl flex">
          <NavLink to="/"> My Hero Academia DB</NavLink>
          {' '}
&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 fill-current text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 lg:h-6 lg:w-6 fill-current text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 lg:h-7 lg:w-7 fill-current text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </nav>
  );
}
export default Navbar;
