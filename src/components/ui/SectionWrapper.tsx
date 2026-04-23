import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  className?: string
  dark?: boolean
  children: React.ReactNode
}

export default function SectionWrapper({
  id,
  className,
  dark = false,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full py-20 px-6 md:px-12 lg:px-24',
        dark ? 'bg-brand-black text-white' : 'bg-white text-brand-black',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}
