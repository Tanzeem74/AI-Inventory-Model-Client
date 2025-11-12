import { useState, useContext, useEffect } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { AuthContext } from "../provider/AuthContext";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const handleLogout = () => {
        logOut();
        setIsDropdownOpen(false);
    };
    return (
        <nav className="bg-white shadow-md">
            <div className="navbar max-w-7xl mx-auto px-4 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/all-model"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                }
                            >
                                All Model
                            </NavLink>
                            <NavLink
                                to="/add-model"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                }
                            >
                                Add Models
                            </NavLink>
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-bold text-blue-500">AI Model Inventory</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="hidden md:flex space-x-6 font-medium">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/all-model"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                }
                            >
                                All Model
                            </NavLink>
                            {user &&
                                <NavLink
                                    to="/add-model"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-700 hover:text-blue-600"
                                    }
                                >
                                    Add Models
                                </NavLink>
                            }
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"}
                            className="toggle" />
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center space-x-2"
                                >
                                    <img
                                        // "https://i.ibb.co/3kfzYy8/default-avatar.png"
                                        src={user?.photoURL}
                                        alt=""
                                        className="w-8 h-8 rounded-full border"
                                    />
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                                        <div className="px-4 py-2 border-b dark:border-gray-700">
                                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                {user?.displayName || "User"}
                                            </p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>

                                        <Link
                                            to="/my-model"
                                            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            My Models
                                        </Link>

                                        <Link
                                            to="/purchases"
                                            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            My Purchases
                                        </Link>

                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-md"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
