import React from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <nav className='bg-gray-100 px-7 py-5 flex items-center justify-between lg:w-[85%] mx-auto '>
            <div className='flex items-center '>
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <h2 className='text-xl font-bold ml-1'>nextPage</h2>
            </div>
            <div className='flex'>
                <Link className='ml-10 font-semibold' to='/'>Home</Link>
                <Link className='ml-10 font-semibold' to='/books'>Books</Link>
                <Link className='ml-10 font-semibold' to='/about'>About</Link>
            </div>
        </nav>
    );
};

export default Header;