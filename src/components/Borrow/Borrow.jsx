const Borrow = ({ borrow, handleReturn }) => {
    const { _id, borrowBook, email, date, image } = borrow;

    
    return (
        <tr>

            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>
            <td>
                {borrowBook}
            </td>
            <td>{email}</td>
            <td>{date}</td>
            <th>
                <button onClick={() => handleReturn(_id)} className="btn btn-ghost bg-blue-600">Return Book</button>
            </th>
        </tr>
    );
};

export default Borrow;