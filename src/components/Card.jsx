import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import altImg from '../assets/404.jpg'
const Card = ({blog}) => {
    const { cover_image, title, description, published_at , id} = blog;
    return (
        <div className="border-2 p-3 transition-all hover:shadow-2xl">
            <Link to={`/blog/${id}`} href="#" className="group hover:no-underline focus:no-underline dark:bg-gray-900">
                <img className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || altImg} />
                <div className="pt-4 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};
Card.propTypes ={
    blog: PropTypes.object.isRequired,
}
export default Card;