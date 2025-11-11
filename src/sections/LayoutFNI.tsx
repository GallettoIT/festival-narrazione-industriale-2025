'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Layout F-N-I Section - Festival Narrazione Industriale
 *
 * Modern alternating layout with images and animated content
 * Responsive design with fluid animations
 *
 * Figma Node ID: 4099:118
 */

interface ContentBlockProps {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  index: number;
  imageMaxWidth?: string;
  objectFit?: 'cover' | 'contain';
}

function ContentBlock({ title, text, image, imageAlt, imagePosition, index, imageMaxWidth, objectFit = 'cover' }: ContentBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: imagePosition === 'left' ? -40 : 40
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.1 }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3 }
    }
  };

  return (
    <div ref={ref} className={`lg:grid ${
      imagePosition === 'left' ? 'lg:grid-cols-[35%_1fr]' : 'lg:grid-cols-[1fr_35%]'
    } gap-8 lg:gap-10 xl:gap-12 items-center`}>
      {/* Image Column - Hidden on mobile, visible on desktop */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
        className={`hidden lg:block relative w-full ${
          imageMaxWidth ? imageMaxWidth : 'max-w-none'
        } ${
          imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className={objectFit === 'contain' ? 'object-contain' : 'object-cover'}
              sizes="35vw"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Content Column - Simple on mobile, grid on desktop */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contentVariants}
        className={`space-y-4 md:space-y-5 ${
          imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        {/* Titolo */}
        <h3 className="font-halenoir-bold text-fni-red text-[20px] md:text-[24px] lg:text-[28px] leading-tight uppercase">
          {title}
        </h3>

        {/* Testo */}
        <p className="font-halenoir-regular text-[#282828] text-[15px] lg:text-[18px] xl:text-[20px] leading-relaxed max-w-[800px]">
          {text}
        </p>
      </motion.div>
    </div>
  );
}

export default function LayoutFNI() {
  return (
    <section
      className="relative w-full bg-[#f7f4f4] py-10 md:py-14 lg:py-16"
      data-section="layout-fni"
    >
      <div className="max-w-container-fni mx-auto px-6 md:px-8">

        {/* Content Blocks - Alternating Layout */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">

          {/* FESTIVAL - Image Left */}
          <ContentBlock
            title="PERCHÉ UN FESTIVAL?"
            text="Perché raccontare l'industria è raccontare il nostro Paese."
            image="/images/whyfestival.jpg"
            imageAlt="Industria storica"
            imagePosition="left"
            index={0}
          />

          {/* NARRAZIONE - Image Right */}
          <ContentBlock
            title="PERCHÉ NARRARE?"
            text="Narrare è un viaggio nel tempo, un ponte che unisce il passato al futuro. Attraverso le storie del lavoro custodiamo i sogni di chi ha costruito il mondo e accendiamo nuove luci per chi ancora si muove verso mondi da immaginare."
            image="/images/industriale-img2.png?v=4"
            imageAlt="Barilla - Narrazione industriale"
            imagePosition="right"
            index={1}
          />

          {/* INDUSTRIALE - Image Left */}
          <ContentBlock
            title="PERCHÉ INDUSTRIALE?"
            text="L'industria è la magia della trasformazione: materia che diventa qualcosa di nuovo, idee che prendono forma, energia che genera futuro. È l'industria a guidare il cambiamento, trasformando costantemente il mondo intorno a noi."
            image="/images/industriale-img3.png"
            imageAlt="Industria moderna"
            imagePosition="left"
            index={2}
          />

        </div>
      </div>
    </section>
  );
}
