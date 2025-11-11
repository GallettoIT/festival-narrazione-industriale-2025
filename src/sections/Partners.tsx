'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PartnerCategoryProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

function PartnerCategory({ title, children, id }: PartnerCategoryProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 mb-12 lg:mb-16" id={id}>
      {/* Left: Category Label */}
      <div className="flex flex-col">
        <h3 className="font-halenoir-bold text-fni-red text-[16px] lg:text-[18px] uppercase mb-2">
          {title}
        </h3>
        <div className="w-full lg:w-[180px] h-[2px] bg-fni-red"></div>
      </div>

      {/* Right: Logos Grid */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}

interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

function PartnerLogo({ src, alt, width = 150, height = 60, className = '' }: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`flex items-center justify-center p-4 ${className}`}
    >
      <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain brightness-0 opacity-80"
          sizes={`${width}px`}
        />
      </div>
    </motion.div>
  );
}

export default function Partners() {
  return (
    <section
      className="relative w-full bg-[#f7f4f4] py-10 md:py-14 lg:py-16"
      data-section="partners"
    >
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-8 md:mb-12"
        >
          [PARTNER]
        </motion.h2>

        {/* 1. CON IL CONTRIBUTO DI */}
        <PartnerCategory title="CON IL CONTRIBUTO DI:" id="contributo">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
            <PartnerLogo src="/images/partners/CONTRIBUTO/COMUNE.svg" alt="Comune di Parma" width={120} height={110} />
            <PartnerLogo src="/images/partners/CONTRIBUTO/REGIONE.svg" alt="Regione Emilia-Romagna" width={100} height={120} />
          </div>
        </PartnerCategory>

        {/* 2. CON IL PATROCINIO DI */}
        <PartnerCategory title="CON IL PATROCINIO DI:" id="patrocinio">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
            <PartnerLogo src="/images/partners/PATROCINIO/BIBLIOTECHE.svg" alt="Biblioteche di Parma" width={140} height={100} />
            <PartnerLogo src="/images/partners/PATROCINIO/BORGO.svg" alt="Il Borgo" width={200} height={60} />
            <PartnerLogo src="/images/partners/PATROCINIO/IOCISTO.svg" alt="Parma, io ci sto!" width={100} height={100} />
            <PartnerLogo src="/images/partners/PATROCINIO/MIC.svg" alt="MIC" width={100} height={100} />
            <PartnerLogo src="/images/partners/PATROCINIO/MUSEIMPRESA.svg" alt="Museimpresa" width={150} height={60} />
            <PartnerLogo src="/images/partners/PATROCINIO/OLIVETTI.svg" alt="Archivi Olivetti" width={100} height={35} />
            <PartnerLogo src="/images/partners/PATROCINIO/ORDINE_ARCHITETTI.svg" alt="Ordine Architetti" width={100} height={100} />
            <PartnerLogo src="/images/partners/PATROCINIO/PROVINCIA.svg" alt="Provincia di Parma" width={110} height={100} />
            <PartnerLogo src="/images/partners/PATROCINIO/UNIVERSITA.svg" alt="Università di Parma" width={115} height={105} />
          </div>
        </PartnerCategory>

        {/* 3. MAIN SPONSOR */}
        <PartnerCategory title="MAIN SPONSOR" id="main-sponsor">
          <div className="flex items-center justify-start">
            <PartnerLogo
              src="/images/partners/MAIN SPONSOR/BARILLA.svg"
              alt="Barilla"
              width={220}
              height={80}
            />
          </div>
        </PartnerCategory>

        {/* 4. SPONSOR */}
        <PartnerCategory title="SPONSOR" id="sponsor">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
            <PartnerLogo src="/images/partners/SPONSOR/BIA.svg" alt="BIA" width={110} height={40} />
            <PartnerLogo src="/images/partners/SPONSOR/CHIESI.svg" alt="Chiesi" width={190} height={50} />
            <PartnerLogo src="/images/partners/SPONSOR/CISITA.svg" alt="Cisita" width={160} height={70} />
            <PartnerLogo src="/images/partners/SPONSOR/EMILBANCA.svg" alt="Emilbanca" width={230} height={30} />
            <PartnerLogo src="/images/partners/SPONSOR/GIA.svg" alt="GIA" width={160} height={75} />
            <PartnerLogo src="/images/partners/SPONSOR/MONTEPARMA.svg" alt="Fondazione Monteparma" width={230} height={85} />
            <PartnerLogo src="/images/partners/SPONSOR/OPEM.svg" alt="Opem" width={150} height={65} />
            <PartnerLogo src="/images/partners/SPONSOR/UPI.svg" alt="Unione Parmense Industriali" width={150} height={65} />
            <PartnerLogo src="/images/partners/SPONSOR/VERLINGUE.svg" alt="Verlingue" width={250} height={60} />
          </div>
        </PartnerCategory>

        {/* 5. SOSTENITORI */}
        <PartnerCategory title="SOSTENITORI" id="sostenitori">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            <PartnerLogo src="/images/partners/SOSTENITORI/CANEPARI.svg" alt="Canepari" width={120} height={50} />
            <PartnerLogo src="/images/partners/SOSTENITORI/CASAPPA.svg" alt="Casappa" width={150} height={35} />
            <PartnerLogo src="/images/partners/SOSTENITORI/CAVOZZA.svg" alt="Cavozza" width={140} height={50} />
            <PartnerLogo src="/images/partners/SOSTENITORI/CGI.svg" alt="CGI" width={100} height={50} />
            <PartnerLogo src="/images/partners/SOSTENITORI/ELCOS.svg" alt="Elcos" width={145} height={30} />
            <PartnerLogo src="/images/partners/SOSTENITORI/FIASA.svg" alt="Fiasa" width={130} height={50} />
            <PartnerLogo src="/images/partners/SOSTENITORI/GOUP.svg" alt="Goup" width={120} height={50} />
            <PartnerLogo src="/images/partners/SOSTENITORI/GRENTI.svg" alt="Grenti" width={160} height={55} />
            <PartnerLogo src="/images/partners/SOSTENITORI/INFOTECH.svg" alt="InfoTech" width={175} height={45} />
            <PartnerLogo src="/images/partners/SOSTENITORI/ISOMEC.svg" alt="Isomec Green" width={195} height={40} />
            <PartnerLogo src="/images/partners/SOSTENITORI/KOPPEL.svg" alt="Koppel" width={75} height={75} />
            <PartnerLogo src="/images/partners/SOSTENITORI/LATERLITE.svg" alt="Laterlite" width={155} height={45} />
            <PartnerLogo src="/images/partners/SOSTENITORI/LAUMAS.svg" alt="Laumas" width={180} height={25} />
            <PartnerLogo src="/images/partners/SOSTENITORI/MALDY.svg" alt="Maldy Italiana" width={85} height={55} />
            <PartnerLogo src="/images/partners/SOSTENITORI/MM.svg" alt="Studio MM" width={160} height={40} />
            <PartnerLogo src="/images/partners/SOSTENITORI/PILOGEN.svg" alt="Pilogen Carezza" width={80} height={55} />
            <PartnerLogo src="/images/partners/SOSTENITORI/PROGES.svg" alt="Proges" width={155} height={45} />
            <PartnerLogo src="/images/partners/SOSTENITORI/SERACO.svg" alt="Seraco" width={170} height={48} />
            <PartnerLogo src="/images/partners/SOSTENITORI/SR.svg" alt="Salvatore Robuschi" width={180} height={38} />
            <PartnerLogo src="/images/partners/SOSTENITORI/TECHCAB.svg" alt="Techcab" width={110} height={55} />
            <PartnerLogo src="/images/partners/SOSTENITORI/VEREL.svg" alt="Verel" width={140} height={50} />
          </div>
        </PartnerCategory>

        {/* 6. MEDIA PARTNER */}
        <PartnerCategory title="MEDIA PARTNER" id="media-partner">
          <div className="flex items-center justify-start">
            <PartnerLogo
              src="/images/partners/MEDIA PARTNER/GAZZETTA.svg"
              alt="Gazzetta di Parma"
              width={280}
              height={25}
            />
          </div>
        </PartnerCategory>

        {/* 7. SPONSOR TECNICI */}
        <PartnerCategory title="SPONSOR TECNICI" id="sponsor-tecnici">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
            <PartnerLogo src="/images/partners/SPONSOR TECNICI/DIGIGRAPH.svg" alt="Digigraph" width={125} height={48} />
            <PartnerLogo src="/images/partners/SPONSOR TECNICI/UNSOCIALS.svg" alt="Unsocials" width={200} height={50} />
          </div>
        </PartnerCategory>
      </div>
    </section>
  );
}
