import Image from 'next/image'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Section from '@/components/section'
import { PriceCard } from '@/components/price-card'
import ContactForm from '@/components/contact-form'
import Marquee from '@/components/marquee'
import { AB_PREISE, preisLabel } from '@/lib/pricing'

const CITY_CARDS = [
  { slug: 'huepfburg-mieten-linz', name: 'Linz', subtitle: '& Umgebung', icon: '🏙️', desc: 'Hüpfburg mieten in Linz, Urfahr, Ebelsberg, Leonding und ganz Linz-Umgebung', gradient: 'from-brand-purple/10 to-brand-pink/10', iconBg: 'bg-brand-purple', linkColor: 'text-purple-700', rotate: 'hover:-rotate-1' },
  { slug: 'huepfburg-mieten-wels', name: 'Wels', subtitle: '& Wels-Land', icon: '🏙️', desc: 'Hüpfburg mieten in Wels, Marchtrenk, Gunskirchen und ganz Wels-Land', gradient: 'from-brand-blue/10 to-brand-mint/10', iconBg: 'bg-brand-blue', linkColor: 'text-blue-600', rotate: 'hover:rotate-1' },
  { slug: 'huepfburg-mieten-steyr', name: 'Steyr', subtitle: '& Ennstal', icon: '🏙️', desc: 'Hüpfburg mieten in Steyr, Garsten, Sierning und dem Ennstal', gradient: 'from-brand-orange/10 to-brand-yellow/10', iconBg: 'bg-brand-orange', linkColor: 'text-orange-700', rotate: 'hover:-rotate-1' },
  { slug: 'huepfburg-mieten-gmunden', name: 'Gmunden', subtitle: '& Salzkammergut', icon: '🏞️', desc: 'Hüpfburg mieten in Gmunden, am Traunsee und im Salzkammergut', gradient: 'from-brand-mint/10 to-brand-green/10', iconBg: 'bg-brand-mint', linkColor: 'text-teal-600', rotate: 'hover:rotate-1' },
  { slug: 'huepfburg-mieten-voecklabruck', name: 'Vöcklabruck', subtitle: '& Attersee', icon: '🏙️', desc: 'Hüpfburg mieten in Vöcklabruck, Regau und der Attersee-Region', gradient: 'from-brand-pink/10 to-brand-purple/10', iconBg: 'bg-brand-pink', linkColor: 'text-pink-700', rotate: 'hover:-rotate-1' },
  { slug: 'huepfburg-mieten-braunau', name: 'Braunau', subtitle: '& Innviertel', icon: '🏙️', desc: 'Hüpfburg mieten in Braunau am Inn, Mattighofen und dem Innviertel', gradient: 'from-brand-green/10 to-brand-blue/10', iconBg: 'bg-brand-green', linkColor: 'text-green-700', rotate: 'hover:rotate-1' },
]

const TOPIC_CARDS = [
  { slug: 'baellebad-mieten-oberoesterreich', name: 'Bällebad mieten', icon: '🎨', desc: '1.200 bunte Bälle für maximalen Spaß!', gradient: 'from-brand-yellow/10 to-brand-orange/10' },
  { slug: 'kinderfest-mieten-oberoesterreich', name: 'Kinderfest', icon: '🎪', desc: 'Komplettausstattung für Ihr Kinderfest', gradient: 'from-brand-orange/10 to-brand-pink/10' },
  { slug: 'geburtstag-huepfburg-oberoesterreich', name: 'Kindergeburtstag', icon: '🎂', desc: 'Unvergessliche Geburtstagsfeiern!', gradient: 'from-brand-pink/10 to-brand-purple/10' },
  { slug: 'huepfburg-pfarrfest-zeltfest-oberoesterreich', name: 'Pfarrfest & Zeltfest', icon: '⛪', desc: 'Das Kinderprogramm für Vereinsfeste', gradient: 'from-brand-mint/10 to-brand-yellow/10' },
  { slug: 'firmenfest-kinderprogramm-oberoesterreich', name: 'Firmenfest & Familientag', icon: '🏢', desc: 'Kinderprogramm auf Rechnung', gradient: 'from-blue-50 to-brand-mint/10' },
  { slug: 'huepfburg-indoor-winter-oberoesterreich', name: 'Indoor & Winter', icon: '❄️', desc: 'Turnsaal, Pfarrsaal oder Halle – ganzjährig', gradient: 'from-sky-50 to-brand-purple/10' },
]

