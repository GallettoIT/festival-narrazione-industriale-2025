import Header from '@/components/Header'
import HeroSection from '@/sections/HeroSection'
import InfoEdizione from '@/sections/InfoEdizione'
import Focus2025 from '@/sections/Focus2025'
import OspitiSlider from '@/sections/OspitiSlider'
import Separator from '@/components/Separator'
import LayoutFNI from '@/sections/LayoutFNI'
import Edizione2024 from '@/sections/Edizione2024'
import Partners from '@/sections/Partners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Padding per compensare header fisso */}
      <div className="h-20 md:h-24"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Info Edizione 2025 - Sezione Rossa */}
      <InfoEdizione />

      {/* Focus 2025 - Sezione Grigia */}
      <Focus2025 />

      {/* Ospiti Slider - Carosello */}
      <OspitiSlider />

      {/* Separator - Elemento grafico decorativo */}
      <Separator
        bgColor="bg-fni-red"
        svgPath="/images/logo-fni-festival-full.svg"
        alt="Festival Narrazione Industriale"
      />

      {/* Layout F-N-I - Sezione "Perché?" con 3 colonne */}
      <LayoutFNI />

      {/* Edizione 2024 - Retrospettiva con statistiche */}
      <Edizione2024 />

      {/* Separator - Logo FNI su sfondo scuro */}
      <Separator
        bgColor="bg-[#272828]"
        svgPath="/images/fni-separator-logo.svg"
        alt="FNI"
      />

      {/* Partners - Sponsor, Sostenitori e Partner Istituzionali */}
      <Partners />

      {/* Footer - Press Area, Newsletter, Info & Contact */}
      <Footer />
    </main>
  )
}
