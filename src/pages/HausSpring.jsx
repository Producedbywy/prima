import React from 'react';

export default function HausSpring() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Haus Spring</h1>
        <p className="text-lg">
          Purity. Simplicity. Refreshment — Bottled water, launching soon.
        </p>
      </section>

      {/* ABOUT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Naturally Filtered</h2>
        <p>
          Haus Spring delivers fresh, clean, and naturally filtered bottled water 
          using environmentally conscious packaging and sustainable sourcing.
        </p>
      </section>

      {/* COMING SOON */}
      <section className="text-center bg-gold text-forest p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        <p>Join our early access list to be notified when Haus Spring launches.</p>
        <button className="mt-4 px-6 py-3 bg-forest text-ivory rounded shadow hover:bg-charcoal transition">
          Join Waitlist
        </button>
      </section>
    </div>
  );
}
