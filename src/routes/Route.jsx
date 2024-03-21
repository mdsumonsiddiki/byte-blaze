import { createBrowserRouter } from "react-router-dom";
import Layout from "../layOut/Layout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Bookmarks from "../pages/Bookmarks";
import BlogCard from "../pages/BlogCard";
import Content from "../components/Content";
import Author from "../components/Author";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blogs',
                element: <Blog></Blog>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
            },
            {
                path: '/blog/:id',
                element: <BlogCard></BlogCard>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`),
                children: [
                    {
                        index:true,
                        element:<Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`)
                    },
                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`)
                    }
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>,
            }
        ]
    }
]);