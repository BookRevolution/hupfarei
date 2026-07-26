import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface PriceCardProps {
  title: string
  price: string
  features: string[]
  popular?: boolean
}

export function PriceCard({ title, price, features, popular = false }: PriceCardProps) {
  return (
    <div className={`relative rounded-3xl border-2 border-brand-pink/20 p-8 shadow-brand bg-gradient-to-br from-white to-brand-pink/5 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${popular ? 'ring-4 ring-brand-purple ring-opacity-50' : ''}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-4xl font-black bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">{price}</p>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircleIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700 font-medium">{feature}</span>
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
  )
}
