import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-red-400 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Navbar Brand */}
                <Link className="text-white text-xl font-bold font-serif" to="/">
                    Daiyan Alam: Full Stack Developer
                </Link>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-4">
                    <Link className="text-gray-300 hover:text-white" to="/about">
                        About
                    </Link>
                    <Link className="text-gray-300 hover:text-white" to="/projects">
                        Projects
                    </Link>
                    <Link className="text-gray-300 hover:text-white" to="/skills">
                        Skills
                    </Link>
                    <Link className="text-gray-300 hover:text-white" to="/contact">
                        Contact
                    </Link>
                    <Link className="text-gray-300 hover:text-white" to="/githubProfile">
                        Github Profile
                    </Link>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-red-400 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}
            >
                {/* Close Button Section */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col space-y-4 p-4">
                    <Link
                        className="text-gray-300 hover:text-white"
                        to="/about"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        className="text-gray-300 hover:text-white"
                        to="/projects"
                        onClick={toggleMenu}
                    >
                        Projects
                    </Link>
                    <Link
                        className="text-gray-300 hover:text-white"
                        to="/skills"
                        onClick={toggleMenu}
                    >
                        Skills
                    </Link>
                    <Link
                        className="text-gray-300 hover:text-white"
                        to="/contact"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                    <Link
                        className="text-gray-300 hover:text-white"
                        to="/githubProfile"
                        onClick={toggleMenu}
                    >
                        Github Profile
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
