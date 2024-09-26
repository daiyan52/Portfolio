import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Heading Section */}
      <h1 className="text-3xl font-bold text-gray-800 text-center leading-snug">
        Welcome to My Portfolio
      </h1>

      {/* Introduction Section */}
      <p className="mt-4 text-base text-gray-600 text-center leading-relaxed max-w-xs sm:max-w-sm">
        I am a passionate Full Stack Developer with expertise in Django, React.
        <span className='text-green-500'> Explore my projects and skills below!</span>
      </p>

      {/* Navigation Buttons */}
      <div className="mt-8 w-auto flex flex-col space-y-4">
        {/* Link to All Projects */}
        <Link
          to="/all-projects"
          className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-center"
        >
          View My Projects
        </Link>

        {/* Link to GitHub Profile */}
        <Link
          to="/github-profile"
          className="px-4 py-3 bg-blue-600  text-white rounded-lg hover:bg-blue-700 transition duration-300 text-center"
        >
          View My GitHub Profile
        </Link>
      </div>
    </div>
  );
};

export default Home;
