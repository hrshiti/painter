import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlanDetail from './pages/PlanDetail/PlanDetail';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ServicesPage from './pages/Services/ServicesPage';
import PlansPage from './pages/Plans/PlansPage';

// Admin Components
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import Bookings from './pages/Admin/Bookings';
import Plans from './pages/Admin/Plans';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan/:id" element={<PlanDetail />} />
        <Route path="/book" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/plans" element={<PlansPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="plans" element={<Plans />} />
          <Route path="settings" element={<div className="p-8">Settings Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
