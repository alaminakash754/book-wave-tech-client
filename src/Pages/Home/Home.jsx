import { useLoaderData } from "react-router-dom";
import Slider from "./slider/Slider";
import { BiSolidBookAlt } from 'react-icons/bi';
import BookItems from "./Shared/BookCategories/BookItems";

const Home = () => {
    const booksItems = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <div className="mt-11 space-y-5">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-500">Our Top Categories Books</h2>
                    <p className="font-bold text-gray-400">Here are some of the Top Categories of the Books Available</p>
                    <div className="flex mt-5 gap-5 text-center text-blue-600 items-center justify-center">
                        
                        <div> <BiSolidBookAlt className="text-5xl " /></div>
                        <div> <BiSolidBookAlt className="text-5xl " /></div>
                        <div> <BiSolidBookAlt className="text-5xl " /></div>
                        
                    </div>
                    <div className=' text-center'>
                    <progress className="progress w-56 text-blue-500 bg-blue-500 mt-4 mb-5"></progress>
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mx-auto">
                    {
                        booksItems.map(items => <BookItems key={items._id} items={items} ></BookItems> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;