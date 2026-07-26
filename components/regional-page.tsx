import Marquee from '@/components/marquee'
import Navbar from '@/components/navbar'
import ContactForm from '@/components/contact-form'
import { CityData } from '@/lib/cities/types'

const WA_URL =
  'https://wa.me/436609395049?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20eurer%20H%C3%BCpfburg.'

const TESTIMONIAL_BG = ['bg-brand-purple/5', 'bg-brand-yellow/5', 'bg-brand-mint/5']
const FAQ_BG = [
  'bg-gradient-to-br from-brand-purple/5 to-brand-pink/5',
  'bg-gradient-to-br from-brand-yellow/5 to-brand-orange/5',
  'bg-gradient-to-br from-brand-mint/5 to-brand-blue/5',
  'bg-gradient-to-br from-brand-pink/5 to-brand-purple/5',
]
const USECASE_BG = ['bg-brand-pink', 'bg-brand-yellow', 'bg-brand-mint']

function CheckCircle() {
  return (
    <div className="w-6 h-6 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 text-white">
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

function WhatsAppIcon({ className = 'w-8 h-8 text-white' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

export default function RegionalPage({ data }: { data: CityData }) {
  const d = data
  return (
    <>
      <Marquee />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-purple via-brand-pink to-brand-yellow pt-24">
        <div className="floating-shapes" />
        <div className="container relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <span className="text-white font-bold text-lg">🏆 #1 in {d.city} & Umgebung</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              {d.hero.headlinePrefix}{' '}
              <span className="text-brand-yellow">{d.hero.cityHighlight}</span> {d.hero.headlineSuffix}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto">
              {d.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="#kontakt"
                className="text-lg px-8 py-4 bg-white text-purple-700 hover:bg-brand-yellow hover:text-gray-900 transition-all duration-300 rounded-full font-bold shadow-xl"
              >
                🎉 Jetzt in {d.city} buchen!
              </a>
              <a
                href="#preise"
                className="text-lg px-8 py-4 bg-brand-yellow text-gray-900 hover:bg-white hover:text-purple-700 transition-all duration-300 rounded-full font-bold shadow-xl"
              >
                💰 Preise ansehen
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">{d.city} & alle Stadtteile</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">Bällebad optional</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">Anhänger gratis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section id={`${d.slug}-info`} className="scroll-mt-24 py-14 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            {d.intro.title}
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {d.intro.paragraph}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-brand-pink/10 to-brand-purple/10 rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-brand-pink rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🏙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{d.city} Stadtteile</h3>
                <ul className="space-y-2 text-gray-700">
                  {d.districts.map((dist) => (
                    <li key={dist}>✅ {dist}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-orange/10 rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🗺️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{d.city} Umgebung</h3>
                <ul className="space-y-2 text-gray-700">
                  {d.surrounding.map((s) => (
                    <li key={s}>✅ {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-brand-mint/10 to-brand-blue/10 rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-brand-mint rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">⭐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Ihre Vorteile</h3>
                <ul className="space-y-2 text-gray-700">
                  {d.benefits.map((b) => (
                    <li key={b}>✅ {b}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 rounded-3xl p-8 border-l-8 border-brand-purple">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl">📍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{d.pickupNote.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{d.pickupNote.paragraph}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WARUM SECTION (only if useCases or testimonials exist) */}
      {(d.useCases.length > 0 || d.testimonials.length > 0) && (
        <section id={`warum-${d.slug}`} className="scroll-mt-24 py-14 diagonal-bg">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
              Warum {d.citizenName} unsere Hüpfburg lieben
            </h2>
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid ${d.useCases.length > 0 && d.testimonials.length > 0 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-3xl mx-auto'} gap-12 items-center`}
              >
                {d.useCases.length > 0 && (
                  <div>
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">
                        Perfekt für {d.citizenName} Feste! 🎉
                      </h3>
                      <div className="space-y-6">
                        {d.useCases.map((uc, i) => (
                          <div key={uc.title} className="flex items-start gap-4">
                            <div
                              className={`w-12 h-12 ${USECASE_BG[i % USECASE_BG.length]} rounded-full flex items-center justify-center flex-shrink-0`}
                            >
                              <span className="text-xl">{uc.icon}</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-800 mb-1">{uc.title}</h4>
                              <p className="text-gray-600">{uc.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {d.testimonials.length > 0 && (
                  <div>
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">
                        Das sagen {d.citizenName} Kunden 💬
                      </h3>
                      <div className="space-y-6">
                        {d.testimonials.map((t, i) => (
                          <div
                            key={t.author}
                            className={`${TESTIMONIAL_BG[i % TESTIMONIAL_BG.length]} rounded-2xl p-6`}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                            </div>
                            <p className="text-gray-700 italic mb-2">&ldquo;{t.quote}&rdquo;</p>
                            <p className="text-sm text-gray-500 font-semibold">- {t.author}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PREISE SECTION */}
      <section id="preise" className="scroll-mt-24 py-14 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Unsere Pakete für {d.city}
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-2xl text-gray-700 leading-relaxed">
                Faire Preise für{' '}
                <span className="font-bold text-purple-700">{d.city} und Umgebung</span> 💰
              </p>
            </div>
            <div className={`grid lg:grid-cols-${Math.min(d.packages.length, 3)} gap-8 mb-12`}>
              {d.packages.map((pkg) => (
                <div key={pkg.name} className="transform hover:scale-105 transition-all duration-300 relative">
                  {pkg.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-brand-yellow px-4 py-2 rounded-full shadow-lg">
                        <span className="font-bold text-gray-900 text-sm whitespace-nowrap">⭐ AM BELIEBTESTEN ⭐</span>
                      </div>
                    </div>
                  )}
                  <div
                    className={`relative rounded-3xl border-2 border-brand-pink/20 p-8 shadow-brand bg-gradient-to-br from-white to-brand-pink/5 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${pkg.popular ? 'ring-4 ring-brand-purple ring-opacity-50' : ''}`}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {pkg.emoji} {pkg.name}
                      </h3>
                      <p className="text-4xl font-black bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                        {pkg.price}
                      </p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <CheckCircle />
                          <span className="text-gray-700 font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#kontakt"
                      className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold text-center block hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      🚀 Jetzt anfragen
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-brand-yellow/10 to-brand-orange/10 rounded-3xl p-8 text-center border-2 border-brand-yellow/30">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{d.specialOffer.title}</h3>
              <p className="text-lg text-gray-700">{d.specialOffer.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT SECTION */}
      <section id="kontakt" className="scroll-mt-24 py-14 diagonal-bg">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Jetzt Hüpfburg in {d.city} buchen!
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Bereit für unvergesslichen Hüpfspaß in {d.city}? Kontaktiere uns für deine{' '}
                <span className="font-bold text-purple-700">unverbindliche Anfrage</span>!
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-16 h-16 bg-brand-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📍</span>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Abholung {d.city}</h4>
                  <p className="text-gray-600">
                    {d.pickupLocation}
                    <br />
                    Schnell & unkompliziert
                  </p>
                </div>
                <a
                  href="tel:+436609395049"
                  className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📞</span>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Telefon</h4>
                  <p className="text-gray-800 font-semibold">+43 660 9395049</p>
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all block"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <WhatsAppIcon />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">WhatsApp</h4>
                  <p className="text-gray-600">Schnelle Antwort</p>
                </a>
                <a
                  href="mailto:office@diehupfarei.at"
                  className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-brand-mint rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✉️</span>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">E-Mail</h4>
                  <p className="text-gray-600">office@diehupfarei.at</p>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ SECTION (only if FAQ items exist) */}
      {d.faq.length > 0 && (
        <section id={`faq-${d.slug}`} className="scroll-mt-24 py-14 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
              Häufige Fragen - Hüpfburg {d.city}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {d.faq.map((item, i) => (
                  <div key={item.question} className={`${FAQ_BG[i % FAQ_BG.length]} rounded-2xl p-6 shadow-lg`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">❓ {item.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-200 bg-bg-light">
        <div className="container">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Hüpfburg mieten in {d.city} - Die Hupfarei
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Dein zuverlässiger Partner für Hüpfburg Verleih in {d.city}, {d.districts[0]?.replace(`${d.city} `, '')},{' '}
            {d.districts[1]?.replace(`${d.city} `, '')} und ganz Oberösterreich
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-lg mb-2 text-purple-700">{d.city} Stadtteile</h4>
              <p className="text-sm text-gray-600">
                {d.districts.map((x) => x.replace(`${d.city} `, '')).join(' • ')}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-purple-700">{d.city} Umgebung</h4>
              <p className="text-sm text-gray-600">{d.surrounding.join(' • ')}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-purple-700">Kontakt</h4>
              <p className="text-sm text-gray-600">
                📞 <a href="tel:+436609395049" className="hover:underline">+43 660 9395049</a>
                <br />
                📧{' '}
                <a href="mailto:office@diehupfarei.at" className="hover:underline">
                  office@diehupfarei.at
                </a>
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
            © {new Date().getFullYear()} Die Hupfarei. Alle Rechte vorbehalten. ·{' '}
            <a href="/" className="text-purple-700 hover:underline font-medium">
              Zur Hauptseite →
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
