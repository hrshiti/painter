import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Briefcase, Activity } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { label: 'Total Revenue', value: '₹2,45,000', icon: <DollarSign size={24} />, bg: 'bg-green-100', text: 'text-green-600', trend: '+12%' },
        { label: 'Pending Bookings', value: '14', icon: <Briefcase size={24} />, bg: 'bg-orange-100', text: 'text-orange-600', trend: '-5%' },
        { label: 'Active Painters', value: '8', icon: <Users size={24} />, bg: 'bg-blue-100', text: 'text-blue-600', trend: '+2%' },
        { label: 'Completed Jobs', value: '124', icon: <Activity size={24} />, bg: 'bg-purple-100', text: 'text-purple-600', trend: '+8%' },
    ];

    const bookings = [
        { id: '#BK-001', name: 'Alok Sharma', service: '2BHK Premium', date: '2023-11-20', status: 'Pending', statusColor: 'bg-orange-100 text-orange-600' },
        { id: '#BK-002', name: 'Priya Desai', service: '3BHK Luxury', date: '2023-11-22', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-600' },
        { id: '#BK-003', name: 'Rohan Mehta', service: 'Villa Custom', date: '2023-11-25', status: 'Completed', statusColor: 'bg-green-100 text-green-600' },
        { id: '#BK-004', name: 'Deepa Singh', service: '1BHK Refresh', date: '2023-11-28', status: 'Pending', statusColor: 'bg-orange-100 text-orange-600' },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div>
                            <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                            <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'} bg-gray-50 px-2 py-1 rounded-full mt-2 inline-block`}>
                                {stat.trend} from last month
                            </span>
                        </div>
                        <div className={`p-4 rounded-xl ${stat.bg} ${stat.text}`}>
                            {stat.icon}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity / Bookings Table */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
                    <button className="text-sm font-bold text-orange-600 hover:text-orange-700 bg-orange-50 px-4 py-2 rounded-lg transition-colors">
                        View All
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                                <th className="p-4 font-semibold rounded-l-lg">Booking ID</th>
                                <th className="p-4 font-semibold">Customer</th>
                                <th className="p-4 font-semibold">Service</th>
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold rounded-r-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {bookings.map((booking, i) => (
                                <motion.tr
                                    key={i}
                                    className="hover:bg-gray-50 transition-colors"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.05) }}
                                >
                                    <td className="p-4 font-medium text-gray-900">{booking.id}</td>
                                    <td className="p-4 text-gray-600 font-medium">{booking.name}</td>
                                    <td className="p-4 text-gray-500">{booking.service}</td>
                                    <td className="p-4 text-gray-500 font-mono text-sm">{booking.date}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide inline-flex items-center gap-1 ${booking.statusColor}`}>
                                            <span className="w-2 h-2 rounded-full bg-current opacity-70"></span>
                                            {booking.status}
                                        </span>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
