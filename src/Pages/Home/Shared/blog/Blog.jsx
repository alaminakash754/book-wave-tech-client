
const Blog = () => {
    return (
        <div className="mt-15 mb-10">
            <div>
                <div className="text-center mb-10">
                    <h1 className="text-center text-3xl text-gray-500 font-bold">Latest Blog Post</h1>
                </div>
                <div className='mt-10 grid grid-cols-3 gap-5 items-center justify-center mx-auto mb-10'>
                    <div className=' text-center'>
                        <progress className="progress w-56 text-blue-500 bg-blue-500 mt-4 mb-5"></progress>
                    </div>
                  
                    <div className=' text-center'>
                        <progress className="progress w-56 text-blue-500 bg-blue-500 mt-4 mb-5"></progress>
                    </div>
                </div>
                <div className="relative w-full">
                    <img className="w-full h-[450px] rounded-xl bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0.00)]" src="https://i.ibb.co/sm9yC93/book-library-with-open-textbook.jpg" alt="" />
                    <div className="absolute h-full items-center -bottom-40 right-[400px] ">
                        <h1 className="text-center text-6xl text-orange-600 font-bold italic"> Blog </h1>
                        <p className="text-center text-orange-400 font-medium mt-5 text-xl italic">The Latest Blog Post for the <br /> biggest Blog for the Book Wave Teach</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 space-y-10 w-5/6 mx-auto">
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 border-solid border-2 border-blue-50">
                    <div>
                        <img className="w-[600px] h-[450px]" src="https://i.ibb.co/fdFHThz/currency-ideas-worried-hourglass-shadow.jpg" alt="" />
                    </div>
                    <div className="ml-5 space-y-3">
                        <h2 className="text-xl font-semibold">BLOG IMAGE POST</h2>
                        <h4>POSTS BY : ROAD THEME
                            /
                            MAR 10 2024</h4>
                        <hr />
                        <p className="text-justify">
                            In a world filled with endless possibilities, there exists a gateway to uncharted realms and thrilling escapades: the adventure book. As readers, we have the extraordinary privilege of diving headfirst into these captivating narratives, traversing unexplored lands and encountering fascinating characters. Each turn of the page is a step into the unknown, where the boundaries of reality blur, and imagination knows no bounds. Embarking on a reading adventure is akin to setting sail on a grand voyage. With every word, we navigate through dense jungles, scale towering mountains, and soar across the vast expanse of the skies. We meet valiant heroes and cunning villains, witness epic battles, and unravel mysteries that keep us on the edge of our seats. The mere act of flipping through the pages transforms us into intrepid explorers, seeking hidden treasures of wisdom and knowledge.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 border-solid border-2 border-blue-50">
                    <div >
                        <img className="w-[600px] h-[450px]" src="https://i.ibb.co/p4pyQ0n/front-view-hardback-books-library.jpg" alt="" />
                    </div>
                    <div className="ml-5 space-y-3">
                        <h2 className="text-xl font-semibold">POST WITH GALLERY</h2>
                        <h4>POSTS BY : ROAD THEME
                            /
                            MAR 10 2023</h4>
                        <hr />
                        <p className="text-justify">
                            In a world filled with endless possibilities, there exists a gateway to uncharted realms and thrilling escapades: the adventure book. As readers, we have the extraordinary privilege of diving headfirst into these captivating narratives, traversing unexplored lands and encountering fascinating characters. Each turn of the page is a step into the unknown, where the boundaries of reality blur, and imagination knows no bounds. Embarking on a reading adventure is akin to setting sail on a grand voyage. With every word, we navigate through dense jungles, scale towering mountains, and soar across the vast expanse of the skies. We meet valiant heroes and cunning villains, witness epic battles, and unravel mysteries that keep us on the edge of our seats. The mere act of flipping through the pages transforms us into intrepid explorers, seeking hidden treasures of wisdom and knowledge.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 border-solid border-2 border-blue-50">
                    <div>
                        <img className="w-[600px] h-[450px]" src="https://i.ibb.co/p4pyQ0n/front-view-hardback-books-library.jpg" alt="" />
                    </div>
                    <div className="ml-5 space-y-3">
                        <h2 className="text-xl font-semibold">BLOG IMAGE POST</h2>
                        <h4>POSTS BY : ROAD THEME
                            /
                            MAR 10 2018</h4>
                        <hr />
                        <p className="text-justify">
                            In a world filled with endless possibilities, there exists a gateway to uncharted realms and thrilling escapades: the adventure book. As readers, we have the extraordinary privilege of diving headfirst into these captivating narratives, traversing unexplored lands and encountering fascinating characters. Each turn of the page is a step into the unknown, where the boundaries of reality blur, and imagination knows no bounds. Embarking on a reading adventure is akin to setting sail on a grand voyage. With every word, we navigate through dense jungles, scale towering mountains, and soar across the vast expanse of the skies. We meet valiant heroes and cunning villains, witness epic battles, and unravel mysteries that keep us on the edge of our seats. The mere act of flipping through the pages transforms us into intrepid explorers, seeking hidden treasures of wisdom and knowledge.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;