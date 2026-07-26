import Image from 'next/image'

export default function Hero() {
  return (
    <section id="startseite" className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Schräger Hintergrund-Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50"></div>
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: 'var(--gradient-hero)',
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 90%)'
          }}
        ></div>
        
        {/* Subtile schwebende Formen */}
        <div className="floating-shapes"></div>
        
        {/* Sanfte Partikel */}
        <div className="subtle-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        {/* Verspielte schwebende Elemente */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full animate-float opacity-20" style={{background: 'var(--gradient-1)'}}></div>
          <div className="absolute top-32 right-[15%] w-12 h-12 rounded-full animate-bounce-soft opacity-25" style={{background: 'var(--gradient-2)'}}></div>
          <div className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full animate-float opacity-15" style={{background: 'var(--gradient-3)'}}></div>
          <div className="absolute top-1/2 right-[8%] w-14 h-14 rounded-full animate-bounce-soft opacity-30" style={{background: 'var(--gradient-4)'}}></div>
          
          {/* Organische Formen */}
          <div className="absolute top-40 left-1/4 w-24 h-16 bg-brand-yellow/20 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="absolute bottom-40 right-1/3 w-32 h-20 bg-brand-pink/20 rounded-full transform -rotate-12 animate-pulse"></div>
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Linke Spalte: Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="block text-white drop-shadow-2xl" style={{textShadow: '3px 3px 0px rgba(168, 85, 247, 0.8), 6px 6px 0px rgba(0, 0, 0, 0.3)'}}>
                    Hüpf-Spaß
                  </span>
                  <span className="block text-white font-black drop-shadow-2xl" style={{textShadow: '4px 4px 0px rgba(255, 107, 157, 0.9), 8px 8px 0px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 107, 157, 0.6)'}}>
                    für Kinder!
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed drop-shadow-sm">
                  🎈 <strong>Hüpfburg mit Bällebad mieten in Oberösterreich</strong> – 
                  <span className="font-bold text-brand-yellow">einfach & stressfrei!</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#preise" 
                  className="group px-8 py-4 bg-white text-purple-700 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-2">
                    🎪 Preise ansehen
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#kontakt"
                  className="group px-8 py-4 bg-brand-yellow text-gray-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-2">
                    📞 Jetzt anfragen
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://wa.me/436609395049?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20eurer%20H%C3%BCpfburg."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp-Chat starten"
                  className="group px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
            
            {/* Rechte Spalte: Hüpfburg Bild */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg animate-bounce-soft">
                  <span className="text-3xl">🎈</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-2xl">⭐</span>
                </div>
                
                <Image 
                  src="/huepfburg.webp" 
                  alt="Hüpfburg mit Bällebad mieten Oberösterreich - Die Hupfarei Kinderfest" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-contain rounded-2xl shadow-lg bg-white/50"
                />
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-2xl">🌟</span>
                    <span className="font-bold text-purple-700">Mit 1.200 bunten Bällen!</span>
                    <span className="text-2xl">🌟</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      {/* Wellenförmiger Übergang */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  )
}