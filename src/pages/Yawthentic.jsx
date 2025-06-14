import React from 'react';

export default function Yawthentic() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Yawthentic</h1>
        <p className="text-lg">
          Where heritage meets modern design — cultural fashion by YawHaus.
        </p>
      </section>

      {/* ABOUT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">The Yawthentic Vision</h2>
        <p>
          Yawthentic is more than a fashion label — it's a statement. 
          Inspired by Ghanaian roots and global creativity, 
          we craft pieces that honor tradition while embracing modern design.
        </p>
      </section>

      {/* COLLECTIONS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Collections</h2>

        {/* Black Stone Necklace */}
        <div className="p-6 bg-forest text-ivory rounded-lg shadow space-y-2">
          <h3 className="text-xl font-bold">Black Stone Necklace Line</h3>
          <p>
            Our signature necklace series handcrafted with black stones, 
            symbolizing power, resilience, and identity.
          </p>
        </div>

        {/* Future collections placeholder */}
        <div className="p-6 bg-gold text-forest rounded-lg shadow space-y-2">
          <h3 className="text-xl font-bold">Upcoming Drops</h3>
          <p>
            Stay tuned for exclusive apparel releases, accessories, and collaborations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gold text-forest p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Collaborate or Stock Yawthentic</h2>
        <p>For wholesale, collaborations or press inquiries — contact us directly.</p>
        <button className="mt-4 px-6 py-3 bg-forest text-ivory rounded shadow hover:bg-charcoal transition">
          Contact Yawthentic
        </button>
      </section>
    </div>
  );
}
