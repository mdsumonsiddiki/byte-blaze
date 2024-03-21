import { useLoaderData } from "react-router-dom";
import PleaceholderImg from "../assets/404.jpg"
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Content = () => {
    const blog = useLoaderData()
    const { cover_image, title, tags, url, body_html} = blog;
    return (
        <div className="group hover:no-underline focus:no-underline dark:bg-gray-900 border-2 p-4">
				<img className="object-cover w-full rounded h-80 dark:bg-gray-500" src={cover_image || PleaceholderImg}/>
                <ul className="py-6 flex items-center gap-7">
                    {
                    tags.map((tag, idx) => <li key={idx}><a href="#">#{tag}</a></li>)
                    }
                   
                </ul>
				<div className="pt-6 space-y-2">
					<a href={url} target="-blank" className="text-2xl underline font-semibold group-hover:underline group-focus:underline">{title}</a>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
				</div>
			</div>
    );
};

export default Content;