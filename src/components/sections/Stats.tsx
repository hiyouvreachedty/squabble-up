import { stats } from '@/data'

export default function Stats() {
  return (
    <section className="bg-brand-red py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span className="text-6xl font-black text-white leading-none">{stat.value}</span>
              <span className="text-white/80 text-sm font-bold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
