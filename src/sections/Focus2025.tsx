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
              Il ruolo della narrazione d&apos;autore, in particolar modo quella letteraria e giornalistica, rappresenta uno strumento fondamentale per analizzare e interpretare il mondo dell&apos;industria. Non si limita a descriverla, ma riflette profondamente su come le sue evoluzioni plasmino le trasformazioni sociali, i modelli relazionali e il rapporto tra generazioni, influenzando l&apos;immaginario collettivo.
            </p>

            <p>
              Questa seconda edizione di <span className="font-halenoir-bold">FNI - Festival della Narrazione Industriale</span>, vuole stabilire nuove sinergie in grado di creare una rete culturale sul tema del lavoro industriale. Prestigiose le partnership con il <span className="font-halenoir-bold">Premio Biella Letteratura e Industria</span> e l&apos;<span className="font-halenoir-bold">Associazione Archivio Storico Olivetti</span>, pilastro nazionale degli archivi d&apos;impresa.
            </p>
          </div>

          {/* Colonna Destra */}
          <div className="text-[#282828] text-xl md:text-2xl leading-relaxed space-y-6">
            <p>
              Le iniziative previste offrono una ricca pluralità di proposte, palcoscenico di pregio per la mostra dedicata alla <span className="font-halenoir-bold">Biblioteca Olivetti</span> e non solo: prezioso il punto di vista di un osservatore come <span className="font-halenoir-bold">Beppe Severgnini</span> sulla cultura e sulla società statunitense, il laboratorio di narrazione d&apos;impresa <span className="font-halenoir-bold">&quot;Lo scrittore residente&quot;</span>, il laboratorio universitario <span className="font-halenoir-bold">&quot;Raccontare il lavoro&quot;</span>, che coinvolgerà studenti dell&apos;Ateneo di Parma con imprese del territorio, e letture teatralizzate.
            </p>

            <p>
              Il filo conduttore tematico di quest&apos;anno è l&apos;<span className="font-halenoir-bold">Umanesimo Industriale</span>, ispirato alla visione olivettiana. L&apos;obiettivo è riaffermare l&apos;individuo al centro della progettazione del lavoro, in una filosofia d&apos;impresa che promuove la crescita personale e professionale e assume un ruolo attivo e responsabile verso l&apos;intera società.
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
