import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-black flex items-center justify-center overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/95 to-brand-red/20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-4">
          Kelowna&apos;s Boxing Studio
        </p>
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-6">
          Train Like
          <br />
          <span className="text-brand-red">You Mean It.</span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Real boxing. Real technique. Real community. Squabble Up is where Kelowna
          comes to train — no fluff, no franchises, just the sport done right.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#classes" variant="primary" size="lg">
            Explore Classes
          </Button>
          <Button href="#how-it-works" variant="outline" size="lg">
            How It Works
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  )
}
