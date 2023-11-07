import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const BookItems = ({ items }) => {
    const {_id, image, book_name } = items;
    return (
        <Link to={`/details/${_id}`}>
            <div className="card  bg-blue-100 shadow-xl p-3">

                <figure><img className="w-[400px] h-[300px] rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="text-center text-2xl text-blue-600 italic font-bold">{book_name}</h2>
                    <div className=' mx-auto'>
                        <BsFillEyeFill className='text-center text-blue-700 text-3xl' />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookItems;