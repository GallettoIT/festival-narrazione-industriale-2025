import type { Metadata } from 'next';
import Header from '@/components/Header';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import Script from 'next/script';

/**
 * Pagina Contatti
 *
 * Include:
 * - Hero section rossa con form contatti
 * - Sezione "SEGUICI" con link social
 * - Footer
 */

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta il Festival della Narrazione Industriale di Parma. Richiedi informazioni, collaborazioni e supporto. Seguici sui social: Instagram, Facebook, LinkedIn per aggiornamenti e news.',
  keywords: [
    'contatti festival narrazione industriale',
    'contatti festival parma',
    'info festival narrazione',
    'richiesta informazioni festival',
    'contattare festival parma',
    'collaborazioni festival narrazione',
    'social media festival parma',
    'email festival narrazione industriale',
    'form contatto festival'
  ],
  openGraph: {
    title: 'Contatti | Festival Narrazione Industriale',
    description: 'Contatta il Festival della Narrazione Industriale di Parma. Richiedi informazioni, collaborazioni e supporto.',
    url: 'https://www.festivalnarrazioneindustriale.it/contatti',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contatti Festival Narrazione Industriale',
      },
    ],
  },
};

export default function ContattiPage() {
  // Structured Data - ContactPage with ContactPoint
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contatti Festival della Narrazione Industriale',
    description: 'Pagina di contatto per richiedere informazioni sul Festival della Narrazione Industriale',
    url: 'https://www.festivalnarrazioneindustriale.it/contatti',
    inLanguage: 'it-IT',
    about: {
      '@type': 'Organization',
      name: 'Festival della Narrazione Industriale',
      url: 'https://www.festivalnarrazioneindustriale.it',
      sameAs: [
        'https://www.instagram.com/festivalnarrazioneindustriale/',
        'https://www.facebook.com/festivalnarrazioneindustriale/',
        'https://www.linkedin.com/company/festival-narrazione-industriale'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: ['Italian'],
      },
    },
  }

  return (
    <main className="min-h-screen bg-white pt-20 md:pt-24">
      {/* Structured Data - ContactPage Schema */}
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <Header />

      {/* Hero Section Rossa con Form */}
      <section className="relative w-full bg-fni-red py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 lg:gap-20 xl:gap-24">

            {/* Colonna sinistra - Testo */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8 lg:pr-8">
              {/* Titolo principale */}
              <h1 className="font-halenoir-regular text-white text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] uppercase leading-tight">
                [CONTATTI]
              </h1>

              {/* Sottotitolo */}
              <h2 className="font-halenoir-bold text-white text-[22px] md:text-[26px] lg:text-[30px] uppercase leading-tight">
                PER SAPERNE DI PIù
              </h2>

              {/* Descrizione */}
              <p className="font-halenoir-regular text-white text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[600px]">
                Per informazioni approfondite sul Festival della Narrazione Industriale o per saperne di più sugli eventi e sulle prossime Edizioni.
              </p>
            </div>

            {/* Colonna destra - Form */}
            <div className="relative w-full flex items-center">
              <div className="w-full">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sezione SEGUICI */}
      <section className="relative w-full bg-white py-10 md:py-14 lg:py-16">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
            {/* Titolo */}
            <h2 className="font-halenoir-bold text-fni-red text-[20px] md:text-[24px] lg:text-[28px] uppercase leading-tight lg:max-w-[60%]">
              SEGUI IL FESTIVAL DELLA NARRAZIONE INDUSTRIALE SUI SOCIAL
            </h2>

            {/* Icone Social */}
            <div className="flex gap-5 lg:gap-6">
              <a
                href="https://www.facebook.com/festivalnarrazioneindustriale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fni-red hover:scale-110 hover:opacity-80 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="48" height="48" viewBox="0 0 40 40" fill="currentColor" className="w-10 h-10 lg:w-12 lg:h-12">
                  <path d="M40 20C40 8.954 31.046 0 20 0S0 8.954 0 20c0 9.984 7.313 18.255 16.875 19.76V25.781h-5.078V20h5.078v-4.406c0-5.013 2.986-7.781 7.554-7.781 2.188 0 4.476.391 4.476.391v4.922h-2.522c-2.484 0-3.258 1.542-3.258 3.125V20h5.547l-.887 5.781h-4.66V39.76C32.687 38.255 40 29.984 40 20z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/festivalnarrazioneindustriale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fni-red hover:scale-110 hover:opacity-80 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="48" height="48" viewBox="0 0 40 40" fill="currentColor" className="w-10 h-10 lg:w-12 lg:h-12">
                  <path d="M20 0C14.477 0 13.842.023 11.715.113 9.59.203 8.085.51 6.768 1.003c-1.366.53-2.524 1.24-3.677 2.393C1.938 4.549 1.228 5.707.698 7.073c-.493 1.317-.8 2.822-.89 4.947C-.182 14.147-.205 14.782-.205 20.305s.023 6.158.113 8.285c.09 2.125.397 3.63.89 4.947.53 1.366 1.24 2.524 2.393 3.677 1.153 1.153 2.311 1.863 3.677 2.393 1.317.493 2.822.8 4.947.89 2.127.09 2.762.113 8.285.113s6.158-.023 8.285-.113c2.125-.09 3.63-.397 4.947-.89 1.366-.53 2.524-1.24 3.677-2.393 1.153-1.153 1.863-2.311 2.393-3.677.493-1.317.8-2.822.89-4.947.09-2.127.113-2.762.113-8.285s-.023-6.158-.113-8.285c-.09-2.125-.397-3.63-.89-4.947-.53-1.366-1.24-2.524-2.393-3.677C31.573 1.938 30.415 1.228 29.049.698c-1.317-.493-2.822-.8-4.947-.89C21.975.018 21.34-.005 19.817-.005L20 0zm0 3.604c5.38 0 6.016.02 8.138.107 1.964.09 3.03.417 3.74.693.94.365 1.61.801 2.314 1.505.704.704 1.14 1.374 1.505 2.314.276.71.603 1.776.693 3.74.087 2.122.107 2.758.107 8.138s-.02 6.016-.107 8.138c-.09 1.964-.417 3.03-.693 3.74-.365.94-.801 1.61-1.505 2.314-.704.704-1.374 1.14-2.314 1.505-.71.276-1.776.603-3.74.693-2.122.087-2.758.107-8.138.107s-6.016-.02-8.138-.107c-1.964-.09-3.03-.417-3.74-.693-.94-.365-1.61-.801-2.314-1.505-.704-.704-1.14-1.374-1.505-2.314-.276-.71-.603-1.776-.693-3.74-.087-2.122-.107-2.758-.107-8.138s.02-6.016.107-8.138c.09-1.964.417-3.03.693-3.74.365-.94.801-1.61 1.505-2.314.704-.704 1.374-1.14 2.314-1.505.71-.276 1.776-.603 3.74-.693 2.122-.087 2.758-.107 8.138-.107z"/>
                  <path d="M20 26.672c-3.676 0-6.672-2.996-6.672-6.672S16.324 13.328 20 13.328s6.672 2.996 6.672 6.672-2.996 6.672-6.672 6.672zM20 10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"/>
                  <circle cx="30.4" cy="9.6" r="2.339"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/festival-narrazione-industriale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fni-red hover:scale-110 hover:opacity-80 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width="48" height="48" viewBox="0 0 40 40" fill="currentColor" className="w-10 h-10 lg:w-12 lg:h-12">
                  <path d="M37.037 0H2.963C1.329 0 0 1.292 0 2.886v34.228C0 38.708 1.329 40 2.963 40h34.074C38.671 40 40 38.708 40 37.114V2.886C40 1.292 38.671 0 37.037 0zM12.222 34.074H6.296V15.185h5.926v18.889zm-2.963-21.481c-1.898 0-3.426-1.54-3.426-3.425 0-1.886 1.528-3.426 3.426-3.426 1.897 0 3.425 1.54 3.425 3.426 0 1.885-1.528 3.425-3.425 3.425zm24.815 21.481h-5.926v-9.185c0-2.192-.044-5.012-3.056-5.012-3.056 0-3.523 2.387-3.523 4.852v9.345h-5.926V15.185h5.685v2.578h.081c.791-1.5 2.725-3.082 5.605-3.082 5.995 0 7.1 3.945 7.1 9.074v10.319z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Info & Contact - dall'ultima sezione del footer */}
      <section className="bg-[#f7f4f4] py-8 md:py-10 lg:py-12">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {/* Top Row: Logo + Association Info */}
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-6 items-start">
              {/* Logo */}
              <div className="flex items-start">
                <Image
                  src="/images/footer/logo-festival-text.svg"
                  alt="Festival Narrazione Industriale"
                  width={183}
                  height={67}
                  className="w-[130px] lg:w-[160px] h-auto object-contain object-left"
                />
              </div>

              {/* Association Info */}
              <div className="font-halenoir-regular text-[#282828] text-[14px] lg:text-[16px] xl:text-[17px] leading-normal">
                <p>FESTIVAL NARRAZIONE INDUSTRIALE A.P.S</p>
                <p>VIA STRASBURGO, 23/A</p>
                <p>P.IVA 03106750346</p>
              </div>
            </div>

            {/* Bottom Row: Social Icons + Contact Email */}
            <div className="flex flex-col lg:grid lg:grid-cols-[auto_1fr_auto] gap-5 lg:gap-8 lg:items-center">
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
              <div className="flex flex-col gap-2 lg:text-right">
                <p className="font-halenoir-regular text-[#282828] text-[14px] lg:text-[16px] xl:text-[17px] leading-normal">
                  Per info <a
                    href="mailto:segreteria@festivalnarrazioneindustriale.it"
                    className="hover:text-fni-red transition-colors"
                  >
                    segreteria@festivalnarrazioneindustriale.it
                  </a>
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[13px] lg:text-[14px] xl:text-[15px] leading-normal">
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
    </main>
  );
}
