import { testimonials } from '@/data'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function Testimonials() {
  return (
    <SectionWrapper>
      <div className="text-center mb-14">
        <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">Community</p>
        <h2 className="text-4xl md:text-5xl font-black text-brand-black uppercase tracking-tight">
          What People Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col gap-6 p-8 bg-brand-offwhite border border-gray-100"
          >
            <p className="text-brand-black leading-relaxed text-lg">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-auto">
              <p className="font-black text-brand-black uppercase tracking-wide text-sm">{t.name}</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{t.context}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
