import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import BrandStatementSection from '@/components/sections/BrandStatementSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ClassesSection from '@/components/sections/ClassesSection'
import FounderSection from '@/components/sections/FounderSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABannerSection from '@/components/sections/CTABannerSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandStatementSection />
        <HowItWorksSection />
        <ExperienceSection />
        <ClassesSection />
        <FounderSection />
        <TestimonialsSection />
        <CTABannerSection />
      </main>
      <Footer />
    </>
  )
}
