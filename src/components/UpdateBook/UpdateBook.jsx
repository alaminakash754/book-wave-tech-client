import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
    const book = useLoaderData();
    const {_id, select, image, name, quantity, author, description, rating } = book;

    const handleUpdateBook = e => {
        e.preventDefault();
        const form = e.target;
        const select = form.select.value;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updateBook = { select, image, name, quantity, author, description, rating }
        console.log(updateBook);

        fetch(`https://book-wave-server.vercel.app/userBook/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Updated Book successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

            

    }
    return (
        <div className="bg-blue-100 mb-5 mt-8 text-center">
        <h1 className="text-3xl text-center text-blue-500 font-bold my-2 italic">Updated Book</h1>
        <progress className="progress progress-info w-56 text-center" value="70" max="100"></progress>
        <form onSubmit={handleUpdateBook}>
            {/* from type and brand row */}
            <div className="w-3/4 mx-auto space-y-3 mb-3 mt-5">
                <select name="select" defaultValue={select} className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Choose One</option>
                    <option>Islamic Books</option>
                    <option>Children Books</option>
                    <option>Education & Reference</option>
                    <option>History books</option>
                </select>
                <div className="form-control">
                    <label className="input-group">
                        <span>Image</span>
                        <input type="text" defaultValue={image} placeholder="Image URL" name="image" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" defaultValue={name} placeholder="Book Name" name="name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Quantity</span> 
                        <input type="number" name="quantity" defaultValue={quantity} placeholder="Quantity of the Book" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group">
                        <span>Author Name</span>
                        <input type="text" placeholder="Author Name" defaultValue={author} name="author" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Description</span>
                        <input type="text" placeholder="description" defaultValue={description} name="description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Rating</span>
                        <input type="text" placeholder="Rating" defaultValue={rating} name="rating" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className=" text-center ">
                    <button className="btn btn-wide mb-3 ">Update Book</button>
                </div>
            </div>

        </form>
    </div>
    );
};

export default UpdateBook;