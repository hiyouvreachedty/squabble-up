import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Values from '@/components/sections/Values'
import Classes from '@/components/sections/Classes'
import Testimonials from '@/components/sections/Testimonials'
import Stats from '@/components/sections/Stats'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Values />
        <Classes />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
