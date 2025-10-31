'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Layout F-N-I Section - Festival Narrazione Industriale
 *
 * Desktop: Layout verticale con F-N-I e linee orizzontali fisse
 * Mobile/Tablet: Layout verticale semplificato
 *
 * Figma Node ID: 4099:118
 */

interface ContentBlockProps {
  word: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  alignment: 'start' | 'center' | 'end';
  delay?: number;
}

function ContentBlock({ word, title, text, image, imageAlt, alignment, delay = 0 }: ContentBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const alignmentClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end'
  }[alignment];

  // Separa la prima lettera dal resto della parola
  const firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);

  return (
    <div ref={ref} className={`grid grid-cols-[auto_1fr_auto] gap-12 xl:gap-16 ${alignmentClass} min-h-[360px]`}>

      {/* Word with Large Initial Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: delay }}
        className="flex items-start sticky top-24"
      >
        <div className="flex items-center">
          <span className="font-halenoir-bold text-fni-red text-[80px] xl:text-[96px] leading-none">
            {firstLetter}
          </span>
          <span className="font-halenoir-bold text-fni-red text-[28px] xl:text-[36px] leading-none uppercase">
            {restOfWord}
          </span>
        </div>
      </motion.div>

      {/* Content Column */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: delay + 0.2 }}
        className="space-y-3 lg:space-y-4"
      >
        <h3 className="font-halenoir-bold text-fni-red text-[20px] lg:text-[24px] xl:text-[28px] leading-tight uppercase">
          {title}
        </h3>
        <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[22px] leading-relaxed">
          {text}
        </p>
      </motion.div>

      {/* Image Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 30 }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
        className="relative w-[36vw] aspect-[649/371] overflow-hidden"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="36vw"
          priority={word === 'FESTIVAL'}
        />
      </motion.div>
    </div>
  );
}

export default function LayoutFNI() {
  return (
    <section
      className="relative w-full bg-[#f7f4f4] py-16 md:py-20 lg:py-24"
      data-section="layout-fni"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="pl-8 lg:pl-12">

          {/* FESTIVAL (aligned start) */}
          <ContentBlock
            word="FESTIVAL"
            title="PERCHÉ UN FESTIVAL?"
            text="Perché raccontare l'industria è raccontare il Paese. Un Festival per dare voce alle imprese, alla loro storia, al loro futuro."
            image="/images/industriale-img1.png"
            imageAlt="Industria storica"
            alignment="start"
            delay={0}
          />

          <div className="h-12 lg:h-16 xl:h-20" />

          {/* NARRAZIONE (aligned center) */}
          <ContentBlock
            word="NARRAZIONE"
            title="PERCHÉ NARRARE?"
            text="Narrare è un viaggio nel tempo, un ponte che unisce il passato al futuro. Attraverso le storie del lavoro custodiamo i sogni di chi ha costruito il mondo e accendiamo nuove luci per chi ancora si muove verso mondi da immaginare."
            image="/images/industriale-img2.png"
            imageAlt="Barilla - Narrazione industriale"
            alignment="center"
            delay={0}
          />

          <div className="h-12 lg:h-16 xl:h-20" />

          {/* INDUSTRIALE (aligned end) */}
          <ContentBlock
            word="INDUSTRIALE"
            title="PERCHÉ INDUSTRIALE?"
            text="L'industria è la magia della trasformazione: materia che diventa qualcosa di nuovo, idee che prendono forma, energia che genera futuro. È l'industria a guidare il cambiamento, trasformando costantemente il mondo intorno a noi."
            image="/images/industriale-img3.png"
            imageAlt="Industria moderna"
            alignment="end"
            delay={0}
          />

        </div>
      </div>

      {/* Mobile Layout - Simplified (only Q&A and images) */}
      <div className="lg:hidden px-6 md:px-8 space-y-12">

        {/* F - FESTIVAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h3 className="font-halenoir-bold text-fni-red text-[18px] md:text-[20px] leading-tight uppercase">
              PERCHÉ UN FESTIVAL?
            </h3>
            <p className="font-halenoir-regular text-[#282828] text-[16px] md:text-[18px] leading-relaxed">
              Perché raccontare l'industria è raccontare il Paese. Un Festival per dare voce alle imprese, alla loro storia, al loro futuro.
            </p>
          </div>

          <div className="relative w-full aspect-[649/371] overflow-hidden rounded-lg">
            <Image
              src="/images/industriale-img1.png"
              alt="Industria storica"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </motion.div>

        {/* N - NARRAZIONE (without letter/title/divider) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h3 className="font-halenoir-bold text-fni-red text-[18px] md:text-[20px] leading-tight uppercase">
              PERCHÉ NARRARE?
            </h3>
            <p className="font-halenoir-regular text-[#282828] text-[16px] md:text-[18px] leading-relaxed">
              Narrare è un viaggio nel tempo, un ponte che unisce il passato al futuro. Attraverso le storie del lavoro custodiamo i sogni di chi ha costruito il mondo e accendiamo nuove luci per chi ancora si muove verso mondi da immaginare.
            </p>
          </div>

          <div className="relative w-full aspect-[649/371] overflow-hidden rounded-lg">
            <Image
              src="/images/industriale-img2.png"
              alt="Barilla - Narrazione industriale"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* I - INDUSTRIALE (without letter/title) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h3 className="font-halenoir-bold text-fni-red text-[18px] md:text-[20px] leading-tight uppercase">
              PERCHÉ INDUSTRIALE?
            </h3>
            <p className="font-halenoir-regular text-[#282828] text-[16px] md:text-[18px] leading-relaxed">
              L'industria è la magia della trasformazione: materia che diventa qualcosa di nuovo, idee che prendono forma, energia che genera futuro. È l'industria a guidare il cambiamento, trasformando costantemente il mondo intorno a noi.
            </p>
          </div>

          <div className="relative w-full aspect-[649/371] overflow-hidden rounded-lg">
            <Image
              src="/images/industriale-img3.png"
              alt="Industria moderna"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>


      </div>

    </section>
  );
}
