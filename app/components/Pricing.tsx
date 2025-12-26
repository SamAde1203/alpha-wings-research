export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Investment & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Limited founding scholar pricing - Lock in your rate today
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Founding Scholar Pricing */}
          <div className="relative border-4 border-gold rounded-2xl p-8 bg-gradient-to-br from-navy/5 to-gold/5">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gold text-navy px-6 py-2 rounded-full font-bold text-sm">
                ⚡ ONLY 5 SPOTS LEFT
              </span>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-navy mb-2">
                Founding Scholar Rate
              </h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-gold">$1,500</span>
                <span className="text-gray-500 line-through ml-2">$3,500</span>
              </div>
              <p className="text-gray-600 mb-6">
                Save $2,000 as a founding scholar
              </p>

              {/* What's Included */}
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>60-min Discovery & Strategy Call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>10-Day Deep Research Phase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>90-min Strategy Delivery Session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Personalized 10-Year Research Roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Strategic Hypothesis Portfolio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Actionable Next Steps Document</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Founding Scholar Badge & Recognition</span>
                </li>
              </ul>

              {/* CTA Button with Stripe Link */}
              <a 
                href="https://buy.stripe.com/aFaaEWfQvbNAbK04LY9EI08"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Secure Your Founding Scholar Rate
              </a>

              <p className="text-sm text-gray-500 mt-4">
                🔒 Secure payment via Stripe • Invoice sent automatically
              </p>
            </div>
          </div>

          {/* Regular Pricing */}
          <div className="border-2 border-gray-200 rounded-2xl p-8 bg-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-navy mb-2">
                Regular Rate
              </h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-navy">$3,500</span>
              </div>
              <p className="text-gray-600 mb-6">
                Full price (after 5 founding scholars)
              </p>

              {/* What's Included */}
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-navy mr-2">✓</span>
                  <span>60-min Discovery & Strategy Call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">✓</span>
                  <span>10-Day Deep Research Phase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">✓</span>
                  <span>90-min Strategy Delivery Session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">✓</span>
                  <span>Personalized 10-Year Research Roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">✓</span>
                  <span>Strategic Hypothesis Portfolio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">✓</span>
                  <span>Actionable Next Steps Document</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button 
                disabled
                className="w-full bg-gray-300 text-gray-500 px-8 py-4 rounded-lg font-bold text-lg cursor-not-allowed"
              >
                Available After Founding Scholars
              </button>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            💳 Accepted Payment Methods: Credit Card, Debit Card, Bank Transfer
          </p>
          <p className="text-sm text-gray-500">
            Questions about payment? <a href="mailto:contact@alphawingsresearch.com" className="text-gold hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  )
}
