import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ChiSiamoHero from '@/sections/chi-siamo/ChiSiamoHero';
import IlProgetto from '@/sections/chi-siamo/IlProgetto';
import LayoutFNI from '@/sections/LayoutFNI';
import OrganiDirettivi from '@/sections/chi-siamo/OrganiDirettivi';

export const metadata = {
  title: 'Chi Siamo | Festival Narrazione Industriale',
  description: 'Il Festival della Narrazione Industriale nasce con l\'obiettivo di esplorare il rapporto profondo e dinamico tra industria e società.',
};

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Padding per compensare menu fisso */}
      <div className="h-20 md:h-24"></div>

      {/* Hero section con titolo e GIF */}
      <ChiSiamoHero />

      {/* IL PROGETTO */}
      <IlProgetto />

      {/* Sezione F-N-I (riutilizzata dalla home) */}
      <LayoutFNI />

      {/* CTA Scopri il programma 2025 */}
      <CTASection
        bgColor="bg-[#272828]"
        buttonText="SCOPRI IL PROGRAMMA 2025"
        buttonColor="border-fni-red text-fni-red hover:bg-fni-red hover:text-white"
        href="/programma"
      />

      {/* Organo Direttivo e Comitato Scientifico */}
      <OrganiDirettivi />

      {/* CTA Scopri gli ospiti */}
      <CTASection
        bgColor="bg-fni-red"
        buttonText="SCOPRI GLI OSPITI DELL'EDIZIONE 2025"
        buttonColor="border-white text-white hover:bg-white hover:text-fni-red"
        href="/ospiti"
      />

      <Footer />
    </main>
  );
}
