'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Formular-Daten sammeln
      const formData = new FormData(e.target as HTMLFormElement)
      const name = formData.get('name') as string
      const email = formData.get('email') as string
      const phone = formData.get('phone') as string
      const message = formData.get('message') as string

      console.log('Sende E-Mail automatisch...', { name, email, phone, message })

      // Automatischer E-Mail-Versand über Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '993d3d26-e732-4228-9cf8-d7e49be8d794',
          name: name,
          email: email,
          phone: phone,
          message: message || '(Keine Nachricht)',
          subject: `Neue Kontaktanfrage von ${name}`,
          from_name: 'Die Hupfarei Website',
          reply_to: email
        })
      })

      console.log('Response Status:', response.status)

      if (response.ok) {
        const result = await response.json()
        console.log('E-Mail erfolgreich gesendet:', result)
        
        // Erfolg anzeigen
        setSubmitted(true)
        
        // Formular zurücksetzen
        const form = e.target as HTMLFormElement
        form.reset()
      } else {
        const errorText = await response.text()
        console.error('Fehler beim Senden:', errorText)
        throw new Error('E-Mail konnte nicht gesendet werden')
      }
      
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error)
      alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter diehupfarei@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl shadow-brand max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-brand-mint rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Vielen Dank!</h3>
        <p className="text-lg text-gray-600">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white rounded-2xl shadow-brand p-8"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Name *</span>
            <input
              required
              name="name"
              type="text"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-ring focus:border-brand-purple transition-colors text-gray-900"
              placeholder="Dein Name"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">E-Mail *</span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-ring focus:border-brand-purple transition-colors text-gray-900"
              placeholder="ihre@email.com"
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700">Telefon (optional)</span>
          <input
            type="tel"
            name="phone"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-ring focus:border-brand-purple transition-colors text-gray-900"
            placeholder="+43 660 9395049"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700">Nachricht (optional)</span>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-ring focus:border-brand-purple transition-colors resize-none text-gray-900"
            placeholder="Gewünschtes Datum, Anzahl Kinder, besondere Wünsche..."
          />
        </label>

        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            required
            className="mt-1 w-4 h-4 text-purple-700 focus:ring-brand-purple border-gray-300 rounded"
          />
          <span className="text-gray-700">
            Ich stimme der Verarbeitung meiner Daten zum Zweck der Kontaktaufnahme zu.
            <a href="https://diehupfarei.at/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline ml-1">
              Datenschutzerklärung
            </a>
          </span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-brand-pink text-white font-bold text-lg rounded-xl shadow-brand hover:shadow-brand-hover hover:bg-brand-pink/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>

        <p className="text-sm text-gray-600 text-center">
          Zur Hauptseite: <a
            className="text-purple-700 hover:underline font-medium"
            href="https://diehupfarei.at/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://diehupfarei.at/
          </a>
        </p>
      </form>
    </div>
  )
}

