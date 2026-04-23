import { steps } from '@/data'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" dark>
      <div className="text-center mb-14">
        <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">The Process</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          How It Works
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-start gap-4 p-8 border border-white/10 hover:border-brand-red/50 transition-colors">
            <span className="text-5xl font-black text-brand-red/30 leading-none">{step.number}</span>
            <h3 className="text-xl font-black text-white uppercase tracking-wide">{step.title}</h3>
            <p className="text-white/60 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
