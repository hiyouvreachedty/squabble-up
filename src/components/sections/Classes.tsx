import { classes } from '@/data'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const levelColors: Record<string, string> = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  all: 'bg-brand-red/10 text-brand-red',
}

export default function Classes() {
  return (
    <SectionWrapper id="classes" dark>
      <div className="text-center mb-14">
        <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">What We Offer</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Classes
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="flex flex-col justify-between p-8 border border-white/10 hover:border-brand-red/50 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-black text-white uppercase tracking-wide">{cls.title}</h3>
                <span className={cn('text-xs font-bold uppercase px-2 py-1 tracking-wide', levelColors[cls.level])}>
                  {cls.level}
                </span>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">{cls.description}</p>
            </div>
            <div className="mt-6">
              <Button href={cls.href} variant="outline" size="sm">
                {cls.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
