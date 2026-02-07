import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Trash2, Edit2, Phone, Mail, Calendar, CheckCircle, Clock, UserPlus, X, DollarSign } from 'lucide-react';

const Bookings = () => {
    // Sample Data
    const [bookings, setBookings] = useState([
        { id: 101, name: 'Amit Sharma', email: 'amit@example.com', phone: '9876543210', service: '2BHK Premium', date: '2023-11-20', status: 'Pending', amount: '18,500', assignedPainter: null },
        { id: 102, name: 'Priya Desai', email: 'priya@example.com', phone: '8765432109', service: '3BHK Luxury', date: '2023-11-22', status: 'In Progress', amount: '26,000', assignedPainter: 'Raju Painter' },
        { id: 103, name: 'Rohan Mehta', email: 'rohan@example.com', phone: '7654321098', service: 'Villa Custom', date: '2023-11-25', status: 'Completed', amount: '45,000', assignedPainter: 'Suresh Art' },
        { id: 104, name: 'Deepa Singh', email: 'deepa@example.com', phone: '6543210987', service: '1BHK Refresh', date: '2023-11-28', status: 'Pending', amount: '12,500', assignedPainter: null },
        { id: 105, name: 'Karan Patel', email: 'karan@example.com', phone: '5432109876', service: 'Exterior Paint', date: '2023-12-01', status: 'Approved', amount: '32,000', assignedPainter: null },
    ]);

    const painters = [
        { id: 1, name: 'Raju Painter', phone: '9876500001', rating: 4.8 },
        { id: 2, name: 'Suresh Art', phone: '9876500002', rating: 4.5 },
        { id: 3, name: 'Color Masters Team', phone: '9876500003', rating: 4.9 },
        { id: 4, name: 'Vijay Decorators', phone: '9876500004', rating: 4.6 },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [selectedBookingId, setSelectedBookingId] = useState(null);

    const handleAssignClick = (bookingId) => {
        setSelectedBookingId(bookingId);
        setShowAssignModal(true);
    };

    const confirmAssignment = (painterName) => {
        setBookings(bookings.map(b =>
            b.id === selectedBookingId
                ? { ...b, assignedPainter: painterName, status: b.status === 'Pending' ? 'Approved' : b.status }
                : b
        ));
        setShowAssignModal(false);
        setSelectedBookingId(null);
    };

    const filteredBookings = bookings.filter(booking => {
        const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.phone.includes(searchTerm);
        const matchesFilter = filterStatus === 'All' || booking.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-orange-100 text-orange-600';
            case 'In Progress': return 'bg-blue-100 text-blue-600';
            case 'Completed': return 'bg-green-100 text-green-600';
            case 'Approved': return 'bg-purple-100 text-purple-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="space-y-8 relative">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-800"
            >
                Manage Bookings
            </motion.h1>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by Name, Service, or Phone..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Filter className="text-gray-500" size={20} />
                    <select
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>

            {/* Booking Cards Grid (Mobile) / Table (Desktop) */}
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold tracking-wider">
                        <tr>
                            <th className="p-6">Client Details</th>
                            <th className="p-6">Service</th>
                            <th className="p-6">Assigned Painter</th>
                            <th className="p-6">Total Amount</th>
                            <th className="p-6">Status</th>
                            <th className="p-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredBookings.map((booking) => (
                            <motion.tr
                                key={booking.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="hover:bg-gray-50 transition-colors group"
                            >
                                <td className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold uppercase">
                                            {booking.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{booking.name}</p>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <Mail size={12} /> {booking.email}
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <Phone size={12} /> {booking.phone}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6">
                                    <span className="font-medium text-gray-800 bg-gray-100 px-3 py-1 rounded-full text-sm block w-fit mb-1">
                                        {booking.service}
                                    </span>
                                    <span className="text-xs text-gray-400 font-mono"><Calendar size={10} className="inline mr-1" />{booking.date}</span>
                                </td>
                                <td className="p-6">
                                    {booking.assignedPainter ? (
                                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs">
                                                <UserPlus size={14} />
                                            </div>
                                            {booking.assignedPainter}
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleAssignClick(booking.id)}
                                            className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg hover:bg-orange-100 transition-colors border border-orange-200 flex items-center gap-2"
                                        >
                                            <UserPlus size={14} /> Assign Painter
                                        </button>
                                    )}
                                </td>
                                <td className="p-6 font-bold text-gray-800">
                                    ₹{booking.amount}
                                </td>
                                <td className="p-6">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide inline-flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                                        {booking.status === 'Completed' && <CheckCircle size={14} />}
                                        {booking.status === 'Pending' && <Clock size={14} />}
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex items-center justify-end gap-2 text-gray-400">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg hover:text-blue-500 transition-colors" title="Edit">
                                            <Edit2 size={18} />
                                        </button>
                                        <button className="p-2 hover:bg-red-50 rounded-lg hover:text-red-500 transition-colors" title="Delete">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>

                {filteredBookings.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        No bookings found matching your search.
                    </div>
                )}
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
                {filteredBookings.map((booking) => (
                    <motion.div
                        key={booking.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">{booking.name}</h3>
                                <p className="text-sm text-gray-500">{booking.service}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusColor(booking.status)}`}>
                                {booking.status}
                            </span>
                        </div>

                        <div className="space-y-3 text-sm text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center gap-2"><Phone size={16} className="text-gray-400" /> {booking.phone}</div>
                            <div className="flex items-center gap-2"><Calendar size={16} className="text-gray-400" /> {booking.date}</div>
                            <div className="flex items-center gap-2 font-bold text-gray-800"><DollarSign size={16} className="text-gray-400" /> ₹{booking.amount}</div>
                        </div>

                        {booking.assignedPainter ? (
                            <div className="mb-4 text-sm bg-green-50 text-green-800 px-3 py-2 rounded-lg font-medium border border-green-100 flex items-center gap-2">
                                <UserPlus size={16} /> Assigned to: {booking.assignedPainter}
                            </div>
                        ) : (
                            <button
                                onClick={() => handleAssignClick(booking.id)}
                                className="w-full mb-4 bg-orange-100 text-orange-700 py-2 rounded-lg text-sm font-bold hover:bg-orange-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <UserPlus size={16} /> Assign Painter
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Assign Painter Modal */}
            <AnimatePresence>
                {showAssignModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setShowAssignModal(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative z-10"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                <h3 className="font-bold text-lg text-gray-800">Assign Painter</h3>
                                <button onClick={() => setShowAssignModal(false)} className="text-gray-400 hover:text-gray-600 p-1">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                                <p className="text-sm text-gray-500 mb-2">Select a professional for Booking #{selectedBookingId}</p>
                                {painters.map((painter) => (
                                    <div
                                        key={painter.id}
                                        onClick={() => confirmAssignment(painter.name)}
                                        className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-orange-500 hover:bg-orange-50 cursor-pointer transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#0A192F] text-white flex items-center justify-center font-bold">
                                                {painter.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800">{painter.name}</h4>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <span>⭐ {painter.rating}</span>
                                                    <span>• {painter.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-orange-600 opacity-0 group-hover:opacity-100 font-medium text-sm">
                                            Select
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Bookings;
