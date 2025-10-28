import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Pagina Error 404 - Not Found
 */

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Rossa - Error 404 */}
      <section className="relative w-full bg-fni-red py-20 md:py-32 lg:py-40">
        <div className="max-w-container-fni mx-auto px-6 md:px-8 text-center">
          <h1 className="font-halenoir-bold text-white text-[80px] md:text-[120px] lg:text-[160px] uppercase mb-6 md:mb-8">
            404
          </h1>
          <h2 className="font-halenoir-bold text-white text-[32px] md:text-[40px] lg:text-[48px] uppercase mb-6 md:mb-8">
            PAGINA NON TROVATA
          </h2>
          <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>

          <Link
            href="/"
            className="inline-block border-[3px] border-white px-5 py-2 font-halenoir-bold text-white text-[24px] md:text-[28px] lg:text-[32px] uppercase hover:bg-white hover:text-fni-red transition-colors duration-300"
          >
            TORNA ALLA HOME
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
