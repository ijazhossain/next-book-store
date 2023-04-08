import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const { books } = useLoaderData()
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <LoadingSpinner/>
    }
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