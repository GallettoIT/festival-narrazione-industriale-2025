'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    privacyAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      setSubmitStatus({
        type: 'error',
        message: 'Per iscriverti alla newsletter devi accettare la Privacy Policy'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/newsletter-subscribe.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Errore durante l\'iscrizione');
      }

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Iscrizione completata con successo! Grazie per esserti iscritto alla nostra newsletter.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        privacyAccepted: false
      });

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Errore durante l\'iscrizione. Riprova più tardi.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full">
      {/* Section 1: Press Area */}
      <section className="bg-[#e0e0e0] py-16 md:py-24 lg:py-32">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left: PRESS AREA Title */}
            <div className="text-center lg:text-left">
              <h2 className="font-halenoir-bold text-fni-red text-[32px] md:text-[40px] lg:text-[48px] uppercase leading-none">
                PRESS AREA
              </h2>
            </div>

            {/* Center: Content + Button */}
            <div className="flex flex-col gap-4 lg:gap-5 items-center lg:items-start">
              <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-relaxed text-center lg:text-left">
                Resta aggiornato sulle notizie del Festival della Narrazione Industriale
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-block font-halenoir-regular text-fni-red text-[18px] md:text-[20px] lg:text-[24px] uppercase border-[3px] border-fni-red px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2.5 hover:bg-fni-red hover:text-white transition-colors duration-300"
                >
                  NEWS E STAMPA
                </a>
              </div>
            </div>

            {/* Right: Logo Stella */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                <Image
                  src="/images/footer/logo-stella.svg"
                  alt="FNI"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Newsletter */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 xl:gap-24">
            {/* Left: Newsletter Title + Info */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <h2 className="font-halenoir-regular text-[#282828] text-[28px] md:text-[36px] lg:text-[40px] leading-tight">
                Iscriviti alla newsletter
              </h2>
              <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-relaxed">
                Resta sempre aggiornato sulle novità del Festival della Narrazione Industriale
              </p>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6 lg:gap-7">
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-halenoir-regular text-[#282828] text-[18px] md:text-[20px] lg:text-[24px]">
                    Nome / Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-b border-[#282828] pb-2 pt-1 font-halenoir-regular text-[#282828] text-[16px] md:text-[18px] lg:text-[20px] focus:outline-none focus:border-fni-red transition-colors placeholder:text-[#28282866]"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-halenoir-regular text-[#282828] text-[18px] md:text-[20px] lg:text-[24px]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-b border-[#282828] pb-2 pt-1 font-halenoir-regular text-[#282828] text-[16px] md:text-[18px] lg:text-[20px] focus:outline-none focus:border-fni-red transition-colors placeholder:text-[#28282866]"
                    required
                  />
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start gap-3 mt-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 w-5 h-5 border-2 border-[#282828] rounded-none accent-fni-red cursor-pointer focus:ring-2 focus:ring-fni-red focus:ring-offset-2"
                    required
                  />
                  <label htmlFor="privacy" className="font-halenoir-regular text-[#282828] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed cursor-pointer">
                    Accetto la{' '}
                    <a
                      href="https://www.iubenda.com/privacy-policy/17171870"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#282828] underline-offset-2 hover:text-fni-red hover:decoration-fni-red transition-colors"
                    >
                      Privacy Policy
                    </a>
                    {' '}e la{' '}
                    <a
                      href="https://www.iubenda.com/privacy-policy/17171870/cookie-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#282828] underline-offset-2 hover:text-fni-red hover:decoration-fni-red transition-colors"
                    >
                      Cookie Policy
                    </a>
                    {' '}*
                  </label>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-md ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <p className="font-halenoir-regular text-[14px] md:text-[16px] lg:text-[18px]">
                      {submitStatus.message}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-start mt-2 md:mt-3">
                  <button
                    type="submit"
                    className="inline-block font-halenoir-regular text-[#282828] text-[18px] md:text-[20px] lg:text-[24px] uppercase border border-[#282828] px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2.5 hover:bg-[#282828] hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!formData.privacyAccepted || isSubmitting}
                  >
                    {isSubmitting ? 'INVIO IN CORSO...' : 'INVIA'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Info & Contact */}
      <section className="bg-[#f7f4f4] py-12 md:py-16 lg:py-20">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-16 lg:gap-20 xl:gap-24">
            {/* Top Row: Logo + Association Info */}
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 xl:gap-10 items-start">
              {/* Logo */}
              <div className="flex items-start">
                <Image
                  src="/images/footer/logo-festival-text.svg"
                  alt="Festival Narrazione Industriale"
                  width={183}
                  height={67}
                  className="w-[150px] lg:w-[183px] h-auto object-contain object-left"
                />
              </div>

              {/* Association Info */}
              <div className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-normal">
                <p>FESTIVAL NARRAZIONE INDUSTRIALE A.P.S</p>
                <p>VIA STRASBURGO, 23/A</p>
                <p>P.IVA 03106750346</p>
              </div>
            </div>

            {/* Bottom Row: Social Icons + Contact Email */}
            <div className="flex flex-col lg:grid lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 xl:gap-16 lg:items-center">
              {/* Social Icons */}
              <div className="flex gap-3 justify-start">
                <a
                  href="https://www.facebook.com/festivalnarrazioneindustriale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fni-red hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/festivalnarrazioneindustriale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fni-red hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/festival-narrazione-industriale/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fni-red hover:opacity-70 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Spacer - solo su lg+ */}
              <div className="hidden lg:block"></div>

              {/* Contact Email + Credits */}
              <div className="flex flex-col gap-3 lg:text-right">
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-normal">
                  Per info <a
                    href="mailto:segreteria@festivalnarrazioneindustriale.it"
                    className="hover:text-fni-red transition-colors"
                  >
                    segreteria@festivalnarrazioneindustriale.it
                  </a>
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[14px] lg:text-[16px] xl:text-[18px] leading-normal">
                  credit:{' '}
                  <a
                    href="https://unsocials.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fni-red transition-colors"
                  >
                    unsocials.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
