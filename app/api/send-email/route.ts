import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('API-Endpunkt wurde aufgerufen')
  
  try {
    const body = await request.json()
    console.log('Empfangene Daten:', body)
    
    const { name, email, phone, message } = body

    // E-Mail über FormSubmit.co versenden
    const response = await fetch('https://formsubmit.co/ajax/diehupfarei@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        _subject: `Neue Kontaktanfrage von ${name}`,
        _captcha: false
      })
    })

    console.log('FormSubmit Response Status:', response.status)
    
    if (response.ok) {
      const result = await response.json()
      console.log('FormSubmit Result:', result)
      return NextResponse.json({ success: true })
    } else {
      const errorText = await response.text()
      console.log('FormSubmit Error:', errorText)
      throw new Error(`FormSubmit Fehler: ${response.status}`)
    }
  } catch (error) {
    console.error('Fehler im API-Endpunkt:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

