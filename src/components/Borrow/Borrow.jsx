

const Borrow = ({ borrow }) => {
    const { borrowBook, email, date, image } = borrow;

    const handleReturn = id => {
        
    }
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
                <button className="btn btn-ghost bg-blue-600">Return Book</button>
            </th>
        </tr>
    );
};

export default Borrow;