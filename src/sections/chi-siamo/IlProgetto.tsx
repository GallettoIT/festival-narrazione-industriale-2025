'use client';

/**
 * Il Progetto Section
 *
 * Sezione che descrive il progetto del Festival della Narrazione Industriale
 */

export default function IlProgetto() {
  return (
    <section className="relative w-full bg-white pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <div className="max-w-4xl">
          <h2 className="font-halenoir-bold text-fni-red text-[32px] md:text-[40px] lg:text-[48px] uppercase mb-8 md:mb-12">
            IL PROGETTO
          </h2>

          <div className="space-y-6 md:space-y-8 text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-relaxed">
            <p>
              Il <span className="font-halenoir-bold">Festival della Narrazione Industriale</span> nasce con l'obiettivo di{' '}
              <span className="font-halenoir-bold">esplorare il rapporto profondo e dinamico tra industria e società</span>, mostrando non solo l'aspetto produttivo, ma anche il ruolo culturale che l'impresa riveste.
            </p>

            <p>
              L'industria richiede oggi un modo nuovo di essere raccontata. Le moderne realtà produttive, in particolare le neofabbriche ad alta tecnologia, si configurano come{' '}
              <span className="font-halenoir-bold">"mani che pensano"</span>, vivendo una stagione produttiva che unisce innovazione e cultura. Esse{' '}
              <span className="font-halenoir-bold">generano percorsi di crescita che collegano memoria e futuro</span>, coniugando la consapevolezza della propria storia con i valori dell'innovazione continua. In questo contesto, l'innovazione diventa un processo globale, essenziale per affrontare le sfide contemporanee che il Festival si propone di indagare e narrare.
            </p>

            <p>
              Attraverso le sue iniziative, il Festival mette in luce{' '}
              <span className="font-halenoir-bold">come la cultura d'impresa costituisca un valore fondamentale per il tessuto economico e sociale di un Paese.</span>{' '}
              Essa agisce come un "motore immateriale" in grado di generare innovazione, sviluppo e responsabilità, promuovendo progresso sostenibile. Il Festival invita a valorizzare l'inventiva in sinergia con l'innovazione tecnologica, creando connessioni con altri settori, come arte e cultura, e favorendo una diffusione sempre più ampia delle storie e delle narrazioni che l'industria sa offrire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
