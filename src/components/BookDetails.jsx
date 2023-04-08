import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData()
    console.log(book)
    return (
        <div>
            yhis is a book details
        </div>
    );
};

export default BookDetails;