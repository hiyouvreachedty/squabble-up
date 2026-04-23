import { navLinks } from '@/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <a href="/" className="text-white font-black text-xl tracking-tight uppercase">
            Squabble<span className="text-brand-red">Up</span>
          </a>
          <p className="mt-1 text-sm">Kelowna&apos;s boxing studio. Built different.</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wide font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-white/40">
          &copy; {year} SquabbleUp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
