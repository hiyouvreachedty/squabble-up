import { valueCards } from '@/data'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function Values() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-14">
        <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">Why Squabble Up</p>
        <h2 className="text-4xl md:text-5xl font-black text-brand-black uppercase tracking-tight">
          Built Different
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {valueCards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-4 p-8 bg-brand-offwhite border border-gray-100 hover:border-brand-red/30 transition-colors"
          >
            <span className="text-4xl">{card.icon}</span>
            <h3 className="text-lg font-black text-brand-black uppercase tracking-wide">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
