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
          className="object-contain"
          sizes={`${width}px`}
        />
      </div>
    </motion.div>
  );
}

export default function Partners() {
  return (
    <section
      className="relative w-full bg-white py-16 md:py-24 lg:py-32"
      data-section="partners"
    >
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-12 md:mb-16"
        >
          [PARTNER]
        </motion.h2>

        {/* MAIN SPONSOR - Barilla */}
        <PartnerCategory title="MAIN SPONSOR" id="main-sponsor">
          <div className="flex items-center justify-start">
            <PartnerLogo
              src="/images/partners/barilla.svg"
              alt="Barilla"
              width={280}
              height={100}
            />
          </div>
        </PartnerCategory>

        {/* SPONSOR */}
        <PartnerCategory title="SPONSOR" id="sponsor">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
            <PartnerLogo src="/images/partners/chiesi.svg" alt="Chiesi" width={180} height={44} />
            <PartnerLogo src="/images/partners/opem.svg" alt="Opem" width={140} height={60} />
            <PartnerLogo src="/images/partners/gia.png" alt="GIA" width={150} height={70} />
            <PartnerLogo src="/images/partners/bcc.svg" alt="BCC" width={140} height={55} />
            <PartnerLogo src="/images/partners/emilbanca.svg" alt="Emilbanca" width={220} height={26} />
            <PartnerLogo src="/images/partners/cisita.svg" alt="Cisita" width={150} height={65} />
            <PartnerLogo src="/images/partners/verlingue.svg" alt="Verlingue" width={240} height={57} />
            <PartnerLogo src="/images/partners/fondazione-monteparma.svg" alt="Fondazione Monteparma" width={220} height={80} />
            <PartnerLogo src="/images/partners/bia.svg" alt="BIA" width={98} height={33} />
          </div>
        </PartnerCategory>

        {/* SOSTENITORI */}
        <PartnerCategory title="SOSTENITORI" id="sostenitori">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            <PartnerLogo src="/images/partners/techcab.png" alt="Techcab" width={100} height={50} />
            <PartnerLogo src="/images/partners/seraco.svg" alt="Seraco" width={160} height={44} />
            <PartnerLogo src="/images/partners/studiomm.png" alt="Studio MM" width={150} height={35} />
            <PartnerLogo src="/images/partners/proges.png" alt="Proges" width={145} height={42} />
            <PartnerLogo src="/images/partners/maldy-italiana.svg" alt="Maldy Italiana" width={80} height={50} />
            <PartnerLogo src="/images/partners/koppel.png" alt="Koppel" width={68} height={68} />
            <PartnerLogo src="/images/partners/laumas.svg" alt="Laumas" width={174} height={21} />
            <PartnerLogo src="/images/partners/casappa.svg" alt="Casappa" width={143} height={30} />
            <PartnerLogo src="/images/partners/laterlite.svg" alt="Laterlite" width={146} height={41} />
            <PartnerLogo src="/images/partners/archivi-olivetti.png" alt="Archivi Olivetti" width={88} height={29} />
            <PartnerLogo src="/images/partners/infotec.svg" alt="InfoTec" width={165} height={41} />
            <PartnerLogo src="/images/partners/elcos.svg" alt="Elcos" width={139} height={28} />
            <PartnerLogo src="/images/partners/pilogen-carezza.svg" alt="Pilogen Carezza" width={75} height={49} />
            <PartnerLogo src="/images/partners/isomec-green.svg" alt="Isomec Green" width={187} height={35} />
            <PartnerLogo src="/images/partners/sercal.svg" alt="Sercal" width={180} height={40} />
            <PartnerLogo src="/images/partners/salvatore-robuschi.svg" alt="Salvatore Robuschi" width={172} height={34} />
          </div>
        </PartnerCategory>

        {/* MEDIA PARTNER */}
        <PartnerCategory title="MEDIA PARTNER" id="media-partner">
          <div className="flex items-center justify-start">
            <PartnerLogo
              src="/images/partners/gazzetta.svg"
              alt="Gazzetta di Parma"
              width={260}
              height={20}
            />
          </div>
        </PartnerCategory>

        {/* SOSTENITORE TECNICO */}
        <PartnerCategory title="SOSTENITORE TECNICO" id="sostenitore-tecnico">
          <div className="flex items-center justify-start">
            <PartnerLogo
              src="/images/partners/digigraph.svg"
              alt="Digigraph"
              width={116}
              height={43}
            />
          </div>
        </PartnerCategory>

        {/* PARTNER ISTITUZIONALI */}
        <PartnerCategory title="PARTNER ISTITUZIONALI" id="partner-istituzionali">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            <PartnerLogo src="/images/partners/museimpresa.png" alt="Museimpresa" width={142} height={52} />
            <PartnerLogo src="/images/partners/unione-industriali.svg" alt="Unione Parmense degli Industriali" width={143} height={59} />
          </div>
        </PartnerCategory>

        {/* CON IL PATROCINIO DI */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12">
          {/* Left: Category Label */}
          <div className="flex flex-col">
            <h3 className="font-halenoir-bold text-fni-red text-[16px] lg:text-[18px] uppercase mb-2">
              Con il patrocinio di:
            </h3>
            <div className="w-full lg:w-[180px] h-[2px] bg-fni-red"></div>
          </div>

          {/* Right: Institutional Logos */}
          <div>
            {/* Patrocinio logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-8">
              <PartnerLogo src="/images/partners/comune-parma.svg" alt="Comune di Parma" width={98} height={90} />
              <PartnerLogo src="/images/partners/provincia-parma.png" alt="Provincia di Parma" width={99} height={90} />
              <PartnerLogo src="/images/partners/regione-emilia.svg" alt="Regione Emilia-Romagna" width={78} height={93} />
              <PartnerLogo src="/images/partners/universita-parma.svg" alt="Università di Parma" width={104} height={94} />
              <PartnerLogo src="/images/partners/biblioteche.png" alt="Biblioteche di Parma" width={126} height={94} />
              <PartnerLogo src="/images/partners/parma-io-ci-sto.svg" alt="Parma, io ci sto!" width={91} height={91} />
              <PartnerLogo src="/images/partners/il-borgo.png" alt="Il Borgo" width={183} height={52} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
