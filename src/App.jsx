import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HausLabs from './pages/HausLabs';
import Yawthentic from './pages/Yawthentic';
import HausStudios from './pages/HausStudios';
import HausSpring from './pages/HausSpring';
import HausHarvest from './pages/HausHarvest';
import Contact from './pages/contact';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hauslabs" element={<HausLabs />} />
          <Route path="/yawthentic" element={<Yawthentic />} />
          <Route path="/hausstudios" element={<HausStudios />} />
          <Route path="/hausspring" element={<HausSpring />} />
          <Route path="/hausharvest" element={<HausHarvest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
