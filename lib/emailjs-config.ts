// EmailJS Konfiguration
export const EMAILJS_CONFIG = {
  serviceId: 'service_1234567', // Wird durch Ihre EmailJS Service ID ersetzt
  templateId: 'template_1234567', // Wird durch Ihre EmailJS Template ID ersetzt
  publicKey: 'your_public_key_here', // Wird durch Ihren EmailJS Public Key ersetzt
}

// Fallback: Direkte E-Mail-Anfrage an einen einfachen Service
export const EMAIL_SERVICE_CONFIG = {
  endpoint: 'https://formsubmit.co/ajax/diehupfarei@gmail.com',
  headers: {
    'Content-Type': 'application/json',
  }
}