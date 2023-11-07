import { Link, useLoaderData } from "react-router-dom";
import { AiFillRead } from 'react-icons/ai';
import { BsBookmarkCheckFill } from 'react-icons/bs';

const EachBookDetails = () => {
    const books = useLoaderData();
    const { _id, image, image1, image2, image3, image4, book_name, book_name1, book_name2, book_name3, book_name4, short_description, short_description1, short_description2, short_description3, short_description4 } = books;
    return (
        <div className="card w-3/4 mx-auto bg-blue-100 shadow-xl p-3 rounded-lg mb-3">

            <figure><img className='h-[500px] w-[800px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h1 className='text-xl font-semibold text-gray-500'>{book_name}</h1>
                <h2 className="text-lg font-medium text-gray-500">{short_description1}</h2>
                <p className='text-gray-500'>{short_description}</p>

                <div className="card-actions justify-end">
                    <Link to={`/fullDetails/${_id}`}>
                        <button className="btn btn-primary">Read <AiFillRead /></button>
                    </Link>
                    <Link to={`/bookBorrow/${_id}`}>
                        <button className="btn btn-primary">Borrow <BsBookmarkCheckFill /></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default EachBookDetails;