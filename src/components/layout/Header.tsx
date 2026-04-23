'use client'

import { useState, useEffect } from 'react'
import { navLinks } from '@/data'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-brand-black shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="text-white font-black text-2xl tracking-tight uppercase">
          Squabble<span className="text-brand-red">Up</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href="#contact" variant="primary" size="sm">
            Book a Class
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-white transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-black px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold uppercase tracking-wide text-lg"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" size="md">
            Book a Class
          </Button>
        </div>
      )}
    </header>
  )
}
