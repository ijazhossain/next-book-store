import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const { books } = useLoaderData()
    // console.log(books)
    return (
        <div className=' w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[80px]'>
            {
                books.map(book => <Book
                    key={book.isbn13}
                    book={book}
                ></Book>)
            }
        </div>
    );
};

export default Books;