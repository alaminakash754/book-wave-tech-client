import { useLoaderData } from "react-router-dom";
import { usePDF } from 'react-to-pdf';

const FullDetails = () => {
    const book = useLoaderData();
    const { image1, details, short_description } = book;
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

    return (
        <div className="card w-3/4 mx-auto bg-blue-100 shadow-xl p-3 rounded-lg mb-3">

            <figure><img className='h-[500px] w-[800px] rounded-lg mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={image1} alt="Album" /></figure>
            <div className="card-body">
                <h1 className='text-xl font-semibold text-gray-500'>{short_description}</h1>
                <h2 className="text-lg font-medium text-gray-500">{details}</h2>

            </div>
            <div className="items-end justify-end text-end">
                <button className="btn btn-primary bg-blue-500" onClick={() => toPDF()}>Download PDF</button>
                <div ref={targetRef}>
                </div>
            </div>
        </div>
    );
};

export default FullDetails;