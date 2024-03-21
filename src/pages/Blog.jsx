import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import PleaceholdeImg from '../assets/404.jpg';

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <section className="container mx-auto py-10">
            <div className="space-y-6 sm:space-y-12">
                <Link to={`/blog/${blogs[0]?.id}`}  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={blogs[0]?.cover_image || PleaceholdeImg} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0]?.title}</h3>
                        <span className="text-xs dark:text-gray-400">{new Date(blogs[0]?.published_at).toLocaleDateString()}</span>
                        <p>{blogs[0]?.description}</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        blogs.slice(1, blogs.length).map(blog => <Card
                            key={blog.id}
                            blog={blog}
                        ></Card>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;