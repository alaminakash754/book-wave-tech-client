import { useContext, useEffect, useState } from "react";
import { BookWaveContext } from "../../Providers/UserProvider";
import Borrow from "../../components/Borrow/Borrow";

const BorrowBooks = () => {
    const { user } = useContext(BookWaveContext);
    const [borrows, setBorrows] = useState([]);
    const url = `http://localhost:5000/borrows?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBorrows(data))
    }, [])

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
                            borrows.map(borrow => <Borrow key={borrow._d} borrow={borrow}></Borrow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BorrowBooks;