export interface NavLink {
  label: string
  href: string
}

export interface ClassCard {
  id: string
  title: string
  description: string
  duration?: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'all'
  cta: string
  href: string
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface ValueCard {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  context: string
  avatar?: string
}

export interface Stat {
  value: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
