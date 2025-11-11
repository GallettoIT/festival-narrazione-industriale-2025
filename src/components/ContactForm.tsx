'use client';

import { useState, FormEvent } from 'react';

/**
 * ContactForm Component
 *
 * Form contatti client-side con gestione stato
 */

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implementare logica invio form
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="border-[2px] border-white p-4 md:p-6 lg:p-8 space-y-5 md:space-y-6">
      {/* Nome / Cognome */}
      <div>
        <label htmlFor="name" className="block font-halenoir-regular text-white text-[16px] md:text-[18px] lg:text-[20px] mb-2">
          Nome / Cognome
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-transparent border-b-2 border-white text-white font-halenoir-regular text-[15px] md:text-[16px] lg:text-[18px] pb-2 focus:outline-none placeholder-white placeholder-opacity-60"
          placeholder=""
          required
        />
      </div>

      {/* Oggetto */}
      <div>
        <label htmlFor="subject" className="block font-halenoir-regular text-white text-[16px] md:text-[18px] lg:text-[20px] mb-2">
          Oggetto
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-transparent border-b-2 border-white text-white font-halenoir-regular text-[15px] md:text-[16px] lg:text-[18px] pb-2 focus:outline-none placeholder-white placeholder-opacity-60"
          placeholder=""
          required
        />
      </div>

      {/* Messaggio */}
      <div>
        <label htmlFor="message" className="block font-halenoir-regular text-white text-[16px] md:text-[18px] lg:text-[20px] mb-2">
          Messaggio
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-transparent border-b-2 border-white text-white font-halenoir-regular text-[15px] md:text-[16px] lg:text-[18px] pb-2 focus:outline-none placeholder-white placeholder-opacity-60 resize-none"
          rows={1}
          placeholder=""
          required
        />
      </div>

      {/* Pulsante Invia */}
      <div className="pt-4">
        <button
          type="submit"
          className="border-[2px] border-white px-5 py-2 font-halenoir-regular text-white text-[18px] md:text-[20px] lg:text-[22px] uppercase hover:bg-white hover:text-fni-red transition-colors duration-300"
        >
          INVIA
        </button>
      </div>
    </form>
  );
}
