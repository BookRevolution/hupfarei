interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 ${className}`}>
      <div className="container">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}

