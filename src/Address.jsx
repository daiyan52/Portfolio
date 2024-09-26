import React from 'react';

const Address = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2 px-4 sm:px-0">
      <p className="text-base sm:text-lg text-gray-600 text-center">
        <span className="block sm:inline-block mr-0 sm:mr-4 mb-2 sm:mb-0">
          <i className="fa fa-phone mr-2" />
          <a href="tel:+918102472607" className="hover:text-blue-600">8102472607</a>
        </span>
        <span className="block sm:inline-block">
          <i className="fa fa-envelope mr-2" />
          <a href="mailto:rehanalamkkr@gmail.com" className="hover:text-blue-600">rehanalamkkr@gmail.com</a>
        </span>
      </p>
      <hr className="w-full border-t border-gray-300 mt-2" /> {/* Horizontal line */}
    </div>
  );
};

export default Address;
