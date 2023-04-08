import React from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid'
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <nav className='bg-gray-100 px-7 py-5 flex items-center justify-between lg:w-[85%] mx-auto '>
            <ActiveLink to='/'>
                <div className='flex items-center '>
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <h2 className='text-xl font-bold ml-1'>nextPage</h2>
                </div>
            </ActiveLink>
            <div className='flex'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/books'>Books</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>
            </div>
        </nav>
    );
};

export default Header;