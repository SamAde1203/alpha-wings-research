
// app/components/Pricing.tsx
export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy/90 text-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investment
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            This is more than a service it's a strategic asset for your entire career.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white text-navy rounded-2xl shadow-2xl overflow-hidden">
            {/* Badge */}
            <div className="bg-gold text-white text-center py-3 font-bold text-lg">
              ⚡ FOUNDING SCHOLAR PRICING - LIMITED TIME
            </div>

            {/* Price */}
            <div className="p-12 text-center">
              <div className="mb-6">
                <span className="text-gray-500 line-through text-3xl">$3,500</span>
              </div>
              <div className="text-6xl font-bold text-navy mb-4">
                $1,500
              </div>
              <p className="text-xl text-gray-600 mb-8">
                One-time payment • Full strategic plan
              </p>

              {/* What's Included */}
              <div className="text-left mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg">Field Intelligence Report (100+ papers analyzed)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg">Strategic Hypothesis Portfolio (30+ ideas, top 10 detailed)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg">3-Year Research Portfolio (5-7 sequenced projects)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg">10-Year Career Trajectory (year-by-year milestones)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg">Strategic Next Steps (90-day action plan)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg">60-minute Kickoff Call</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg">90-minute Strategy Delivery Call</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg">40-60 Page Strategic Plan Document</span>
                </div>
              </div>

              {/* CTA */}
              <a 
                href="https://calendly.com/alpha-wings/discovery-call-research-strategy-intensive"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-xl px-10 py-5 w-full block text-center mb-6"
              >
                Book Free Discovery Call
              </a>

              <p className="text-sm text-gray-500">
                No credit card required • 30-minute exploratory conversation
              </p>
            </div>
          </div>

          {/* Scarcity */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gold font-bold mb-2">
              ⚠️ Only 5 Founding Scholar spots available at this price
            </p>
            <p className="text-white/80">
              After the first 5 clients, the intensive returns to $3,500
            </p>
          </div>
        </div>

        {/* Money-Back Guarantee */}
        <div className="mt-16 max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">💯 100% Satisfaction Guarantee</h3>
          <p className="text-lg">
            If you complete the intensive and genuinely feel it didn't provide value, 
            I'll refund your investment no questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
