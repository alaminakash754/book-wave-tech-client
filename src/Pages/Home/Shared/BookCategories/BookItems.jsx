const BookItems = ({items}) => {
    const {_id, image, book_name } = items;
    return (
        <div className="card  bg-base-100 shadow-xl">
            
            <figure><img className="w-[400px] h-[300px] rounded-lg" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl text-blue-600 italic font-bold">{book_name}</h2>
            </div>
        </div>
    );
};

export default BookItems;