import { MdUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DataBaseBook = ({ dataBook }) => {
    const { _id, image, image1, image2, image3, image4, book_name, book_name1, book_name2, book_name3, book_name4, author_name, author_name1, author_name2, author_name3, author_name4, category } = dataBook;



    return (
        <div>
            <div className=" lg:card-side bg-blue-100 shadow-xl p-3 rounded-lg mb-3">

                <figure><img className='h-[400px] w-[300px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className='text-xl font-semibold text-gray-500'>{category}</h1>
                    <h2 className="text-lg font-medium text-gray-500">{book_name}</h2>
                    <p className='text-gray-500'>{author_name}</p>
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
            <div className=" lg:card-side bg-blue-100 shadow-xl p-3 rounded-lg  mb-3">

                <figure><img className='h-[400px] w-[300px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image1} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className='text-xl font-semibold text-gray-500'>{category}</h1>
                    <h2 className="text-lg font-medium text-gray-500">{book_name1}</h2>
                    <p className='text-gray-500'>{author_name1}</p>
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
            <div className=" lg:card-side bg-blue-100 shadow-xl p-3 rounded-lg">

                <figure><img className='h-[400px] w-[300px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image2} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className='text-xl font-semibold text-gray-500'>{category}</h1>
                    <h2 className="text-lg font-medium text-gray-500">{book_name2}</h2>
                    <p className='text-gray-500'>{author_name2}</p>
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
        </div>

    );
};

export default DataBaseBook;