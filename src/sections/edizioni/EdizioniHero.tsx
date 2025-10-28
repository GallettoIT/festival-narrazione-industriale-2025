'use client';

/**
 * EdizioniHero Section
 *
 * Hero section per la pagina EDIZIONI con:
 * - Titolo "EDIZIONI PRECEDENTI"
 * - Immagine hero città industriale
 * - Box scuro con info prima edizione
 * - Descrizione testuale della prima edizione
 */

export default function EdizioniHero() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase mb-8 md:mb-12 lg:mb-16">
          [EDIZIONI PRECEDENTI]
        </h1>

        {/* Video Hero */}
        <div className="relative w-full">
          {/* YouTube Video Embed */}
          <div className="relative w-full aspect-[16/9] md:aspect-[2.35/1] lg:aspect-[2.64/1] overflow-hidden bg-[#282828]">
            <iframe
              src="https://www.youtube.com/embed/cSXnj-FI8qA?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1"
              title="Festival Narrazione Industriale 2024 - Parma"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
