'use client';

/**
 * Focus 2025 Section - Festival Narrazione Industriale
 *
 * Sezione Focus con:
 * - Titolo [FOCUS 2025]
 * - Layout 2 colonne di testo descrittivo affiancate
 * - Icon FNI centrata SOTTO le colonne
 * - Background grigio chiaro
 *
 * Layout:
 * - Mobile: Stack verticale centrato
 * - Desktop: 2 colonne affiancate + icon sotto
 *
 * Figma Node ID: 4099:58
 */

export default function Focus2025() {
  return (
    <section
      className="relative w-full bg-[#f7f4f4] py-16 md:py-24 lg:py-32"
      data-section="focus-2025"
    >
      <div className="max-w-container-fni mx-auto px-6 md:px-8">

        {/* Titolo */}
        <h2 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-12 md:mb-16">
          [FOCUS 2025]
        </h2>

        {/* Layout 2 colonne di testo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-16">

          {/* Colonna Sinistra */}
          <div className="text-[#282828] text-xl md:text-2xl leading-relaxed space-y-6">
            <p>
              <span className="font-halenoir-bold">Il Festival della Narrazione Industriale torna a Parma</span>
              {' '}con una prospettiva rinnovata, ponendo al centro l&apos;Umanesimo Industriale: un approccio all&apos;impresa autentico, dinamico e profondamente umano. E&apos; molto di più di un Festival: è un punto d&apos;incontro tra chi immagina, chi realizza e chi contribuisce a scrivere{' '}
              <span className="font-halenoir-bold">la storia del saper fare</span>.
            </p>

            <p>
              <span className="font-halenoir-bold">Storie, fabbriche, territori</span>: un intreccio di voci che rivela come, dietro ogni prodotto, ci siano persone, scelte e visione. Quest&apos;anno il Festival si amplia e accoglie nuove collaborazioni di rilievo, tra cui il Premio Biella Letteratura e Industria e l&apos;Archivio Storico Olivetti.
            </p>
          </div>

          {/* Colonna Destra */}
          <div className="text-[#282828] text-xl md:text-2xl leading-relaxed space-y-6">
            <p>
              L&apos;<span className="font-halenoir-bold">Umanesimo Industriale</span>
              {' '}rappresenta una visione che mette le persone al centro dell&apos;impresa, superando la logica dei soli risultati per restituire valore e significato al lavoro. È un{' '}
              <span className="font-halenoir-bold">modello che genera cultura</span>
              {' '}e, insieme, ispira un dialogo costante tra fare e pensare, tra produzione e creatività. Parlare di industria significa parlare di futuro: un futuro costruito attraverso visione e relazioni.
            </p>

            <p>
              Incontri, libri, dialoghi e idee: il Festival della Narrazione Industriale{' '}
              <span className="font-halenoir-bold">è il luogo in cui si racconta il lavoro che trasforma il mondo</span>, con uno sguardo aperto e rivolto al domani.
            </p>
          </div>
        </div>

        {/* Icon FNI - Centrata sotto le colonne */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 lg:w-20 lg:h-20">
            <img
              src="/images/icon-fni-focus.svg"
              alt="FNI"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
