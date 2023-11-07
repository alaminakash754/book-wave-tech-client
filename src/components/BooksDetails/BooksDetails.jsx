import { BsFillEyeFill } from "react-icons/bs";
import { BiSolidBookAlt } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

const BooksDetails = () => {
    const books = useLoaderData();
    const { _id, image, image1, image2, image3, image4, book_name, book_name1, book_name2, book_name3, book_name4, author_name, author_name1, author_name2, author_name3, author_name4, category } = books;
    console.log(books);
    return (
        <div>
            <div className="card w-3/4 mx-auto bg-blue-100 shadow-xl p-3 rounded-lg mb-3">

                <figure><img className='h-[500px] w-[800px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className='text-xl font-semibold text-gray-500'>{book_name}</h1>
                    <h2 className="text-lg font-medium text-gray-500">{author_name}</h2>
                    <p className='text-gray-500'>{category}</p>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/eachBook/${_id}`}>
                            <button className="btn btn-primary">Details <BsFillEyeFill /></button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-500">Explore More Books</h2>
                    <div className="flex mt-5 gap-5 text-center text-blue-600 items-center justify-center">

                        <div> <BiSolidBookAlt className="text-5xl " /></div>
                        <div> <BiSolidBookAlt className="text-5xl " /></div>
                        <div> <BiSolidBookAlt className="text-5xl " /></div>

                    </div>
                    <div className=' text-center'>
                        <progress className="progress w-56 text-blue-500 bg-blue-500 mt-4 mb-5"></progress>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className=" lg:card-side bg-blue-100 shadow-xl p-3 rounded-lg mb-3">

                    <figure><img className='h-[400px] w-[300px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image1} alt="Album" /></figure>
                    <div className="card-body">
                        <h1 className='text-xl font-semibold text-gray-500'>{book_name1}</h1>
                        <h2 className="text-lg font-medium text-gray-500">{author_name1}</h2>
                        <p className='text-gray-500'>{category}</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/eachBook/${_id}`}>
                                <button className="btn btn-primary">Details <BsFillEyeFill /></button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className=" lg:card-side bg-blue-100 shadow-xl p-3 rounded-lg mb-3">

                    <figure><img className='h-[400px] w-[300px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image2} alt="Album" /></figure>
                    <div className="card-body">
                        <h1 className='text-xl font-semibold text-gray-500'>{book_name2}</h1>
                        <h2 className="text-lg font-medium text-gray-500">{author_name2}</h2>
                        <p className='text-gray-500'>{category}</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/eachBook/${_id}`}>
                                <button className="btn btn-primary">Details <BsFillEyeFill /></button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className=" lg:card-side bg-blue-100 shadow-xl p-3 rounded-lg mb-3">

                    <figure><img className='h-[400px] w-[300px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image3} alt="Album" /></figure>
                    <div className="card-body">
                        <h1 className='text-xl font-semibold text-gray-500'>{book_name3}</h1>
                        <h2 className="text-lg font-medium text-gray-500">{author_name3}</h2>
                        <p className='text-gray-500'>{category}</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/eachBook/${_id}`}>
                                <button className="btn btn-primary">Details <BsFillEyeFill /></button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className=" lg:card-side bg-blue-100 shadow-xl p-3 rounded-lg mb-3">

                    <figure><img className='h-[400px] w-[300px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image4} alt="Album" /></figure>
                    <div className="card-body">
                        <h1 className='text-xl font-semibold text-gray-500'>{book_name4}</h1>
                        <h2 className="text-lg font-medium text-gray-500">{author_name4}</h2>
                        <p className='text-gray-500'>{category}</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-blue-700" />
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/eachBook/${_id}`}>
                                <button className="btn btn-primary">Details <BsFillEyeFill /></button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BooksDetails;