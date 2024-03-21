import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="container mx-auto px-4 md:px-2 lg:px-0 flex flex-col justify-center items-center min-h-[calc(100vh-136px)]">
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
                Welcome to
                <span className='bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient'>
                    {' '}
                    ByteBlaze
                </span>
            </h1>
            <p className=' py-3 lg:py-6 lg:w-2/4 text-center'>
                ByteBlaze is the bridge between the complex world of technology and
                the curious minds eager to understand it
            </p>
            <div className="flex items-center gap-6">
                <Link to={'/blogs'} className="bg-gradient-to-r from-purple-500 via-blue-700 to-secondary  bg-300% text-transparent animate-gradient inline-flex items-center justify-center px-2 py-1 lg:px-5 lg:py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 lg:mr-2" fill="#FFFFFF" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span className="relative text-white">Read Blogs</span>
                </Link>
                <Link to={'/bookmarks'} className="bg-gradient-to-r from-secondary via-blue-700 to-secondary  bg-300% text-transparent animate-gradient inline-flex items-center justify-center px-2 py-1 lg:px-5 lg:py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 lg:mr-2" fill="#FFFFFF" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span className="relative text-white">Bookmarks</span>
                </Link>
            </div>
        </div>
    );
};

export default Banner;