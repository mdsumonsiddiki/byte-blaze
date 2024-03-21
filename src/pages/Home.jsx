import Banner from "../components/Banner";
import Wave from '../assets/wave.svg';
const Home = () => {
    return (
        <div className="min-h-[calc(100vh-124px)] relative">
            <Banner></Banner>
            <img className="absolute bottom-0 w-full" src={Wave} alt="" />
        </div>
    );
};

export default Home;