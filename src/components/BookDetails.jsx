import React, { useState } from 'react';
import { useLoaderData, } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData()
    console.log(book);
    const { isbn13, image, title, subtitle, authors, publisher, rating, year, desc, price, url } = book;
    const [fold, setFold] = useState(true)

    return (
        <div className='w-[70%] mx-auto grid grid-cols-2 gap-6 my-[80px] border border-[#e5e7eb] rounded-md'>
            <img className='w-full h-full' src={image} alt="" />
            <div className='place-self-center '>
                <p className='bg-[#facc15] px-5 py-0 inline-block font-semibold rounded-lg tracking-wider uppercase mb-4'><small>Brand New</small></p>
                <h2 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>{title}</h2>
                <p>Author:{authors}</p>
                <p>Publishers: {publisher}</p>
                <p>Year:{year}</p>
                <p>Rating: {rating}</p>
                {
                    fold ?
                        <>
                            <p className='mb-5 mt-6 text-gray-500'>{desc.substring(0, 100)}
                                <span className='cursor-pointer text-blue-600' onClick={() => setFold(!fold)}>..... Read more</span></p>
                        </>
                        :
                        <>
                            <p className='mb-5 mt-6 text-gray-500'>{desc}
                                <span className='cursor-pointer text-blue-600' onClick={() => setFold(!fold)}>..... Read less</span></p>
                        </>
                }
                <div className='flex items-center gap-5 font-bold'>
                    <a target='_blank' href={url}>
                        <button className='block text-[#f3f4f6] bg-[#60a5fa] px-7 py-3 font-semibold rounded-md'>Buy Now</button>
                    </a>
                    <p>Price: {price}</p>

                </div>

            </div>
        </div>
    );
};

export default BookDetails;