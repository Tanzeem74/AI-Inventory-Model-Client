import { useState, useContext, useEffect } from "react";
import { Sun, Moon, ChevronDown, Menu, X } from "lucide-react"; // বাড়তি আইকন
import { AuthContext } from "../provider/AuthContext";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const handleLogout = () => {
        logOut();
        setIsDropdownOpen(false);
    };


    const links = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold underline decoration-2 underline-offset-4" : "hover:text-primary"}>Home</NavLink></li>
            <li><NavLink to="/all-model" className={({ isActive }) => isActive ? "text-primary font-bold underline decoration-2 underline-offset-4" : "hover:text-primary"}>All Models</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-bold underline decoration-2 underline-offset-4" : "hover:text-primary"}>About</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-primary font-bold underline decoration-2 underline-offset-4" : "hover:text-primary"}>Dashboard</NavLink></li>
                    <li><NavLink to="/add-model" className={({ isActive }) => isActive ? "text-primary font-bold underline decoration-2 underline-offset-4" : "hover:text-primary"}>Add Model</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-base-300">
            <div className="navbar max-w-7xl mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Menu className="h-6 w-6" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-xl border border-base-200 gap-3">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl md:text-2xl font-black text-primary tracking-tight">
                        AIInventory
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-2 md:gap-4">
                    {/* Theme Toggle */}
                    <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">
                        <input type="checkbox" onChange={(e) => handleTheme(e.target.checked)} checked={theme === "dark"} />
                        <Sun className="swap-on w-5 h-5 text-yellow-500" />
                        <Moon className="swap-off w-5 h-5 text-slate-700" />
                    </label>

                    {user ? (
                        <div className="relative">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 btn btn-ghost btn-sm md:btn-md rounded-full px-2">
                                <img src={user?.photoURL || "https://i.ibb.co/3kfzYy8/default-avatar.png"} alt="profile" className="w-8 h-8 rounded-full ring-2 ring-primary/20" />
                                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <ul className="absolute right-0 mt-3 w-56 bg-base-100 border border-base-300 rounded-2xl shadow-2xl p-2 z-50">
                                    <li className="px-4 py-3 border-b border-base-200">
                                        <p className="text-sm font-bold truncate">{user?.displayName}</p>
                                        <p className="text-xs text-base-content/60 truncate">{user?.email}</p>
                                    </li>
                                    <li><Link to="/dashboard" className="p-3 hover:bg-base-200 rounded-lg flex">Dashboard</Link></li>
                                    <li><Link to="dashboard/profile" className="p-3 hover:bg-base-200 rounded-lg block">My Profile</Link></li>
                                    <li><Link
                                        to="/my-model"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        My Models
                                    </Link></li>
                                    <li><Link
                                        to="/purchases"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        My Purchase
                                    </Link></li>
                                    <li><button onClick={handleLogout} className="p-3 hover:bg-error/10 text-error rounded-lg w-full text-left block font-semibold">Logout</button></li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <Link to="/auth/login" className="btn btn-primary btn-sm md:btn-md px-6 text-white shadow-lg shadow-primary/20">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;