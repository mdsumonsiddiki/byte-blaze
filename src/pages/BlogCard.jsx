import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

import { MdBookmarkAdd } from "react-icons/md";


const BlogCard = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const blogs = useLoaderData();
    const { comments_count, title, reading_time_minutes, public_reactions_count, published_at } = blogs
    return (
        <div className="container mx-auto min-h-[calc(100vh-124px)]">
            <div className="max-w-4xl px-6 py-16 mx-auto space-y-6">
                <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50 border-[#30336b] border-dashed border-b-2 pb-7">
                    <div className="space-y-6 mb-10">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-6xl pb-5">{title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                            <div className="flex justify-between items-center md:space-x-2 w-full">
                                <p className="text-xl">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
                                <p className=" text-xl">{comments_count} comments • {public_reactions_count} views</p>
                            </div>
                        </div>
                    </div>
                    <div className="pl-5 flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-800 dark:text-gray-100">
                        <Link
                            to=''
                            onClick={() => setTabIndex(0)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-secondary rounded-t-lg dark:border-gray-400 dark:text-gray-400 ${tabIndex === 0 ? 'border-2 border-b-0' : "border-b"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span className="text-xl font-bold">Content</span>
                        </Link>
                        <Link
                            to={'author'}
                            onClick={() => setTabIndex(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg dark:border-gray-400 border-secondary dark:text-gray-50 ${tabIndex === 1 ? 'border-2 border-b-0' : "border-b"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span className="text-xl font-bold">Author</span>
                        </Link>
                        <button  className="ml-6 p-4  bg-purple-500 rounded-full"><MdBookmarkAdd size={25} className='text-white'/></button>
                    </div>
                </article>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default BlogCard;