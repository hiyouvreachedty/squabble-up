import type { NavLink, ClassCard, Step, ValueCard, Testimonial, Stat } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Classes', href: '#classes' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const steps: Step[] = [
  {
    number: '01',
    title: 'Show Up',
    description: 'Pick a class, book your spot, and walk through the door. That\'s the hardest part.',
  },
  {
    number: '02',
    title: 'Train Hard',
    description: 'Fundamentals, conditioning, mitt work — led by a coach who actually knows the sport.',
  },
  {
    number: '03',
    title: 'Level Up',
    description: 'Track your progress, refine your technique, and keep coming back stronger.',
  },
]

export const valueCards: ValueCard[] = [
  {
    icon: '🥊',
    title: 'Real Technique',
    description: 'No shadowboxing to pop music. Actual boxing fundamentals, taught properly.',
  },
  {
    icon: '🎯',
    title: 'All Levels',
    description: 'First timer or seasoned fighter, there\'s a spot for you here.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    description: 'Small classes, personal attention, real connections.',
  },
  {
    icon: '📍',
    title: 'Kelowna Built',
    description: 'Local, independent, and done different. Not a franchise.',
  },
]

export const classes: ClassCard[] = [
  {
    id: 'fundamentals',
    title: 'Fundamentals',
    description: 'Perfect for beginners. Learn stance, footwork, and basic combinations in a welcoming environment.',
    level: 'beginner',
    cta: 'Learn More',
    href: '#contact',
  },
  {
    id: 'conditioning',
    title: 'Conditioning',
    description: 'Boxing-based cardio that builds real athletic fitness. Pads, bags, and bodyweight.',
    level: 'all',
    cta: 'Learn More',
    href: '#contact',
  },
  {
    id: 'mitt-work',
    title: 'Mitt Work',
    description: 'One-on-one or small group mitt sessions with the coach. Technical and intense.',
    level: 'intermediate',
    cta: 'Learn More',
    href: '#contact',
  },
  {
    id: 'private',
    title: 'Private Sessions',
    description: 'Personalized coaching tailored to your goals. Book a 1-on-1 with Terrell.',
    level: 'all',
    cta: 'Book Now',
    href: '#contact',
  },
  {
    id: 'open-gym',
    title: 'Open Gym',
    description: 'Drop in and work on your own with bag time and space to move.',
    level: 'all',
    cta: 'Learn More',
    href: '#contact',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Best decision I made this year. Terrell knows the sport inside out and makes it accessible for anyone.',
    name: 'Coming Soon',
    context: 'Student',
  },
  {
    id: '2',
    quote: "I've tried every boxing class in Kelowna. This is the only one that felt real.",
    name: 'Coming Soon',
    context: 'Student',
  },
  {
    id: '3',
    quote: 'Not just a trainer — a coach who actually cares about your development.',
    name: 'Coming Soon',
    context: 'Student',
  },
]

export const stats: Stat[] = [
  { value: '20+', label: 'Years Boxing' },
  { value: '5+', label: 'Years in Design & Dev' },
  { value: '100%', label: 'Kelowna Built' },
]
