import { MdUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BooksCard = ({ book }) => {
    const { _id, select, image, name, author } = book;
    return (
        <div className=" lg:card-side bg-blue-100 shadow-xl p-3 rounded-lg">

            <figure><img className='h-[400px] w-[300px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h1 className='text-xl font-semibold text-gray-500'>{select}</h1>
                <h2 className="text-lg font-medium text-gray-500">{name}</h2>
                <p className='text-gray-500'>{author}</p>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" checked />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/updateBook/${_id}`}>
                        <button className="btn btn-primary">Update Book <MdUpdate /></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BooksCard;