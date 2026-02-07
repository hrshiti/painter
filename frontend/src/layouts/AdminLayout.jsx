import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, Calendar, Layers, Settings, LogOut, User } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-removebg-preview.png';

const AdminLayout = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { path: '/admin/bookings', icon: <Calendar size={20} />, label: 'Bookings' },
        { path: '/admin/plans', icon: <Layers size={20} />, label: 'Manage Plans' },
        { path: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' },
    ];

    return (
        <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0A192F] text-white flex flex-col shadow-2xl relative z-20">
                <div className="p-6 flex items-center gap-3 border-b border-gray-700/50">
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-1" />
                    <div>
                        <h1 className="font-bold text-lg tracking-wide">Admin Panel</h1>
                        <p className="text-xs text-gray-400">Al-Fykra Painters</p>
                    </div>
                </div>

                <nav className="flex-1 py-6 space-y-2 px-4">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-orange-400'}`}>
                                    {item.icon}
                                </span>
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-700/50">
                    <button className="flex items-center gap-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-4 py-3 rounded-xl w-full transition-all">
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-gray-50">
                {/* Top Header */}
                <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800">
                        {menuItems.find(item => item.path === location.pathname)?.label || 'Overview'}
                    </h2>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-bold text-gray-800">Admin User</p>
                            <p className="text-xs text-gray-500">Super Admin</p>
                        </div>
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 border border-orange-200">
                            <User size={20} />
                        </div>
                    </div>
                </header>

                {/* Content Scroll Area */}
                <div className="flex-1 overflow-auto p-8 relative">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
