'use client'

import { useState } from 'react'

export default function PhotoUploadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // E-Mail über Gmail senden - super einfach!
      const mailtoLink = `mailto:office@diehupfarei.at?subject=Fotos von ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`
Hallo Die Hupfarei Team! 📸

Ich möchte gerne Fotos von meinem Event senden:

Name: ${formData.name}
E-Mail: ${formData.email}

Ich füge die Fotos direkt in dieser E-Mail als Anhang hinzu.

---
Diese Nachricht wurde über das Foto-Upload-Formular gesendet.
      `.trim())}`

      // E-Mail-Client öffnen
      window.location.href = mailtoLink

      // Erfolgsmeldung anzeigen
      alert('Perfekt! Gmail öffnet sich jetzt. Füge einfach deine Fotos als Anhang hinzu und sende die E-Mail ab! 📸')
      
      // Formular zurücksetzen
      setFormData({ name: '', email: '' })
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error)
      alert('Es gab einen Fehler. Bitte versuche es später erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-4xl">📸</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Fotos senden - super einfach!</h3>
        <p className="text-lg text-gray-600">
          Nur 2 Felder ausfüllen und fertig! 🎉
        </p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="space-y-6 bg-white rounded-2xl shadow-brand p-8"
      >
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700">Name *</span>
          <input 
            required 
            name="name" 
            type="text"
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-ring focus:border-brand-purple transition-colors text-gray-900" 
            placeholder="ihre@email.com"
          />
        </label>

        {/* Einfache Anleitung */}
        <div className="bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 rounded-2xl p-6 border border-brand-pink/20">
          <div className="text-center">
            <h4 className="text-lg font-bold text-gray-800 mb-2">So einfach geht's:</h4>
            <p className="text-gray-700 text-sm">
              1️⃣ Name & E-Mail eingeben<br/>
              2️⃣ Auf "Fotos senden" klicken<br/>
              3️⃣ Fotos in Gmail anhängen<br/>
              4️⃣ E-Mail absenden - fertig! 🎉
            </p>
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-lg rounded-xl shadow-brand hover:shadow-xl hover:from-brand-pink/90 hover:to-brand-purple/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
        >
          {isSubmitting ? '📤 Wird vorbereitet...' : '📸 Fotos senden'}
        </button>
        
        <p className="text-sm text-gray-600 text-center">
          📧 Alle Fotos werden an <span className="font-medium text-purple-700">office@diehupfarei.at</span> gesendet
        </p>
      </form>
    </div>
  )
}
