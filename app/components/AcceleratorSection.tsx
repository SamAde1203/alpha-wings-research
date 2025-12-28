// components/AcceleratorSection.jsx
'use client';

export default function AcceleratorSection() {
  // Simple tracking function (you can enhance this with actual analytics later)
  const trackAcceleratorClick = (tier, location) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'accelerator_click', {
        tier: tier,
        location: location
      });
    }
  };

  return (
    <section id="accelerator" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gold-500 text-navy-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span className="mr-2">⚡</span>
            NEW: Research Accelerator
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Research <span className="text-gold-500">Seen, Cited & Celebrated</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-medium">
            3 ways to accelerate your academic visibility and impact
          </p>
        </div>

        {/* Three-Column Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          
          {/* FREE TIER */}
          <div className="pricing-free bg-white/10 backdrop-blur rounded-2xl p-8 border-2 border-white/20 hover:border-gold-500 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">FREE</h3>
              <div className="text-4xl font-bold text-gold-500 mb-6">$0</div>
              
              <ul className="text-left space-y-3 mb-8 text-white/90 min-h-[240px]">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium">5-Minute Academic Visibility Score</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium">Citation gap analysis vs. peers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium">3 immediate visibility boosters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium">Personalized 7-day momentum plan</span>
                </li>
              </ul>
              
              <a 
                href="https://chatgpt.com/g/g-6950345e6ba48191b46c5efc536fbec1-alpha-wings-research-accelerator"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAcceleratorClick('free-audit', 'accelerator-section')}
                className="block w-full bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white font-bold py-4 px-6 rounded-xl transition-all border border-white/30 hover:border-white/50"
              >
                Get Your Free Score →
              </a>
              
              <p className="text-xs text-white/60 mt-4 font-medium">
                No credit card required
              </p>
            </div>
          </div>

          {/* MID TIER - $297 ACCELERATOR */}
          <div className="pricing-accelerator bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 border-4 border-gold-400 relative transform md:scale-105 shadow-2xl shadow-gold-500/30 z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-navy-900 text-gold-500 px-6 py-2 rounded-full text-sm font-bold border border-gold-500 whitespace-nowrap">
              ⭐ MOST POPULAR
            </div>
            
            <div className="text-center mt-2">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Research Accelerator</h3>
              
              <div className="mb-4">
                <div className="text-4xl font-bold text-navy-900">$297</div>
                <div className="text-sm text-navy-800 font-semibold">One-time</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-navy-900 min-h-[240px]">
                <li className="flex items-start">
                  <span className="font-bold mr-2 mt-1 text-navy-900">✓</span>
                  <span className="font-semibold">Complete Deep-Dive Audit</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 mt-1 text-navy-900">✓</span>
                  <span className="font-semibold">24-Hour Action Plan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 mt-1 text-navy-900">✓</span>
                  <span className="font-semibold">Custom Google Scholar Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 mt-1 text-navy-900">✓</span>
                  <span className="font-semibold">Research → Media Pitch Templates</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 mt-1 text-navy-900">✓</span>
                  <span className="font-semibold">Academic Social Media Blueprint</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 mt-1 text-navy-900">✓</span>
                  <span className="font-semibold">Citation Acceleration System</span>
                </li>
              </ul>
              
              <a 
                href="https://buy.stripe.com/4gM14mfQv3h429qdiu9EI09"
                onClick={() => trackAcceleratorClick('accelerator-package', 'accelerator-section')}
                className="block w-full bg-navy-900 hover:bg-navy-800 text-gold-500 font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-navy-900/30"
              >
                Launch Your Research Visibility →
              </a>
              
              <p className="text-xs text-navy-800 mt-4 font-semibold">
                🔒 Secure payment via Stripe
              </p>
            </div>
          </div>

          {/* PREMIUM TIER - $1,500 INTENSIVE */}
          <div className="pricing-premium bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-2xl p-8 border-2 border-gold-500/50 hover:border-gold-400 transition-all hover:shadow-xl hover:shadow-gold-500/20">
            <div className="text-center">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-2xl font-bold text-white mb-3">Legacy Intensive</h3>
              
              <div className="mb-4">
                <div className="text-4xl font-bold text-gold-500">$1,500</div>
                <div className="text-sm text-white/60 line-through font-medium">Regular: $3,500</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-white/90 min-h-[240px]">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="text-white font-bold">Everything in Accelerator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium"><strong className="text-white font-bold">PLUS:</strong> 10-Day Deep Research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium">Custom Academic Brand Positioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium">Personalized 3-Year Roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium">Direct Media Introductions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1 font-bold">✓</span>
                  <span className="font-medium">Tenure Dossier Enhancement</span>
                </li>
              </ul>
              
              <a 
                href="https://buy.stripe.com/aFaaEWfQvbNAbK04LY9EI08"
                onClick={() => trackAcceleratorClick('full-intensive', 'accelerator-section')}
                className="block w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                🔒 Secure Founding Scholar Spot
              </a>
              
              <p className="text-xs text-gold-400 mt-4 font-bold">
                ⚡ Only 5 founding scholar spots left
              </p>
			  {/* ADD THIS: */}
			 <p className="text-xs text-white/80 mt-2 font-medium">
			   🔒 100% satisfaction guarantee
			   </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur rounded-2xl p-8 max-w-3xl mx-auto border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Not Sure Which Option Is Right?</h3>
          <p className="text-white/90 mb-6 font-medium text-lg">
            Start with the FREE audit. Get your Academic Acceleration Score and personalized 
            recommendations in 5 minutes. Then choose your path forward.
          </p>
          <a 
            href="https://chatgpt.com/g/g-6950345e6ba48191b46c5efc536fbec1-alpha-wings-research-accelerator"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAcceleratorClick('free-audit', 'bottom-cta')}
            className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Start Free Audit Now →
          </a>
        </div>

      </div>
    </section>
  );
}
