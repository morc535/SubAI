import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img className="h-42 w-36 pt-6 rounded-full" src="../src/Images/2.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center space-x-10">
                        <NavLink
                            to="/"
                            className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                            activeClassName="text-white"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                            activeClassName="text-white"
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                            activeClassName="text-white"
                        >
                            Contact
                        </NavLink>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-blue-500 text-center`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavLink
                        to="/"
                        className="text-gray-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        activeClassName="text-white"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="text-gray-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        activeClassName="text-white"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="text-gray-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        activeClassName="text-white"
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
