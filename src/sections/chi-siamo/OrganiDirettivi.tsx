'use client';

/**
 * Organi Direttivi Section
 *
 * Sezione con Organo Direttivo e Comitato Scientifico
 */

export default function OrganiDirettivi() {
  return (
    <section className="relative w-full bg-white pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Organo Direttivo */}
          <div>
            <h2 className="font-halenoir-bold text-fni-red text-[32px] md:text-[40px] lg:text-[48px] uppercase mb-8 md:mb-12">
              ORGANO DIRETTIVO
            </h2>

            <div className="space-y-6">
              <div className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-relaxed uppercase">
                <p>L'Organo direttivo è formato da:</p>
                <p>
                  <span className="font-halenoir-bold text-fni-red">Giuseppe Iotti</span>, <span className="font-halenoir-bold text-fni-red">Lucia Mirti</span> e <span className="font-halenoir-bold text-fni-red">Oreste Bergamaschi</span>
                </p>
                <p className="mt-4">Direzione organizzativa:</p>
                <p className="font-halenoir-bold text-fni-red">Antonio Iamiglio</p>
              </div>
            </div>
          </div>

          {/* Comitato Scientifico */}
          <div>
            <h2 className="font-halenoir-bold text-fni-red text-[32px] md:text-[40px] lg:text-[48px] uppercase mb-8 md:mb-12">
              IL COMITATO SCIENTIFICO
            </h2>

            <div className="space-y-6">
              {/* Isotta Piazza */}
              <div>
                <p className="font-halenoir-bold text-fni-red text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Isotta Piazza
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Università di Parma
                </p>
              </div>

              {/* Giancarlo Gonizzi */}
              <div>
                <p className="font-halenoir-bold text-fni-red text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Giancarlo Gonizzi
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Curatore Archivio Storico Barilla
                </p>
              </div>

              {/* Katia Golini */}
              <div>
                <p className="font-halenoir-bold text-fni-red text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Katia Golini
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Giornalista Gazzetta di Parma
                </p>
              </div>

              {/* Giuseppe Lupo */}
              <div>
                <p className="font-halenoir-bold text-fni-red text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Giuseppe Lupo
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Università Cattolica del Sacro Cuore di Milano
                </p>
              </div>

              {/* Claudio Rinaldi */}
              <div>
                <p className="font-halenoir-bold text-fni-red text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Claudio Rinaldi
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Direttore Gazzetta di Parma
                </p>
              </div>

              {/* Tiziano Toracca */}
              <div>
                <p className="font-halenoir-bold text-fni-red text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Tiziano Toracca
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Università degli Studi di Udine
                </p>
              </div>

              {/* Diego Varini */}
              <div>
                <p className="font-halenoir-bold text-fni-red text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Diego Varini
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Università di Parma
                </p>
              </div>

              {/* Carlo Varotti */}
              <div>
                <p className="font-halenoir-bold text-fni-red text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Carlo Varotti
                </p>
                <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] uppercase leading-normal">
                  Università di Parma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
