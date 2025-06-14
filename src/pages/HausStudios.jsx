import React from 'react';

export default function HausStudios() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Haus Studios</h1>
        <p className="text-lg">
          London-based creative agency delivering impactful design, marketing & production.
        </p>
      </section>

      {/* ABOUT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Haus Studios</h2>
        <p>
          At Haus Studios, we blend culture, design, and technology to produce high-end visual content
          and strategic marketing solutions for brands globally. We’re deeply rooted in storytelling that matters.
        </p>
      </section>

      {/* SERVICES */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Brand Identity & Logo Design</li>
          <li>Graphic Design: Flyers, Posters, Billboard Ads</li>
          <li>Video Production & Editing</li>
          <li>Marketing Consultancy & Strategy</li>
          <li>Digital Marketing Campaigns</li>
          <li>Social Media Management</li>
        </ul>
      </section>

      {/* CONTACT / CTA */}
      <section className="text-center bg-gold text-forest p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Let’s Build Something Bold</h2>
        <p>For collaborations or custom projects, contact us directly.</p>
        <button className="mt-4 px-6 py-3 bg-forest text-ivory rounded shadow hover:bg-charcoal transition">
          Contact Haus Studios
        </button>
      </section>
    </div>
  );
}
