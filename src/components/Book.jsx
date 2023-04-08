import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { isbn13, image, title, subtitle, price, url } = book;
    // console.log(book)
    return (
        <Link to={`/books/${isbn13}`}>
            <div className='shadow-lg rounded-lg relative transform hover:-translate-y-2 hover:shadow-2xl duration-500'>
                <img src={image} alt="" />
                <div className='absolute bg-black opacity-0 hover:opacity-75 inset-0  px-4 py-6 rounded-md transition-opacity duration-200 flex flex-col'>
                    <h3 className='mb-4 text-lg font-bold text-gray-100'>{title}</h3>
                    <p className='text-sm tracking-wide text-gray-300'>{subtitle}</p><br></br>
                    <p className='text-sm mt-auto tracking-wide text-gray-300 block'>Price: {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;