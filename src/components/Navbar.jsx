import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme('synthwave');
        }
        else {
            setTheme('light');
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const changeTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', changeTheme);
    }, [theme])
    return (
        <nav className="sticky z-10 top-0 left-0 shadow-lg bg-gradient-to-r from-[#dff9fb] via-blue-400 to-[#c7ecee] bg-300% text-transparent animate-gradient">
            <div className="navbar items-center container mx-auto">
                <div className="flex-1">
                    <Link to='/' className="text-[#e84393] text-2xl font-bold">Byte<span className="text-[#30336b]">Blaze</span></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-[#30336b] hidden md:flex gap-5">
                        <NavLink to="/" className="font-semibold text-lg">Home</NavLink>
                        <NavLink to="/blogs" className="font-semibold text-lg">Blogs</NavLink>
                        <NavLink to="/bookmarks" className="font-semibold text-lg">Bookmarks</NavLink>
                    </ul>
                    <div className="ml-4">
                        <label className="cursor-pointer grid place-items-center">
                            <input
                                type="checkbox"
                                onChange={handleTheme}
                                value="synthwave"
                                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;