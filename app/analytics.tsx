'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function Analytics() {
  useEffect(() => {
    // Google Analytics Code - Ersetze GA_MEASUREMENT_ID mit deiner echten ID
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Hier deine Google Analytics ID einfügen
    
    // Google Analytics Script laden
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)
    
    // Google Analytics konfigurieren
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `
    document.head.appendChild(script2)
    
    // Event Tracking für Buttons
    const trackButtonClicks = () => {
      const buttons = document.querySelectorAll('a[href="#preise"], a[href="#kontakt"]')
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: button.textContent?.trim() || 'button_click'
            })
          }
        })
      })
    }
    
    // Event Tracking nach kurzer Verzögerung
    setTimeout(trackButtonClicks, 1000)
    
  }, [])

  return null
}





