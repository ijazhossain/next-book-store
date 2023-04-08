import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import reader from "../assets/94115-reading-boy.json";


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='lg:w-[75%] mx-auto grid md:grid-cols-2 pt-[80px] '>
            <div className='place-self-center '>
                <p className='bg-[#facc15] px-5 py-0 inline-block font-semibold rounded-lg tracking-wider uppercase mb-4'><small>On Sale!</small></p>
                <h2 className='text-3xl font-sans text-gray-900 font-bold'>A reader lives a<br></br>
                    thousand lives <span className='text-[#60A5FA]'>before he dies</span></h2>
                <p className='my-6 text-[18px]'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren't very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <div className='flex items-center gap-5'>

                    <button onClick={() => navigate('/books')} className='flex items-center text-[#f3f4f6] bg-[#60a5fa] px-7 py-3 font-semibold rounded-md'>
                        Visit Store
                        <ShoppingCartIcon className='w-[20px] h-[20px] ml-3 ' />
                    </button>

                    <Link className='font-semibold' to='/about'>Learn More</Link>
                </div>

            </div>
            <div className='p-10'>
                <Lottie animationData={reader} loop={true} />
            </div>
        </div>
    );
};

export default Home;