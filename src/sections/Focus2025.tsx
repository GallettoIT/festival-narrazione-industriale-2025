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
      className="relative w-full bg-[#f7f4f4] py-10 md:py-14 lg:py-16"
      data-section="focus-2025"
    >
      <div className="max-w-container-fni mx-auto px-6 md:px-8">

        {/* Titolo */}
        <h2 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-8 md:mb-12">
          [FOCUS 2025]
        </h2>

        {/* Layout 2 colonne di testo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 mb-8 md:mb-10">

          {/* Colonna Sinistra */}
          <div className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[20px] leading-relaxed space-y-6 md:space-y-8">
            <p>
              Il ruolo della narrazione d&apos;autore rappresenta uno strumento fondamentale per analizzare e interpretare il mondo dell&apos;industria. Non si limita a descriverla, ma riflette profondamente su come le sue evoluzioni plasmino le trasformazioni sociali, i modelli relazionali e il rapporto tra generazioni, influenzando l&apos;immaginario collettivo.
            </p>

            <p>
              Questa seconda edizione di FNI - Festival della Narrazione Industriale, vuole stabilire nuove sinergie in grado di creare una rete culturale sul tema del lavoro industriale. Prestigiose le partnership con il Premio Biella Letteratura e Industria (cui è dedicato un evento con la partecipazione di Alberto Sinigaglia e Antonio Franchini) e l&apos;Associazione Archivio Storico Olivetti, pilastro nazionale degli archivi d&apos;impresa.
            </p>
          </div>

          {/* Colonna Destra */}
          <div className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[20px] leading-relaxed space-y-6 md:space-y-8">
            <p>
              Il programma esplora questa visione attraverso eventi di pregio come la mostra <span className="font-halenoir-bold">&quot;Il sistema culturale Olivetti&quot;</span>, il prezioso il punto di vista di un osservatore quale <span className="font-halenoir-bold">Beppe Severgnini</span> sulla cultura e sulla società statunitense, l&apos;innovativa esperienza dello &quot;Scrittore di Fabbrica&quot; con il drammaturgo <span className="font-halenoir-bold">Emanuele Aldrovandi</span>, e la restituzione del laboratorio universitario <span className="font-halenoir-bold">&quot;Raccontare l&apos;impresa&quot;</span>. La chiusura, affidata al reading di <span className="font-halenoir-bold">Carlo Varotti</span> <span className="italic">&quot;La chiave a stella&quot;</span> di Primo Levi.
            </p>

            <p>
              Il filo conduttore tematico di quest&apos;anno è l&apos;Umanesimo Industriale, ispirato alla visione olivettiana. L&apos;obiettivo è riaffermare l&apos;individuo al centro della progettazione del lavoro, in una filosofia industriale che promuove la crescita personale e professionale e assume un ruolo attivo e responsabile verso l&apos;intera società.
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
