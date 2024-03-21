import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Layout;