import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center min-h-[calc(100vh-136px)]">
            <h1 className='text-5xl font-bold'>
                Welcome to
                <span className='bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient'>
                    {' '}
                    ByteBlaze
                </span>
            </h1>
            <p className='py-6'>
                ByteBlaze is the bridge between the complex world of technology and
                the curious minds eager to understand it
            </p>
            <div className="space-x-6">
                <Link className="bg-gradient-to-r from-[#dff9fb] via-blue-300 to-[#c7ecee] bg-300% text-transparent animate-gradient inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                    <svg className="w-5 h-5 mr-2" fill="#FFFFFF" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span className="relative text-white">Button Text</span>
                </Link>
                <Link className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                    <svg className="w-5 h-5 mr-2" fill="#FFFFFF" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span className="relative text-white">Button Text</span>
                </Link>
            </div>
        </div>
    );
};

export default Banner;