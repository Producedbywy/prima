import React from 'react';

export default function HausHarvest() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Haus Harvest</h1>
        <p className="text-lg">
          Sunflower oil & agro products — Rooted in sustainable farming.
        </p>
      </section>

      {/* ABOUT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">The Future of Food</h2>
        <p>
          Haus Harvest brings quality, ethically-produced agro products from farm to table. 
          Our sunflower oil and agricultural ventures are rooted in clean farming methods, sustainability, 
          and healthy nutrition for modern lifestyles.
        </p>
      </section>

      {/* COMING SOON */}
      <section className="text-center bg-gold text-forest p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        <p>Sign up to be notified when Haus Harvest officially launches.</p>
        <button className="mt-4 px-6 py-3 bg-forest text-ivory rounded shadow hover:bg-charcoal transition">
          Join Waitlist
        </button>
      </section>
    </div>
  );
}
