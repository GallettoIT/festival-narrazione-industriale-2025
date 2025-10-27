'use client';

/**
 * Separator Component - Festival Narrazione Industriale
 *
 * Componente separatore riutilizzabile tra sezioni.
 * Mostra un vettore SVG su sfondo colorato senza stretching.
 *
 * Props:
 * - bgColor: colore background (default: fni-red)
 * - svgPath: path al file SVG da mostrare
 * - alt: testo alternativo per accessibilità
 * - className: classi CSS aggiuntive opzionali
 *
 * Uso:
 * <Separator
 *   bgColor="bg-fni-red"
 *   svgPath="/images/logo-fni-festival-full.svg"
 *   alt="Festival Narrazione Industriale"
 * />
 */

interface SeparatorProps {
  bgColor?: string;
  svgPath: string;
  alt?: string;
  className?: string;
}

export default function Separator({
  bgColor = 'bg-fni-red',
  svgPath,
  alt = '',
  className = '',
}: SeparatorProps) {
  return (
    <div
      className={`relative w-full ${bgColor} py-8 md:py-12 lg:py-16 ${className}`}
      data-component="separator"
    >
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* SVG Container - Mantiene proporzioni originali */}
        <div className="flex items-center justify-center">
          <img
            src={svgPath}
            alt={alt}
            className="w-full max-w-4xl h-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
