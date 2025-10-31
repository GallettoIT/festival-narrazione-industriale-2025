'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatCardProps {
  number: string;
  label: string;
  opacity: number;
  delay?: number;
}

function StatCard({ number, label, opacity, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center rounded-[40px] lg:rounded-[50px] px-8 py-12 lg:py-16"
      style={{ backgroundColor: `rgba(233, 77, 52, ${opacity})` }}
    >
      <span className="font-halenoir-bold text-[#282828] text-[36px] lg:text-[40px] leading-none mb-2 uppercase">
        {number}
      </span>
      <span className="font-halenoir-bold text-[#282828] text-[14px] lg:text-[16px] leading-tight text-center uppercase">
        {label}
      </span>
    </motion.div>
  );
}

export default function Edizione2024() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-16 md:py-20 lg:py-24"
      data-section="edizione-2024"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Grid - Photo + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image with Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[555/740] lg:aspect-[3/4] w-[70%] mx-auto lg:w-full lg:mx-0 overflow-hidden"
          >
            <Image
              src="/images/edizione2024-building.png"
              alt="Edificio industriale"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* FNI Logo Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[28%] max-w-[160px]"
            >
              <Image
                src="/images/fni-logo.svg"
                alt="FNI Logo"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-between h-full lg:min-h-full space-y-6 lg:space-y-8">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-halenoir-regular text-[#282828] text-[28px] lg:text-[36px] leading-none uppercase">
                Edizione 2024
              </h3>
              <h2 className="font-halenoir-bold text-fni-red text-[32px] lg:text-[40px] leading-tight uppercase">
                08 Eventi<br />in tre giorni
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="font-halenoir-regular text-[#282828] text-[16px] lg:text-[20px] leading-relaxed opacity-90">
                Un viaggio tra parole, immagini e visioni: l&apos;industria italiana come specchio dei tempi. Un&apos;edizione che ci invita a riflettere e immaginare insieme il ruolo dell&apos;industria nell&apos;evoluzione del nostro Paese.
              </p>
            </motion.div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              <StatCard number="30" label="Studenti coinvolti" opacity={0.3} delay={0.4} />
              <StatCard number="32" label="Aziende" opacity={0.9} delay={0.5} />
              <StatCard number="18" label="Ospiti" opacity={0.65} delay={0.6} />
            </div>
          </div>
        </div>

        {/* CTA Button - Below photo, centered with screen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <a
            href="/edizioni"
            className="inline-block font-halenoir-bold text-fni-red text-[20px] lg:text-[24px] uppercase border-[3px] border-fni-red px-4 lg:px-6 py-2 lg:py-2.5 hover:bg-fni-red hover:text-white transition-colors duration-300"
          >
            Ripercorri l'edizione 2024
          </a>
        </motion.div>
      </div>
    </section>
  );
}
