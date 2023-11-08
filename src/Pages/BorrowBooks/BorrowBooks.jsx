import { useContext, useEffect, useState } from "react";
import { BookWaveContext } from "../../Providers/UserProvider";
import Borrow from "../../components/Borrow/Borrow";
import Swal from "sweetalert2";

const BorrowBooks = () => {
    const { user } = useContext(BookWaveContext);
    const [borrows, setBorrows] = useState([]);
    const url = `https://book-wave-server.vercel.app/borrows?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBorrows(data))
    }, []);

    const handleReturn = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://book-wave-server.vercel.app/borrows/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });


            }
            const remaining = borrows.filter(borrow => borrow._id !== id);
            setBorrows(remaining);
        })
    }

    return (
        <div className="bg-blue-50">

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Book Name</th>
                            <th>Email</th>
                            <th>Return Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            borrows.map(borrow => <Borrow key={borrow._d}
                                borrow={borrow} handleReturn={handleReturn}
                            ></Borrow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BorrowBooks;