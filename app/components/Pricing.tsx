export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-lightGray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="mr-2">🎓</span>
            Founding Scholar Offer
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy-900">
            Invest in Your Academic Legacy
          </h2>
          <p className="text-xl text-navy-800 max-w-2xl mx-auto font-medium">
            Limited to 5 scholars. Secure your strategy before rates increase.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Founding Scholar Pricing - FEATURED */}
          <div className="relative border-4 border-gold-500 rounded-2xl p-8 bg-gradient-to-br from-white to-gold-50 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 group">
            {/* Ribbon Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                <span className="animate-pulse">⚡</span>
                ONLY 3 SPOTS LEFT
              </div>
            </div>

            {/* Popular Tag */}
            <div className="absolute -top-2 -right-2 bg-navy-900 text-white px-4 py-1 rounded-full text-xs font-bold rotate-12">
              MOST POPULAR
            </div>

            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Founding Scholar Legacy Rate
              </h3>
              <p className="text-navy-700 mb-4">Limited time offer for pioneers</p>
              
              <div className="mb-6">
                <div className="flex items-end justify-center gap-2">
                  <span className="text-6xl font-bold text-gold-600">$1,500</span>
                  <span className="text-gray-500 line-through text-2xl mb-2">$3,500</span>
                </div>
                <p className="text-sm text-gold-700 font-bold mt-2">
                  Save $2,000 • 57% OFF
                </p>
              </div>

              {/* Value Proposition */}
              <div className="bg-gold-50 p-4 rounded-xl mb-8 border border-gold-200">
                <p className="text-navy-900 font-bold text-lg">
                  🎯 Complete 10-Year Research Strategy
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  Everything you need to build an influential academic career
                </p>
              </div>

              {/* What's Included - Enhanced */}
              <ul className="text-left space-y-4 mb-10">
                {[
                  { text: "90-min Deep Dive Discovery Call", highlight: true },
                  { text: "Personalized Field Intelligence Report", highlight: true },
                  { text: "30+ Research Hypothesis Portfolio", highlight: true },
                  { text: "3-Year Publication Sequence Strategy", highlight: true },
                  { text: "10-Year Academic Trajectory Map", highlight: true },
                  { text: "Grant & Funding Opportunity Analysis", highlight: true },
                  { text: "Collaboration & Network Strategy", highlight: true },
                  { text: "90-min Strategy Delivery & Q&A Session", highlight: true },
                  { text: "Founding Scholar Recognition & Badge", highlight: true },
                  { text: "Priority Access to Future Programs", highlight: true },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`mr-3 mt-1 flex-shrink-0 ${item.highlight ? 'text-gold-600 text-xl' : 'text-navy-700'}`}>
                      {item.highlight ? '✦' : '✓'}
                    </span>
                    <span className={`${item.highlight ? 'font-bold text-navy-900' : 'text-navy-700'}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Urgency Timer */}
              <div className="bg-navy-900/5 p-4 rounded-xl mb-8 border border-navy-900/10">
                <p className="text-sm font-bold text-navy-900 mb-2">
                  ⏰ Offer expires when 5 spots fill
                </p>
                <div className="flex justify-center gap-3">
                  {['Spots Remaining:', '5', '→', '4', '→', '3'].map((item, index) => (
                    <span key={index} className={`font-bold ${index === 1 || index === 3 || index === 5 ? 'text-gold-600 text-xl' : 'text-navy-700'}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button with Stripe Link */}
              <a 
                href="https://buy.stripe.com/aFaaEWfQvbNAbK04LY9EI08"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-gold-500/30 transition-all transform hover:scale-[1.02] shadow-lg text-center group-hover:from-gold-700 group-hover:to-gold-800"
              >
                🔒 Secure Your Founding Scholar Rate
              </a>

              <div className="mt-4 text-center space-y-2">
                <p className="text-sm text-navy-600">
                  ⚡ Instant access after payment
                </p>
                <p className="text-xs text-gray-500">
                  🔒 Secure payment via Stripe • Invoice sent automatically
                </p>
                <p className="text-xs text-gold-700 font-bold">
                  🎁 Bonus: Founding Scholar Alumni Network Access
                </p>
              </div>
            </div>
          </div>

          {/* Regular Pricing */}
          <div className="border-2 border-gray-300 rounded-2xl p-8 bg-white shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Standard Academic Strategy
              </h3>
              <p className="text-navy-700 mb-4">Comprehensive research planning</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-navy-700">$3,500</span>
                <p className="text-sm text-gray-500 mt-2">Full investment</p>
              </div>

              {/* Value Proposition */}
              <div className="bg-navy-50 p-4 rounded-xl mb-8 border border-navy-200">
                <p className="text-navy-900 font-bold text-lg">
                  📚 Complete Research Roadmap
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  Strategic planning for academic advancement
                </p>
              </div>

              {/* What's Included */}
              <ul className="text-left space-y-4 mb-10">
                {[
                  "60-min Discovery Call",
                  "Field Analysis Report",
                  "Research Hypothesis Portfolio",
                  "3-Year Publication Plan",
                  "Career Trajectory Mapping",
                  "Grant Strategy Overview",
                  "Collaboration Recommendations",
                  "90-min Strategy Session",
                  "Actionable Next Steps",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-navy-600 mr-3 mt-1">✓</span>
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Comparison Note */}
              <div className="bg-gray-50 p-4 rounded-xl mb-8 border border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-navy-900">Note:</span> Founding Scholars save $2,000 and receive exclusive bonuses including network access and priority support.
                </p>
              </div>

              {/* CTA Button - Disabled */}
              <button 
                disabled
                className="w-full bg-gray-200 text-gray-500 px-8 py-5 rounded-xl font-bold text-lg cursor-not-allowed border-2 border-gray-300"
              >
                ⏳ Available After Founding Scholars
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  🔔 Join waitlist for next availability
                </p>
                <a 
                  href="mailto:contact@alphawingsresearch.com?subject=Waitlist for Academic Strategy"
                  className="text-gold-600 hover:text-gold-700 text-sm font-medium mt-2 inline-block"
                >
                  Notify me when available →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee & Payment Info */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Guarantee Card */}
            <div className="bg-white p-6 rounded-xl border-2 border-gold-200 shadow-sm">
              <div className="text-3xl mb-3 text-center">🤝</div>
              <h4 className="font-bold text-navy-900 text-center mb-2">Satisfaction Guarantee</h4>
              <p className="text-sm text-navy-700 text-center">
                If our strategy session doesn't provide clear value, we'll refund your investment.
              </p>
            </div>

            {/* Payment Card */}
            <div className="bg-white p-6 rounded-xl border-2 border-navy-200 shadow-sm">
              <div className="text-3xl mb-3 text-center">💳</div>
              <h4 className="font-bold text-navy-900 text-center mb-2">Flexible Payment</h4>
              <p className="text-sm text-navy-700 text-center">
                Pay in full or request a 2-payment plan. All major cards accepted.
              </p>
            </div>

            {/* Support Card */}
            <div className="bg-white p-6 rounded-xl border-2 border-gold-200 shadow-sm">
              <div className="text-3xl mb-3 text-center">🎯</div>
              <h4 className="font-bold text-navy-900 text-center mb-2">Ongoing Support</h4>
              <p className="text-sm text-navy-700 text-center">
                Founding Scholars get priority email support for 30 days post-strategy.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <p className="text-navy-800 text-lg mb-6 max-w-2xl mx-auto">
              Ready to transform your research trajectory and build a lasting academic legacy?
            </p>
            <a 
              href="https://buy.stripe.com/aFaaEWfQvbNAbK04LY9EI08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-navy-900 to-navy-800 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 shadow-lg"
            >
              <span className="mr-3">🚀</span>
              Secure Your Founding Scholar Spot Now
              <span className="ml-3">→</span>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Questions? <a href="mailto:contact@alphawingsresearch.com" className="text-gold-600 hover:underline font-medium">Email us</a> or schedule a quick call
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}