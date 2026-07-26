'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const NAV = [
  { href: '#startseite', label: 'Startseite' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#so-einfach', label: 'So einfach' },
  { href: '#fotogalerie', label: 'Fotogalerie' },
  { href: '#preise', label: 'Preise' },
  { href: '#kontakt', label: 'Kontakt' },
  { href: '#impressum', label: 'Impressum' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#startseite')

  useEffect(() => {
    // Only observe elements that are anchor links (start with #)
    const anchorLinks = NAV.filter(n => n.href.startsWith('#'))
    const ids = anchorLinks.map(n => document.querySelector(n.href))
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) setActive('#' + e.target.id) 
      })
    }, { 
      rootMargin: '-40% 0px -55% 0px', 
      threshold: 0 
    })
    
    ids.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-10 z-50 bg-white/95 backdrop-blur-md shadow-xl border-b border-purple-100">
      <nav className="container flex h-18 items-center justify-between py-2">
        <Link href="#startseite" className="flex items-center gap-3 hover:scale-105 transition-transform group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <Image 
              src="/Logo_Groß.webp" 
              alt="Die Hupfarei" 
              width={44} 
              height={44}
              className="w-11 h-11 object-contain relative z-10"
            />
          </div>
          <span className="font-black text-xl bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
            Die Hupfarei
          </span>
        </Link>
        
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
          onClick={() => setOpen(!open)} 
          aria-label="Menü öffnen"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        
        <ul className="hidden md:flex gap-2">
          {NAV.map(n => (
            <li key={n.href}>
              {n.href.startsWith('#') ? (
                <a 
                  href={n.href} 
                  className={`font-bold text-sm transition-all px-4 py-3 rounded-2xl hover:scale-105 ${
                    active === n.href 
                      ? 'text-white shadow-lg' 
                      : 'text-gray-700 hover:text-brand-purple hover:bg-purple-50'
                  }`}
                  style={active === n.href ? {background: 'var(--gradient-2)'} : {}}
                >
                  {n.label}
                </a>
              ) : (
                <Link 
                  href={n.href} 
                  className="font-bold text-sm transition-all px-4 py-3 rounded-2xl hover:scale-105 text-gray-700 hover:text-brand-purple hover:bg-purple-50"
                >
                  {n.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      {open && (
        <div className="md:hidden border-t bg-white shadow-brand">
          <ul className="container py-3 space-y-1">
            {NAV.map(n => (
              <li key={n.href}>
                {n.href.startsWith('#') ? (
                  <a 
                    onClick={() => setOpen(false)} 
                    href={n.href} 
                    className="block py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors text-gray-700 font-medium"
                  >
                    {n.label}
                  </a>
                ) : (
                  <Link 
                    onClick={() => setOpen(false)} 
                    href={n.href} 
                    className="block py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors text-gray-700 font-medium"
                  >
                    {n.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
