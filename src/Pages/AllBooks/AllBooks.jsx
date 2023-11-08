import { useLoaderData } from "react-router-dom";
import { BiSolidBookAlt } from 'react-icons/bi';
import BooksCard from "../../components/BooksCard/BooksCard";
import { useEffect, useState } from "react";
import DataBaseBook from "../../components/DataBaseBook/DataBaseBook";


const AllBooks = () => {
    const books = useLoaderData();
    const [dataBooks, setDataBooks] = useState([]);

    useEffect(() => {
        fetch('https://book-wave-server.vercel.app/book', {credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                setDataBooks(data)
            })
    }, []);


    return (
        <div>
            <div className="text-center ">
                <h1 className="text-3xl font-bold text-gray-500">Our Most Popular Books</h1>
                <p className="font-bold text-gray-400">The Most Popular Books Today are available in Book Library</p>

                <div className="flex mt-5 gap-5 text-center text-blue-600 items-center justify-center">

                    <div> <BiSolidBookAlt className="text-5xl " /></div>
                    <div> <BiSolidBookAlt className="text-5xl " /></div>
                    <div> <BiSolidBookAlt className="text-5xl " /></div>

                </div>
                <progress className="progress progress-info w-56" value="100" max="100"></progress>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mx-auto mt-10">
                {
                    books.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mx-auto mt-10">
                {
                    dataBooks.map(dataBook => <DataBaseBook key={dataBook._id} dataBook={dataBook}></DataBaseBook>)
                }
            </div>
           
        </div>
    );
};

export default AllBooks;