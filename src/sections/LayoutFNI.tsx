'use client';

import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Layout F-N-I Section - Festival Narrazione Industriale
 *
 * Approccio con allineamento verticale preciso:
 * - F allineata con inizio testo FESTIVAL
 * - N centrata con sezione NARRAZIONE
 * - I allineata con fine sezione INDUSTRIALE
 * - Linee che si disegnano scrollando dall'alto verso il basso
 *
 * Figma Node ID: 4099:118
 */

interface ContentBlockProps {
  letter: 'F' | 'N' | 'I';
  letterName: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  alignment: 'start' | 'center' | 'end';
  delay?: number;
}

function ContentBlock({ letter, letterName, title, text, image, imageAlt, alignment, delay = 0 }: ContentBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const alignmentClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end'
  }[alignment];

  return (
    <div ref={ref} className={`grid grid-cols-[auto_1fr_auto] gap-12 xl:gap-16 ${alignmentClass} min-h-[360px]`}>

      {/* Letter + Name Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: delay }}
        className="flex items-start gap-6 xl:gap-8 sticky top-24"
      >
        <div>
          <span className="font-halenoir-bold text-fni-red text-[64px] xl:text-[80px] leading-none block">
            {letter}
          </span>
        </div>

        <div className="pt-3 xl:pt-4">
          <span className="font-halenoir-bold text-fni-red text-[28px] xl:text-[36px] leading-none block uppercase">
            {letterName}
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
          priority={letter === 'F'}
        />
      </motion.div>
    </div>
  );
}

function AnimatedLine({ progress }: { progress: any }) {
  return (
    <div className="pl-8 lg:pl-12 -my-4">
      <div className="flex items-center justify-start ml-[8px] xl:ml-[10px]">
        <svg width="6" height="200" viewBox="0 0 6 200" className="overflow-visible h-[120px] lg:h-[160px] xl:h-[200px]">
          <motion.line
            x1="3"
            y1="0"
            x2="3"
            y2={progress}
            stroke="#E94D34"
            strokeWidth="6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}

export default function LayoutFNI() {
  const sectionRef = useRef(null);

  // Scroll progress per le animazioni delle linee
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Prima linea (F to N): si disegna dall'alto verso il basso quando scroll progress è tra 0.15 e 0.4
  const line1Progress = useTransform(scrollYProgress, [0.15, 0.4], ["0%", "100%"]);

  // Seconda linea (N to I): si disegna dall'alto verso il basso quando scroll progress è tra 0.5 e 0.75
  const line2Progress = useTransform(scrollYProgress, [0.5, 0.75], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f7f4f4] py-16 md:py-20 lg:py-24"
      data-section="layout-fni"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="pl-8 lg:pl-12">

          {/* F - FESTIVAL (aligned start) */}
          <ContentBlock
            letter="F"
            letterName="FESTIVAL"
            title="PERCHÉ UN FESTIVAL?"
            text="Perché raccontare l'industria è raccontare il Paese. Un Festival per dare voce alle imprese, alla loro storia, al loro futuro."
            image="/images/industriale-img1.png"
            imageAlt="Industria storica"
            alignment="start"
            delay={0}
          />

          {/* Animated Line F to N */}
          <AnimatedLine progress={line1Progress} />

          {/* N - NARRAZIONE (aligned center) */}
          <ContentBlock
            letter="N"
            letterName="NARRAZIONE"
            title="PERCHÉ NARRARE?"
            text="Narrare è un viaggio nel tempo, un ponte che unisce il passato al futuro. Attraverso le storie del lavoro custodiamo i sogni di chi ha costruito il mondo e accendiamo nuove luci per chi ancora si muove verso mondi da immaginare."
            image="/images/industriale-img2.png"
            imageAlt="Barilla - Narrazione industriale"
            alignment="center"
            delay={0}
          />

          {/* Animated Line N to I */}
          <AnimatedLine progress={line2Progress} />

          {/* I - INDUSTRIALE (aligned end) */}
          <ContentBlock
            letter="I"
            letterName="INDUSTRIALE"
            title="PERCHÉ INDUSTRIALE?"
            text="L'industria è la magia della trasformazione: materia che diventa qualcosa di nuovo, idee che prendono forma, energia che genera futuro. È l'industria a guidare il cambiamento, trasformando costantemente il mondo intorno a noi."
            image="/images/industriale-img3.png"
            imageAlt="Industria moderna"
            alignment="end"
            delay={0}
          />

        </div>
      </div>

      {/* Mobile Layout - Stacked */}
      <div className="lg:hidden px-6 md:px-8 space-y-16">

        {/* F - FESTIVAL */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-halenoir-bold text-fni-red text-[56px] md:text-[72px] leading-none">
              F
            </span>
            <span className="font-halenoir-bold text-fni-red text-[20px] md:text-[24px] leading-none uppercase">
              FESTIVAL
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
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

          {/* Divider Line */}
          <div className="flex justify-center py-4">
            <svg width="6" height="60" className="overflow-visible">
              <motion.line
                x1="3"
                y1="0"
                x2="3"
                y2="60"
                stroke="#E94D34"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </svg>
          </div>
        </div>

        {/* N - NARRAZIONE */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-halenoir-bold text-fni-red text-[56px] md:text-[72px] leading-none">
              N
            </span>
            <span className="font-halenoir-bold text-fni-red text-[20px] md:text-[24px] leading-none uppercase">
              NARRAZIONE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
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

          {/* Divider Line */}
          <div className="flex justify-center py-4">
            <svg width="6" height="60" className="overflow-visible">
              <motion.line
                x1="3"
                y1="0"
                x2="3"
                y2="60"
                stroke="#E94D34"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </svg>
          </div>
        </div>

        {/* I - INDUSTRIALE */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-halenoir-bold text-fni-red text-[56px] md:text-[72px] leading-none">
              I
            </span>
            <span className="font-halenoir-bold text-fni-red text-[20px] md:text-[24px] leading-none uppercase">
              INDUSTRIALE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
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

      </div>

    </section>
  );
}
