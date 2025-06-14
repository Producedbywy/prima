import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">YawHaus: A Living Ecosystem Where Imagination Meets Identity</h1>
      <p className="mb-8 text-lg">Rooted. Modern. Meaningful. Creativity With Purpose.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/hauslabs" className="p-6 bg-forest text-ivory rounded-xl text-center text-xl">Haus Labs</Link>
        <Link to="/yawthentic" className="p-6 bg-forest text-ivory rounded-xl text-center text-xl">Yawthentic</Link>
        <Link to="/hausstudios" className="p-6 bg-forest text-ivory rounded-xl text-center text-xl">Haus Studios</Link>
        <Link to="/hausspring" className="p-6 bg-forest text-ivory rounded-xl text-center text-xl">Haus Spring</Link>
        <Link to="/hausharvest" className="p-6 bg-forest text-ivory rounded-xl text-center text-xl">Haus Harvest</Link>
        <Link to="/contact" className="p-6 bg-forest text-ivory rounded-xl text-center text-xl">Contact</Link>
      </div>
    </div>
  );
}
