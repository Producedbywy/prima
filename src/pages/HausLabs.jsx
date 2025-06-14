import React from 'react';

export default function HausLabs() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Haus Labs</h1>
        <p className="text-lg">
          Our innovation lab for sustainable design, technology & creative research.
        </p>
      </section>

      {/* ABOUT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is Haus Labs?</h2>
        <p>
          Haus Labs is the R&D division of YawHaus — where experimental creativity meets real-world problem solving. 
          Our mission is to explore new frontiers in design, tech, sustainability and cultural innovation.
        </p>
      </section>

      {/* INNOVATION AREAS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Innovation Focus</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Product Design & Prototyping</li>
          <li>Materials Research & Sustainable Packaging</li>
          <li>Technology Incubation & Software Experimentation</li>
          <li>Creative AI & Automation Tools</li>
          <li>Cultural Innovation & Storytelling</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center bg-gold text-forest p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Partner With Haus Labs</h2>
        <p>We collaborate with organizations & startups to prototype the future.</p>
        <button className="mt-4 px-6 py-3 bg-forest text-ivory rounded shadow hover:bg-charcoal transition">
          Contact Haus Labs
        </button>
      </section>
    </div>
  );
}
