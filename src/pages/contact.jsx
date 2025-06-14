import React from 'react';

export default function Contact() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact YawHaus</h1>
        <p className="text-lg">
          Reach out for collaborations, partnerships, media inquiries, or general questions.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-forest text-ivory p-8 rounded-lg shadow max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full p-2 rounded text-charcoal" placeholder="Your Name" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 rounded text-charcoal" placeholder="Your Email" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full p-2 rounded text-charcoal" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="mt-2 px-6 py-3 bg-gold text-forest rounded shadow hover:bg-charcoal hover:text-ivory transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