const PREMIUM_CARDS = [
  { slug: 'clown-mieten-oberoesterreich', name: 'Clown mieten', icon: '🎭', desc: 'Professionelle Clown-Shows für Kindergeburtstage!', gradient: 'from-brand-purple/10 to-brand-pink/10' },
  { slug: 'riesenseifenblasen-workshop-oberoesterreich', name: 'Riesenseifenblasen-Workshop', icon: '🫧', desc: 'Magischer Workshop – Kinder machen selbst mit!', gradient: 'from-teal-50 to-blue-50' },
]

export default function Page() {
  return (
    <>
      <Marquee />

      <Navbar />
      
      <Hero />

      {/* Auf einen Blick – Direktantwort für Suchmaschinen und KI-Systeme */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-purple/5 via-white to-brand-pink/5 rounded-3xl p-8 md:p-10 shadow-lg border border-brand-purple/10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Die Hupfarei auf einen Blick
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Wir vermieten in ganz Oberösterreich eine <span className="font-semibold text-purple-700">Hüpfburg mit Rutsche
              und integriertem Bällebad</span> – dazu Popcorn- und Zuckerwattemaschine sowie einen Clown mit
              Riesenseifenblasen-Workshop. Du holst alles bei uns in <span className="font-semibold">Oftering</span> oder{' '}
              <span className="font-semibold">Linz/Ebelsberg</span> ab, der Anhänger ist im Mietpreis inklusive.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '💰', label: 'Preise', value: preisLabel(AB_PREISE.basis), sub: 'pro Miettag' },
                { icon: '🚚', label: 'Anhänger', value: 'Inklusive', sub: 'zur Selbstabholung' },
                { icon: '⚡', label: 'Aufbau', value: 'ca. 10 Min.', sub: 'ohne Vorkenntnisse' },
                { icon: '🛡️', label: 'Sicherheit', value: 'EN 14960', sub: 'geprüft & gereinigt' },
              ].map((f) => (
                <div key={f.label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl mb-1">{f.icon}</div>
                  <div className="text-xs uppercase tracking-wide text-gray-400 font-semibold">{f.label}</div>
                  <div className="text-lg font-bold text-gray-800 leading-tight">{f.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{f.sub}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-7">
              <a href="/huepfburg-preise/" className="inline-block bg-brand-purple text-white font-bold px-7 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                💰 Alle Preise &amp; Pakete ansehen
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Section id="ueber-uns" title="Was macht uns besonders?" className="diagonal-bg pt-20 relative">
        {/* Subtile Hintergrund-Animation */}
        <div className="floating-shapes"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hauptfeature mit schräger Anordnung */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-pink/20 rounded-full animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{background: 'var(--gradient-1)'}}>
                    <span className="text-4xl">🎈</span>
                  </div>
                  <h3 className="text-3xl font-black text-gray-800 mb-4">1.200 bunte Bälle!</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Unser integriertes Bällebad ist das <span className="font-bold text-brand-pink">absolute Highlight</span> für alle Kinder! 
                    Tauche ein in ein Meer aus Farben und Spaß.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{background: 'var(--gradient-2)'}}>
                  <span className="text-2xl">🎪</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Hüpfen & Rutschen</h4>
                  <p className="text-gray-600">Stundenlanger Bewegungsspaß für aktive Kinder</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{background: 'var(--gradient-3)'}}>
                  <span className="text-2xl">🍿</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Leckere Extras</h4>
                  <p className="text-gray-600">Popcorn & Zuckerwatte für das perfekte Fest</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{background: 'var(--gradient-4)'}}>
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Top Qualität</h4>
                  <p className="text-gray-600">Nach <span className="font-semibold">EN 14960</span> geprüft, vor jeder Vermietung gereinigt und kontrolliert</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Weitere Features in verspieltem Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">Selbst abholen</h4>
                </div>
                <p className="text-gray-600 text-lg">
                  Anhänger inklusive – einfach abholen und nach dem Fest wieder zurückbringen. 
                  <span className="font-semibold text-brand-blue">Ganz ohne Liefergebühr!</span>
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">Ganz OÖ</h4>
                </div>
                <p className="text-gray-600 text-lg">
                  Verfügbar in <span className="font-semibold text-brand-orange">ganz Oberösterreich</span> – 
                  schnell und unkompliziert für Ihr Kinderfest!
                </p>
              </div>
            </div>
          </div>
          
          {/* Wichtiger Hinweis mit schräger Form */}
          <div className="relative">
            <div 
              className="bg-brand-yellow/20 p-8 rounded-3xl border-l-8 border-brand-yellow shadow-lg transform -skew-y-1"
              style={{background: 'linear-gradient(135deg, rgba(255, 217, 61, 0.2), rgba(251, 146, 60, 0.2))'}}
            >
              <div className="transform skew-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-3xl">💰</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Bällebad optional!</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Buche unser integriertes Bällebad mit 1.200 bunten Bällen als Zusatzoption dazu!{' '}
                      <span className="font-bold text-purple-700">Saubere, geprüfte Bälle für maximalen Spaß!</span> 🎉
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="preise" title="Unsere Pakete" className="diagonal-bg relative">
        {/* Verspielte Hintergrundformen */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-mint/10 rounded-full transform -rotate-12 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-24 bg-brand-pink/10 rounded-full transform rotate-12 animate-pulse"></div>
        </div>
        
        {/* Subtile schwebende Formen */}
        <div className="floating-shapes"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg">
              <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                Wähle das <span className="font-bold text-purple-700">perfekte Paket</span> für dein Kinderfest! 
                <span className="text-2xl">🎉</span>
              </p>
            </div>
          </div>
        
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
              <PriceCard 
                title="🎈 Hüpfburg Basis" 
                price={preisLabel(AB_PREISE.basis)} 
                features={[
                  'Hüpfburg mit Rutsche',
                  'Integriertes Bällebad',
                  '1.200 farbenfrohe Bälle',
                  'Anhänger im Mietpreis inkl.',
                  'Abholung in Oftering oder Linz/Ebelsberg'
                ]} 
              />
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300 hover:rotate-1 relative">
              {/* Beliebtheits-Badge */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-brand-yellow px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-gray-900 text-sm whitespace-nowrap">⭐ AM BELIEBTESTEN ⭐</span>
                </div>
              </div>
              <PriceCard 
                title="🎪 Hüpfburg + Extras" 
                price={preisLabel(AB_PREISE.extras)} 
                features={[
                  'Hüpfburg mit Rutsche',
                  'Integriertes Bällebad',
                  '1.200 farbenfrohe Bälle',
                  'Popcorn-Maschine',
                  'Zuckerwatte-Maschine'
                ]}
                popular={true}
              />
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
              <PriceCard
                title="🎭 Clown & Riesenseifenblasen"
                price={preisLabel(AB_PREISE.clown)}
                features={[
                  'Professioneller Clown',
                  'Riesenseifenblasen-Workshop',
                  'Kinder machen selbst mit',
                  'Unvergessliche Show',
                  'Perfekt kombinierbar mit Hüpfburg'
                ]}
              />
            </div>
          </div>
          
          {/* Preis-Info mit schräger Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg flex-shrink-0" style={{background: 'var(--gradient-1)'}}>
                  <span className="text-3xl">💝</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">Faire Preise für jeden!</h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-2">
                    <span className="font-bold text-brand-pink">Startpreise pro Miettag</span> – der genaue Preis hängt von Mietdauer,
                    Termin und Extras ab. Du bekommst meist innerhalb weniger Stunden ein fixes Angebot.
                    {' '}<a href="/huepfburg-preise/" className="underline font-semibold text-brand-purple hover:text-brand-pink">Alle Preise ansehen →</a>
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <span className="font-bold text-brand-mint">Anhänger inklusive</span> – du brauchst nur ein Auto mit Anhängerkupplung! 🚗
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="regionen" title="Hüpfburg mieten in Ihrer Region" className="bg-white relative overflow-hidden">
        <div className="floating-shapes"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              Wir sind <span className="font-bold text-purple-700">in ganz Oberösterreich</span> für Sie da! Wählen Sie Ihre Stadt für spezifische Informationen:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {CITY_CARDS.map((c) => (
              <a
                key={c.slug}
                href={`/${c.slug}/`}
                className={`group bg-gradient-to-br ${c.gradient} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${c.rotate}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 ${c.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{c.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{c.name}</h3>
                    <p className="text-sm text-gray-600">{c.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{c.desc}</p>
                <div className={`mt-4 ${c.linkColor} font-semibold group-hover:translate-x-2 transition-transform inline-block`}>Mehr erfahren →</div>
              </a>
            ))}
          </div>

          <div className="border-t-2 border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Oder stöbern Sie nach Thema:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {TOPIC_CARDS.map((t) => (
                <a
                  key={t.slug}
                  href={`/${t.slug}/`}
                  className={`group bg-gradient-to-br ${t.gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{t.icon}</span>
                    <h4 className="text-xl font-bold text-gray-800">{t.name}</h4>
                  </div>
                  <p className="text-gray-600">{t.desc}</p>
                </a>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center mt-8">
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">✨ Premium-Optionen:</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {PREMIUM_CARDS.map((t) => (
                <a
                  key={t.slug}
                  href={`/${t.slug}/`}
                  className={`group bg-gradient-to-br ${t.gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{t.icon}</span>
                    <h4 className="text-xl font-bold text-gray-800">{t.name}</h4>
                  </div>
                  <p className="text-gray-600">{t.desc}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 rounded-3xl p-8 border-l-8 border-brand-purple">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-3xl">🗺️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Ganz Oberösterreich abgedeckt!</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Egal wo Sie in <span className="font-bold text-purple-700">Oberösterreich</span> wohnen – wir bringen den Hüpfspaß zu Ihnen! Von Linz über Wels bis ins Salzkammergut und Innviertel. Klicken Sie auf Ihre Region für detaillierte Informationen! 🎈
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="team" title="Unser Team" className="bg-white relative overflow-hidden">
        {/* Subtile Hintergrund-Animation */}
        <div className="floating-shapes"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lernt die Menschen hinter Die Hupfarei kennen – wir sorgen für euren perfekten Kindertag! 🎪
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Mitglied 1 - Bela */}
            <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative mb-6">
                <Image 
                  src="/belaela4-ab94-4351-949e-f75145b98791.png" 
                  alt="Bela - Die Hupfarei Team" 
                  width={128} 
                  height={128}
                  className="w-32 h-32 object-contain rounded-full shadow-lg mx-auto bg-white"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-mint rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">⭐</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Bela</h4>
                <p className="text-gray-600 leading-relaxed">
                  🗂️ Bela ist unser Organisationswunder – ohne sie wären wir in einer Excel-Zelle verloren.
                </p>
              </div>
            </div>
            
            {/* Team Mitglied 2 - Gerald */}
            <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
              <div className="relative mb-6">
                <Image 
                  src="/c8a8a818-c34f-4bff-8240-bebddfecea65.png" 
                  alt="Gerald - Die Hupfarei Team" 
                  width={128} 
                  height={128}
                  className="w-32 h-32 object-contain rounded-full shadow-lg mx-auto bg-white"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">🎪</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Gerald</h4>
                <p className="text-gray-600 leading-relaxed">
                  ⚡ Chief of Operations Gerald – halb Mensch, halb Superheld, halb Kaffeemaschine. (Ja, das sind drei Hälften, aber so arbeitet er auch.)
                </p>
              </div>
            </div>
            
            {/* Team Mitglied 3 - Roland */}
            <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative mb-6">
                <Image 
                  src="/Screenshot 2025-08-30 at 12.27.04.png" 
                  alt="Roland - Die Hupfarei Team" 
                  width={128} 
                  height={128}
                  className="w-32 h-32 object-contain rounded-full shadow-lg mx-auto bg-white"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">🚀</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Roland</h4>
                <p className="text-gray-600 leading-relaxed">
                  📢 Roland, das Sprachrohr der Hupferei – wenn er redet, hören sogar die Ventilatoren der Hüpfburgen gespannt zu.
                </p>
              </div>
            </div>
            
            {/* Team Mitglied 4 - Andi */}
            <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative mb-6">
                <Image 
                  src="/62fcaeab-fc37-4d21-9a6a-0c87707ee4fd.png" 
                  alt="Andi - Die Hupfarei Team" 
                  width={128} 
                  height={128}
                  className="w-32 h-32 object-contain rounded-full shadow-lg mx-auto bg-white"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">🌟</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Andi</h4>
                <p className="text-gray-600 leading-relaxed">
                  🚀 Wenn's unmöglich scheint, kommt Andi – und macht es möglich. Manche sagen, er könnte sogar eine Hüpfburg auf dem Mond aufstellen (er plant es nur gerade noch nicht offiziell).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="so-einfach" title="So einfach geht's!" className="wave-top bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        {/* Schräge Hintergrundformen */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 bg-brand-pink/10 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-60 h-32 bg-brand-yellow/10 rounded-full transform -rotate-12"></div>
        </div>
        
        {/* Sanfte Partikel */}
        <div className="subtle-particles">
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-8">
              <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                Bei DieHupfarei läuft alles <span className="font-bold text-purple-700">unkompliziert</span>! 
                Einfach abholen, aufbauen, Spaß haben! 🎉
              </p>
            </div>
          </div>
          
          {/* Schritt-für-Schritt mit verbindenden Linien */}
          <div className="relative">
            {/* Verbindungslinien */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-brand-pink via-brand-yellow to-brand-mint rounded-full transform -translate-y-1/2 opacity-30"></div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Schritt 1 */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-lg">1</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{background: 'var(--gradient-1)'}}>
                      <span className="text-4xl">🚚</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Abholen</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Du holst die Hüpfburg auf dem Anhänger direkt bei uns in 
                      <span className="font-semibold text-brand-pink"> Oftering oder Linz/Ebelsberg</span> ab.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Schritt 2 */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-lg">2</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{background: 'var(--gradient-4)'}}>
                      <span className="text-4xl">⚡</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Aufbauen</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Zuhause einfach ausrollen, aufblasen – in ca. 
                      <span className="font-semibold text-orange-700"> 10 Minuten</span> bereit!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Schritt 3 */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-lg">3</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{background: 'var(--gradient-3)'}}>
                      <span className="text-4xl">🔄</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Zurückbringen</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Nach dem Event zusammenpacken und wieder am 
                      <span className="font-semibold text-brand-mint"> Anhänger</span> befestigen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wichtiger Hinweis mit organischer Form */}
          <div className="mt-20 relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg flex-shrink-0" style={{background: 'var(--gradient-2)'}}>
                  <span className="text-3xl">🚗</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">Nur Anhängerkupplung nötig!</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Der Anhänger ist im Mietpreis enthalten – du brauchst nur ein Auto mit Anhängerkupplung. 
                    <span className="font-bold text-brand-blue">Ganz ohne zusätzliche Kosten!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="fotogalerie" title="Unsere Hüpfburg in Aktion" className="bg-white relative overflow-hidden">
        {/* Subtile Hintergrund-Animation */}
        <div className="floating-shapes"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 rounded-3xl px-8 py-6 border border-brand-pink/20">
              <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                Sieh dir an, wie viel <span className="font-bold text-brand-pink">Spaß</span> unsere Hüpfburg macht! 
                <span className="text-2xl">📸</span>
              </p>
            </div>
          </div>
          
          {/* Foto-Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Foto 1 - WhatsApp Bild */}
            <div className="bg-white rounded-3xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
              <div className="relative">
                <Image 
                  src="/WhatsApp Image 2025-05-15 at 14.07.18.webp" 
                  alt="Hüpfburg in Aktion - Kinder haben Spaß" 
                  width={280} 
                  height={256}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">📷</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-700 font-medium">Aufbau-Impressionen!</p>
              </div>
            </div>
            
            {/* Foto 2 - Miriam Foto */}
            <div className="bg-white rounded-3xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300 hover:rotate-1">
              <div className="relative">
                <Image 
                  src="/Foto Miriam.webp" 
                  alt="Miriam mit der Hüpfburg - Familienspaß" 
                  width={280} 
                  height={256}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">⭐</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-700 font-medium">Familien-Spaß!</p>
              </div>
            </div>
          </div>
          
          {/* Call-to-Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 rounded-3xl p-8 border border-brand-pink/20">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📸 Deine Fotos hier!</h3>
              <p className="text-lg text-gray-600 mb-6">
                Schick uns gerne Fotos von deinem Event – wir freuen uns über jede Aufnahme! 
                <span className="font-bold text-purple-700">Vielleicht ist deins das nächste in unserer Galerie!</span>
              </p>
                            <a 
                href="mailto:diehupfarei@gmail.com?subject=Fotos von meinem Event&body=Hallo Die Hupfarei Team! 📸%0D%0A%0D%0AIch möchte gerne Fotos von meinem Event senden.%0D%0A%0D%0AIch füge die Fotos direkt in dieser E-Mail als Anhang hinzu.%0D%0A%0D%0A---%0D%0ADiese Nachricht wurde über den 'Fotos senden' Button gesendet."
                className="inline-block px-8 py-4 bg-brand-purple text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:bg-brand-purple/90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                📮 Fotos senden
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="kontakt" title="Kontakt" className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Bereit für unvergesslichen Hüpfspaß? Kontaktiere uns für eine unverbindliche Beratung und schnelle Verfügbarkeitsprüfung!
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-brand-pink/5 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-brand-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Adresse</h4>
                <p className="text-gray-600">Aichgraben 8<br/>4064 Kirchstetten</p>
              </div>

              <a href="tel:+436609395049" className="bg-brand-yellow/5 rounded-2xl p-6 text-center hover:bg-brand-yellow/10 transition-colors">
                <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📞</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Telefon</h4>
                <p className="text-gray-600">+43 660 9395049</p>
              </a>

              <a
                href="https://wa.me/436609395049?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20eurer%20H%C3%BCpfburg."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/10 rounded-2xl p-6 text-center hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">WhatsApp</h4>
                <p className="text-gray-600">Schnelle Antwort</p>
              </a>

              <a href="mailto:office@diehupfarei.at" className="bg-brand-mint/5 rounded-2xl p-6 text-center hover:bg-brand-mint/10 transition-colors">
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
      </Section>
      
      <Section id="impressum" title="Impressum" className="bg-gray-50 relative overflow-hidden">
        {/* Subtile Hintergrund-Animation */}
        <div className="floating-shapes"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Hauptkarte mit schräger Anordnung */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg flex-shrink-0" style={{background: 'var(--gradient-1)'}}>
                <span className="text-3xl">🏢</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">DieHupfarei</h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p className="font-semibold text-purple-700">Gerald Streitferdt</p>
                  <p>📍 Aichgraben 8, 4064 Kirchstetten</p>
                  <p>📞 Tel: <a href="tel:+436609395049" className="text-purple-700 hover:underline font-medium">+43 660 9395049</a></p>
                  <p>📧 E-Mail: <a href="mailto:office@diehupfarei.at" className="text-purple-700 hover:underline font-medium">office@diehupfarei.at</a></p>
                  <p>🌐 Website: <a href="https://diehupfarei.at" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline font-medium">diehupfarei.at</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Unternehmensangaben */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:rotate-1 mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0" style={{background: 'var(--gradient-2)'}}>
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">Unternehmensangaben</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-brand-pink/5 rounded-2xl p-4">
                  <span className="font-bold text-brand-pink">Unternehmensform:</span>
                  <p className="text-gray-700 mt-1">Kleinunternehmer gemäß § 6 Abs 1 Z 27 UStG – keine Umsatzsteuer ausgewiesen</p>
                </div>
                <div className="bg-brand-yellow/5 rounded-2xl p-4">
                  <span className="font-bold text-orange-700">Gewerbeberechtigung:</span>
                  <p className="text-gray-700 mt-1">Vermietung von Spielgeräte (Hüpfburgen)</p>
                </div>
                <div className="bg-brand-mint/5 rounded-2xl p-4">
                  <span className="font-bold text-brand-mint">Bezirkshauptmannschaft:</span>
                  <p className="text-gray-700 mt-1">Linz-Land</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-blue/5 rounded-2xl p-4">
                  <span className="font-bold text-brand-blue">Mitglied der Wirtschaftskammer:</span>
                  <p className="text-gray-700 mt-1">WKO Oberösterreich</p>
                </div>
                <div className="bg-brand-purple/5 rounded-2xl p-4">
                  <span className="font-bold text-purple-700">Aufsichtsbehörde:</span>
                  <p className="text-gray-700 mt-1">Magistrat der Stadt Linz</p>
                </div>
                <div className="bg-brand-orange/5 rounded-2xl p-4">
                  <span className="font-bold text-brand-orange">Berufsbezeichnung:</span>
                  <p className="text-gray-700 mt-1">Vermietung von Hüpfburgen (Österreich)</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-gray-50 rounded-2xl p-4">
              <span className="font-bold text-gray-800">Gewerberechtliche Vorschriften:</span>
              <p className="text-gray-700 mt-1">
                <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline font-medium">www.ris.bka.gv.at</a>
              </p>
            </div>
          </div>

          {/* Haftungsausschluss */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0" style={{background: 'var(--gradient-3)'}}>
                <span className="text-3xl">⚖️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Haftungsausschluss</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                  Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <footer className="py-12 border-t border-gray-200 bg-bg-light">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div>
              <h4 className="font-bold text-lg mb-2 text-purple-700">Die Hupfarei</h4>
              <p className="text-sm text-gray-600">
                Hüpfburgverleih mit Herz aus Oberösterreich. Spaß für kleine Gäste, Entspannung für Eltern!
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Die Hupfarei. Alle Rechte vorbehalten.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Folge uns auf:</p>
              <div className="flex justify-center gap-3">
                <a href="https://www.facebook.com/diehupfarei" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-brand-pink text-xl transition-colors">📘</a>
                <a href="https://www.instagram.com/diehupfarei" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-brand-pink text-xl transition-colors">📷</a>
              </div>
            </div>
            
            <div className="text-right">
              <a 
                className="text-sm text-purple-700 hover:underline font-medium" 
                href="https://diehupfarei.at" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Zur Hauptseite →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}