import Swal from 'sweetalert2';

const AddBook = () => {
    const handleAddItem = e => {
        e.preventDefault();
        const form = e.target;
        const select = form.select.value;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newBook = { select, image, name, quantity, author, description, rating }
        console.log(newBook);

        fetch('https://book-wave-server.vercel.app/userBook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'New Book Added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

            

    }

    return (
        <div className="bg-blue-100 mb-5 mt-8 text-center">
            <h1 className="text-3xl text-center text-blue-500 font-bold my-2 italic">Added New Book</h1>
            <progress className="progress w-56 text-blue-500 bg-blue-500 mt-4 mb-5"></progress>
            <form onSubmit={handleAddItem}>
                {/* from type and brand row */}
                <div className="w-3/4 mx-auto space-y-3 mb-3 mt-5">
                    <select name="select" className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Choose One</option>
                        <option>Islamic Books</option>
                        <option>Children Books</option>
                        <option>Education & Reference</option>
                        <option>History books</option>
                    </select>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Image</span>
                            <input type="text" placeholder="Image URL" name="image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="Book Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="number" name="quantity" placeholder="Quantity of the Book" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="input-group">
                            <span>Author Name</span>
                            <input type="text" placeholder="Author Name" name="author" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Description</span>
                            <input type="text" placeholder="description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Rating</span>
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className=" text-center ">
                        <button className="btn btn-wide mb-3 ">Add Book</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddBook;