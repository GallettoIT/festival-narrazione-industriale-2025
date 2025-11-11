'use client';

import Image from 'next/image';

/**
 * LabIntro Section
 *
 * Sezione rossa con descrizione del Laboratorio "Raccontare il Lavoro"
 */

export default function LabIntro() {
  return (
    <section className="relative w-full bg-fni-red py-16 md:py-20 lg:py-24">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[28%_1fr] gap-8 lg:gap-12 xl:gap-16">
          {/* Colonna sinistra: Icona + Titolo */}
          <div className="space-y-4 md:space-y-6">
            {/* Logo F-N-I */}
            <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
              <Image
                src="/images/icon-fni.svg"
                alt="F-N-I"
                fill
                className="object-contain"
              />
            </div>

            {/* Titolo */}
            <h2 className="font-halenoir-bold text-[#f7f4f4] text-[32px] md:text-[40px] lg:text-[48px] uppercase leading-tight">
              IL LABORATORIO<br />"RACCONTARE IL LAVORO"
            </h2>
          </div>

          {/* Colonna destra: Testo descrittivo */}
          <div className="font-halenoir-regular text-white text-[15px] lg:text-[18px] xl:text-[20px] leading-normal">
            <p className="mb-6 md:mb-8">
              Il LAB "Raccontare il lavoro" è il laboratorio di comunicazione d'impresa promosso dall'Università di Parma in collaborazione con il GIA Gruppo Imprese Artigiane di Parma, all'interno del progetto "Unipr4Talents: talentuosi si diventa", finanziato dalla Regione Emilia-Romagna tramite il Bando Talenti.
            </p>

            <p className="mb-6 md:mb-8">
              Sotto la direzione scientifica della docente Isotta Piazza, coadiuvata dall'esperto di comunicazione Gianluca Signaroldi e dal fotografo Marco Gualazzini, circa 30 studenti e studentesse di diversi corsi universitari lavorano ogni anno in gruppi su quattro imprese locali.
            </p>

            <p>
              Il laboratorio offre un'occasione unica di sperimentazione concreta: gli studenti raccontano aziende reali del territorio parmense, mettendo in gioco competenze creative e comunicative e confrontandosi con le sfide della narrazione d'impresa. I progetti sviluppati vengono presentati durante il Festival della Narrazione Industriale, dove una giuria valuta i lavori e assegna la borsa di studio, valorizzando il talento e la capacità di trasformare il sapere accademico in esperienze professionali concrete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
