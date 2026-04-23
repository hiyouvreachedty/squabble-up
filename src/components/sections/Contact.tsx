'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <SectionWrapper id="contact" dark>
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Ready to Train?
        </h2>
        <p className="text-white/60">
          Book a class, ask about private sessions, or just say what&apos;s up. Terrell personally responds to every message.
        </p>
      </div>

      {submitted ? (
        <div className="max-w-md mx-auto text-center py-12">
          <p className="text-5xl mb-4">🥊</p>
          <h3 className="text-2xl font-black text-white uppercase mb-2">Got it!</h3>
          <p className="text-white/60">Expect a reply within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Subject (e.g. Book a Class, Private Session)"
            className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
          />
          <textarea
            required
            rows={5}
            placeholder="Your message..."
            className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors resize-none"
          />
          <Button type="submit" variant="primary" size="lg">
            Send Message
          </Button>
        </form>
      )}
    </SectionWrapper>
  )
}
