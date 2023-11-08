

const PopularBooks = () => {
    return (
        <div className="mt-15 space-y-3 mb-10">
            <div className="text-center mb-10">
                <h1 className="text-center text-3xl text-gray-500 font-bold">Most Popular Books</h1>
                <p className="text-center text-gray-400 font-medium">The Most Popular Books Today are available in Book Wave Teach</p>
            </div>
            <div className='mt-10 grid grid-cols-2 gap-5 mx-auto  items-center justify-center'>
                    <div className=' text-center'>
                        <progress className="progress w-56 text-blue-500 bg-blue-500 mt-4 mb-5"></progress>
                    </div>
                    
                    <div className=' text-center'>
                        <progress className="progress w-56 text-blue-500 bg-blue-500 mt-4 mb-5"></progress>
                    </div>
                </div>
            <div className="grid gap-3 grid-cols-2 ">

                <div className="flex gap-3 border-solid border-2 border-blue-50 p-1">
                    <div>
                        <img className="w-[300px] h-[550px]" src="https://i.ibb.co/qr9kLnQ/6088374-22584.jpg" alt="" />
                    </div>
                    <div className="w-3/4">
                        <h2 className="text-xl font-bold">The Terrible Horror2</h2>
                        <p className="font-medium">Gillian Judson</p>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-justify">
                            In storybooks, readers encounter a myriad of characters, each with unique personalities, motivations, and arcs. Through these characters, readers learn about empathy, resilience, friendship, and the importance of kindness. The narratives often unfold in rich, vivid settings, from enchanted forests to bustling cities, enhancing the reading experience and sparking creativity in young minds.Whether it is a classic fairy tale, a thrilling mystery, or a heartwarming coming-of-age story, each tale has the power to captivate readers of all ages. From the suspenseful plot twists to the heart-rending moments of joy and sorrow, storybooks create an emotional connection that lingers long after the book is closed. They inspire dreams, ignite imaginations, and foster a lifelong love for reading, making them an invaluable treasure for bibliophiles of all ages.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <img className="w-[280px] h-[280px]" src="https://i.ibb.co/C7Jt75y/13234685-5138960.jpg" alt="" />
                    <img className="w-[280px] h-[280px]" src="https://i.ibb.co/DpdxPz3/25001411-6991314.jpg" alt="" />
                    <img className="w-[280px] h-[280px]" src="https://i.ibb.co/Jt0J0QC/13515889-5251264.jpg" alt="" />
                    <img className="w-[280px] h-[280px]" src="https://i.ibb.co/hZtM9xM/1240691-146938-OTU60-Q-403.jpg" alt="" />
                    <img className="w-[280px] h-[280px]" src="https://i.ibb.co/j4ZfXzP/story3.jpg" alt="" />
                    <img className="w-[280px] h-[280px]" src="https://i.ibb.co/7b1hhPg/story.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PopularBooks;