import React, { useState, useContext } from 'react';
import { Outlet, Link, NavLink, useNavigate } from "react-router";
import { 
    LayoutDashboard, 
    UserCircle, 
    ShoppingBag, 
    PlusCircle, 
    LogOut, 
    Menu, 
    X,
    ChevronRight
} from "lucide-react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully!");
                navigate("/");
            })
            .catch(error => console.error(error));
    };
    const menuItems = [
        { name: "Overview", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
        { name: "My Models", path: "/my-model", icon: <ShoppingBag size={20} /> },
        { name: "Add New Model", path: "/add-model", icon: <PlusCircle size={20} /> },
        { name: "My Profile", path: "/dashboard/profile", icon: <UserCircle size={20} /> },
    ];

    return (
        <div className="flex h-screen bg-slate-50  overflow-hidden text-slate-900">
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="p-8 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-black text-primary   tracking-tighter uppercase">
                        AIInventory
                    </Link>
                    <button className="md:hidden p-2 hover:bg-slate-100 rounded-xl" onClick={() => setIsSidebarOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 mt-2 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end
                            onClick={() => setIsSidebarOpen(false)}
                            className={({ isActive }) => `
                                flex items-center justify-between p-4 rounded-2xl font-bold transition-all group
                                ${isActive 
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                                    : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"}
                            `}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                            <ChevronRight size={16} className={`transition-transform ${isSidebarOpen ? 'rotate-90' : ''}`} />
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100 mb-4">
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-3 p-4 text-red-500 font-bold w-full hover:bg-red-50 rounded-2xl transition-all active:scale-95"
                    >
                        <LogOut size={20} /> <span>Logout Account</span>
                    </button>
                </div>
            </aside>
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                
                {/* Navbar */}
                <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-10 sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <button 
                            className="md:hidden p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-colors"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        <h1 className="font-black text-slate-800 uppercase tracking-tighter text-xl hidden sm:block">
                            Dashboard
                        </h1>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-black text-slate-800">{user?.displayName || 'User'}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Member</p>
                        </div>
                        
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ring-2 ring-blue-500 ring-offset-2">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="profile" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-4 z-1 p-3 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-4xl w-64 border border-slate-100 font-bold space-y-1">
                                <li className="menu-title text-slate-400 text-[10px] uppercase tracking-widest px-4 py-2">Account Options</li>
                                <li><Link className="py-3 rounded-xl hover:bg-blue-50" to="/dashboard/profile">My Profile</Link></li>
                                <li><Link className="py-3 rounded-xl hover:bg-blue-50" to="/dashboard">Dashboard Home</Link></li>
                                <div className="divider my-1 px-4"></div>
                                <li>
                                    <button onClick={handleLogout} className="py-3 rounded-xl text-red-500 hover:bg-red-50">
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto bg-slate-50/50 p-6 md:p-10">
                    <div className="max-w-6xl mx-auto">
                        <Outlet /> 
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;