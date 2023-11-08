import { Link, useLoaderData } from "react-router-dom";
import { AiFillRead } from 'react-icons/ai';
import { useContext } from "react";
import { BookWaveContext } from "../../Providers/UserProvider";
import Swal from "sweetalert2";

const EachBookDetails = () => {
    const books = useLoaderData();
    const { _id, image, book_name, short_description, short_description1 } = books;

    const { user } = useContext(BookWaveContext);

    const handleBookBorrowed = e => {
        e.preventDefault();
        const form = e.target;
        const name = user?.name;
        const date = form.date.value;
        const email = user?.email;
        const borrowBook = {
            customerName: name,
            email,
            borrowBook: book_name,
            image,
            date,
            borrow: _id,
        }
        console.log(borrowBook)
        fetch('https://book-wave-server.vercel.app/borrows', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(borrowBook)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your book borrowed has been completed',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }


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
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="btn bg-blue-700 text-gray-100">Borrow Book</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleBookBorrowed}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="email" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user?.email} placeholder="email" required className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Return Date</span>
                                    </label>
                                    <input type="date" name='date' required className="input input-bordered" />

                                </div>
                                <input type="submit" className="btn btn-primary mt-2" value="Submit" />

                            </form>
                            <div className="modal-action">
                                <label htmlFor="my_modal_6" className="btn">Close!</label>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EachBookDetails;