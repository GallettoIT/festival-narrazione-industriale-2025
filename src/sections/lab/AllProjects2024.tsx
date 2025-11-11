import Image from 'next/image';

/**
 * AllProjects2024 Section
 *
 * Sezione con tutti i progetti LAB 2024: Infor, Delicius, Elcos
 */

export default function AllProjects2024() {
  return (
    <section className="relative w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo sezione */}
        <h2 className="font-halenoir-bold text-fni-red text-[25px] md:text-[28px] lg:text-[32px] uppercase mb-12 md:mb-16 lg:mb-20">
          TUTTI I PROGETTI 2024
        </h2>

        {/* Grid progetti */}
        <div className="space-y-16 md:space-y-20 lg:space-y-0">
          {/* Row 1: INFOR e ELCOS affiancati su desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            {/* INFOR - Sinistra */}
            <div className="space-y-6 md:space-y-8">
              {/* Titolo con linea decorativa a destra */}
              <div className="flex items-start gap-4 md:gap-6">
                <h3 className="font-halenoir-bold text-fni-red text-[18px] md:text-[19px] lg:text-[20px] uppercase leading-[27px] flex-shrink-0 max-w-[386px]">
                  Il progetto Infor: Connessione Digitale e Innovazione
                </h3>
                <div className="flex-1 flex items-center mt-3">
                  <div className="w-full max-w-[282px] h-[2px] bg-fni-red"></div>
                </div>
              </div>

              {/* Testo descrittivo */}
              <div className="font-halenoir-regular text-[#282828] text-[18px] md:text-[19px] lg:text-[20px] leading-[27px]">
                <p className="mb-0">
                  Il team dedicato al Gruppo Infor, azienda leader nel settore informatico, ha sperimentato un approccio creativo e coinvolgente. Il progetto ha sviluppato un concept originale, immaginando uno scenario distopico in cui, all'improvviso, tutto ciò che è digitale smette di funzionare, evidenziando così l'importanza e l'impatto che l'ecosistema informatico ha nella vita quotidiana e nel lavoro moderno. Attraverso questa scelta narrativa, il team ha trasformato concetti complessi in un racconto immediato e stimolante, capace di catturare l'attenzione e far riflettere sull'essenza della trasformazione e della transizione digitale e sulle conseguenze concrete che ha sulle nostre vite.
                </p>
                <p>&nbsp;</p>
              </div>

              {/* Video YouTube */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/T518OLpXTZE"
                  title="Progetto Infor"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Linea orizzontale finale rossa full-width */}
              <div className="w-full h-[2px] bg-fni-red"></div>
            </div>

            {/* ELCOS - Destra (centrato verticalmente) */}
            <div className="space-y-6 md:space-y-8 lg:mt-[450px]">
              {/* Titolo con linea decorativa a destra */}
              <div className="flex items-start gap-4 md:gap-6">
                <h3 className="font-halenoir-bold text-fni-red text-[18px] md:text-[19px] lg:text-[20px] uppercase leading-[27px] flex-shrink-0 max-w-[341px]">
                  IL PROGETTO Elcos: IL VALORE DELLE PERSONE
                </h3>
                <div className="flex-1 flex items-center mt-3">
                  <div className="w-full max-w-[282px] h-[2px] bg-fni-red"></div>
                </div>
              </div>

              {/* Testo descrittivo */}
              <div className="font-halenoir-regular text-[#282828] text-[18px] md:text-[19px] lg:text-[20px] leading-[27px]">
                <p className="mb-0">
                  Per ELCOS, azienda altamente specializzata in soluzioni elettroniche per il settore industriale, il gruppo di lavoro ha scelto di raccontare l'azienda partendo dalle sue persone e dai loro ruoli. La realizzazione di un video originale, con la partecipazione diretta dei dipendenti, ha valorizzato il clima interno dell'impresa, dando voce a chi ogni giorno contribuisce a rendere ELCOS un ambiente giovane, dinamico e collaborativo.
                </p>
                <p className="mb-0">
                  Il progetto ha messo in luce come questa energia interna si rifletta non solo nella cultura aziendale, ma anche sul mercato, nei prodotti e nel servizio offerto, rendendo tangibile il legame tra capitale umano e qualità dell'azienda. La narrazione autentica e coinvolgente del video trasforma l'esperienza quotidiana dei lavoratori in uno strumento di comunicazione capace di trasmettere valori, competenze e motivazione, evidenziando come un ambiente positivo e stimolante si traduca direttamente in innovazione e performance.
                </p>
                <p>&nbsp;</p>
              </div>

              {/* Video YouTube */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/6cwhhNrclRQ"
                  title="Progetto Elcos"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Linea orizzontale finale rossa full-width */}
              <div className="w-full h-[2px] bg-fni-red"></div>
            </div>
          </div>

          {/* Row 2: DELICIUS - Full width su mobile, sinistra su desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 lg:mt-16">
            {/* DELICIUS - Sinistra */}
            <div className="space-y-6 md:space-y-8">
              {/* Titolo con linea decorativa a destra */}
              <div className="flex items-start gap-4 md:gap-6">
                <h3 className="font-halenoir-bold text-fni-red text-[18px] md:text-[19px] lg:text-[20px] uppercase leading-[27px] flex-shrink-0 max-w-[312px]">
                  DELICIUS: SOSTENIBILITà E TRADIZIONE
                </h3>
                <div className="flex-1 flex items-center mt-3">
                  <div className="w-full max-w-[282px] h-[2px] bg-fni-red"></div>
                </div>
              </div>

              {/* Testo descrittivo */}
              <div className="font-halenoir-regular text-[#282828] text-[18px] md:text-[19px] lg:text-[20px] leading-[27px]">
                <p className="mb-0">
                  Delicius Rizzoli SpA, Società Benefit è un&apos;impresa specializzata nella produzione di conserve ittiche di alta qualità che ha fatto della sostenibilità cuore della propria vision aziendale. La strategia comunicativa sviluppata dal gruppo di lavoro ha posto al centro proprio questo tema, raccontando l&apos;impegno dell&apos;azienda nella gestione responsabile della pesca e nella tutela dell&apos;ambiente, senza perdere di vista la tradizione ed il prezioso saper fare aziendale.
                </p>
                <p className="mb-0">
                  La strategia ha valorizzato la coesione tra etica aziendale e rispetto dell&apos;ambiente, raccontando come Delicius riesca a integrare responsabilità ambientale, qualità del prodotto e legame con il territorio, facendo emergere un modello di impresa che guarda al futuro senza perdere il legame con la propria identità e tradizione.
                </p>
                <p>&nbsp;</p>
              </div>

              {/* Video YouTube */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/s-Jec3k33nw"
                  title="Progetto Delicius"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Linea orizzontale finale rossa full-width */}
              <div className="w-full h-[2px] bg-fni-red"></div>
            </div>

            {/* Colonna vuota su desktop per mantenere il layout */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
