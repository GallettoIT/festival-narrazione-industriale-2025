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
    <main className="min-h-screen bg-white">
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
      <section className="relative w-full bg-fni-red py-16 md:py-20 lg:py-32">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            {/* Colonna sinistra - Testo */}
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {/* Titolo principale */}
              <h1 className="font-halenoir-regular text-white text-[48px] md:text-[56px] lg:text-[64px] uppercase">
                [CONTATTI]
              </h1>

              {/* Sottotitolo */}
              <h2 className="font-halenoir-bold text-white text-[36px] md:text-[42px] lg:text-[48px] uppercase">
                RICHIEDI INFO
              </h2>

              {/* Descrizione */}
              <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-relaxed">
                Per maggiori informazioni compila il form.
              </p>
            </div>

            {/* Colonna destra - Form */}
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Sezione SEGUICI */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Titolo */}
            <div>
              <h2 className="font-halenoir-bold text-fni-red text-[36px] md:text-[42px] lg:text-[48px] uppercase">
                SEGUICI
              </h2>
            </div>

            {/* Testo e Social */}
            <div className="space-y-8">
              <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-relaxed">
                Resta aggiornato su tutti gli eventi e news sui nostri canali social.
              </p>

              {/* Icone Social */}
              <div className="flex gap-6 md:gap-8">
                <a
                  href="https://www.facebook.com/festivalnarrazioneindustriale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fni-red hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M40 20C40 8.954 31.046 0 20 0S0 8.954 0 20c0 9.984 7.313 18.255 16.875 19.76V25.781h-5.078V20h5.078v-4.406c0-5.013 2.986-7.781 7.554-7.781 2.188 0 4.476.391 4.476.391v4.922h-2.522c-2.484 0-3.258 1.542-3.258 3.125V20h5.547l-.887 5.781h-4.66V39.76C32.687 38.255 40 29.984 40 20z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/festivalnarrazioneindustriale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fni-red hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M20 0C14.477 0 13.842.023 11.715.113 9.59.203 8.085.51 6.768 1.003c-1.366.53-2.524 1.24-3.677 2.393C1.938 4.549 1.228 5.707.698 7.073c-.493 1.317-.8 2.822-.89 4.947C-.182 14.147-.205 14.782-.205 20.305s.023 6.158.113 8.285c.09 2.125.397 3.63.89 4.947.53 1.366 1.24 2.524 2.393 3.677 1.153 1.153 2.311 1.863 3.677 2.393 1.317.493 2.822.8 4.947.89 2.127.09 2.762.113 8.285.113s6.158-.023 8.285-.113c2.125-.09 3.63-.397 4.947-.89 1.366-.53 2.524-1.24 3.677-2.393 1.153-1.153 1.863-2.311 2.393-3.677.493-1.317.8-2.822.89-4.947.09-2.127.113-2.762.113-8.285s-.023-6.158-.113-8.285c-.09-2.125-.397-3.63-.89-4.947-.53-1.366-1.24-2.524-2.393-3.677C31.573 1.938 30.415 1.228 29.049.698c-1.317-.493-2.822-.8-4.947-.89C21.975.018 21.34-.005 19.817-.005L20 0zm0 3.604c5.38 0 6.016.02 8.138.107 1.964.09 3.03.417 3.74.693.94.365 1.61.801 2.314 1.505.704.704 1.14 1.374 1.505 2.314.276.71.603 1.776.693 3.74.087 2.122.107 2.758.107 8.138s-.02 6.016-.107 8.138c-.09 1.964-.417 3.03-.693 3.74-.365.94-.801 1.61-1.505 2.314-.704.704-1.374 1.14-2.314 1.505-.71.276-1.776.603-3.74.693-2.122.087-2.758.107-8.138.107s-6.016-.02-8.138-.107c-1.964-.09-3.03-.417-3.74-.693-.94-.365-1.61-.801-2.314-1.505-.704-.704-1.14-1.374-1.505-2.314-.276-.71-.603-1.776-.693-3.74-.087-2.122-.107-2.758-.107-8.138s.02-6.016.107-8.138c.09-1.964.417-3.03.693-3.74.365-.94.801-1.61 1.505-2.314.704-.704 1.374-1.14 2.314-1.505.71-.276 1.776-.603 3.74-.693 2.122-.087 2.758-.107 8.138-.107z"/>
                    <path d="M20 26.672c-3.676 0-6.672-2.996-6.672-6.672S16.324 13.328 20 13.328s6.672 2.996 6.672 6.672-2.996 6.672-6.672 6.672zM20 10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"/>
                    <circle cx="30.4" cy="9.6" r="2.339"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/festival-narrazione-industriale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fni-red hover:opacity-70 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M37.037 0H2.963C1.329 0 0 1.292 0 2.886v34.228C0 38.708 1.329 40 2.963 40h34.074C38.671 40 40 38.708 40 37.114V2.886C40 1.292 38.671 0 37.037 0zM12.222 34.074H6.296V15.185h5.926v18.889zm-2.963-21.481c-1.898 0-3.426-1.54-3.426-3.425 0-1.886 1.528-3.426 3.426-3.426 1.897 0 3.425 1.54 3.425 3.426 0 1.885-1.528 3.425-3.425 3.425zm24.815 21.481h-5.926v-9.185c0-2.192-.044-5.012-3.056-5.012-3.056 0-3.523 2.387-3.523 4.852v9.345h-5.926V15.185h5.685v2.578h.081c.791-1.5 2.725-3.082 5.605-3.082 5.995 0 7.1 3.945 7.1 9.074v10.319z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator finale - Logo rosso su sfondo scuro */}
      <section className="relative w-full bg-[#282828] py-12 md:py-16 lg:py-20">
        <div className="max-w-container-fni mx-auto px-6 md:px-8 flex items-center justify-center">
          <div className="relative w-full max-w-[800px] h-[60px] md:h-[80px] lg:h-[100px]">
            <Image
              src="/images/logo-fni-festival-red-full.svg"
              alt="Festival Narrazione Industriale"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
