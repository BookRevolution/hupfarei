export default function ClownSeifenblasenExtras({ description }: { description: string }) {
  return (
    <div className="mt-8 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-8 shadow-xl border-2 border-brand-purple/30">
      <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        🎭 Clown & Riesenseifenblasen-Workshop!
      </h4>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        {description}
      </p>
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <a
          href="/clown-mieten-oberoesterreich/"
          className="bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
        >
          <span className="text-3xl">🎭</span>
          <div>
            <p className="font-bold text-gray-800">Clown mieten</p>
            <p className="text-sm text-gray-600">Mehr Infos →</p>
          </div>
        </a>
        <a
          href="/riesenseifenblasen-workshop-oberoesterreich/"
          className="bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
        >
          <span className="text-3xl">🫧</span>
          <div>
            <p className="font-bold text-gray-800">Riesenseifenblasen-Workshop</p>
            <p className="text-sm text-gray-600">Mehr Infos →</p>
          </div>
        </a>
      </div>
    </div>
  )
}
