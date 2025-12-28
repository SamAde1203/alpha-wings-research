export default function FreeTools() {
  return (
    <section className="py-20 bg-gradient-to-br from-gold-50/50 to-navy-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="mr-2">🎁</span>
            Free Tools for Christian Scholars
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy-900">
            Try Our Free Research Roadmap Generator
          </h2>
          <p className="text-xl text-navy-800 max-w-3xl mx-auto font-medium">
            Experience the Alpha Wings methodology firsthand - no commitment required
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gold-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Features */}
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                What You'll Get (Completely Free!)
              </h3>
              
              <ul className="space-y-6">
                {[
                  {
                    title: "Personalized Research Themes",
                    description: "3-5 strategic areas aligned with your faith and expertise",
                    icon: "🎯"
                  },
                  {
                    title: "10-Year Academic Roadmap",
                    description: "Clear milestones from today to academic legacy",
                    icon: "📈"
                  },
                  {
                    title: "Immediate Action Steps",
                    description: "What to do next week, month, and quarter",
                    icon: "✅"
                  },
                  {
                    title: "Faith-Integrated Strategy",
                    description: "Biblical principles guiding every recommendation",
                    icon: "✝️"
                  },
                  {
                    title: "Publication & Grant Timeline",
                    description: "When to publish, apply for grants, seek promotions",
                    icon: "📅"
                  }
                ].map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center text-gold-700 text-xl mr-4 group-hover:bg-gold-200 transition-all">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-navy-700">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              
              {/* Bonus Features */}
              <div className="mt-8 p-4 bg-gradient-to-r from-gold-50 to-transparent rounded-xl border border-gold-200">
                <p className="text-navy-900 font-bold text-sm">
                  🎁 <strong>Bonus:</strong> Includes citation strategy, collaboration opportunities, and ministry impact planning
                </p>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-10 text-white shadow-xl border-2 border-gold-500/30">
              <div className="text-center">
                {/* AI Icon */}
                <div className="text-7xl mb-6 animate-pulse">🤖</div>
                
                <h3 className="text-3xl font-bold mb-4">
                  Powered by AI Intelligence
                </h3>
                
                <p className="text-lg mb-8 text-white/90 leading-relaxed">
                  Uses the <strong className="text-gold-300">exact same methodology</strong> our $1,500 clients receive, adapted for instant AI generation
                </p>
                
                {/* Value Comparison */}
                <div className="bg-navy-800/50 p-4 rounded-xl mb-8 border border-white/10">
                  <div className="flex items-center justify-center gap-6 mb-2">
                    <div className="text-center">
                      <div className="text-3xl text-gold-300">$0</div>
                      <div className="text-sm text-white/70">Free Tool</div>
                    </div>
                    <div className="text-white/50 text-2xl">vs</div>
                    <div className="text-center">
                      <div className="text-3xl text-white">$1,500</div>
                      <div className="text-sm text-white/70">Full Strategy</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 text-center">
                    Same methodology, instant preview
                  </p>
                </div>
                
                {/* CTA Button */}
                <a 
                  href="https://chatgpt.com/g/g-694edf7c148c8191bdb8cd918525ee4e-christian-research-roadmap-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-gold-500/30 transition-all transform hover:scale-[1.02] shadow-lg text-center"
                >
                  🚀 Generate Your Free Roadmap Now
                </a>
                
                {/* Features */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm text-white/90">No signup</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm text-white/90">5-minute setup</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm text-white/90">Instant results</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm text-white/90">No credit card</span>
                  </div>
                </div>
                
                <p className="text-sm text-white/70 mt-6">
                  🔒 Your information is never stored or shared
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "This gave me more clarity in 10 minutes than I've had in 2 years!",
                author: "Seminary Professor",
                icon: "🎓"
              },
              {
                quote: "The faith integration aspect is brilliant. Finally, a tool that gets it.",
                author: "Theology PhD Candidate",
                icon: "✝️"
              },
              {
                quote: "Used it to plan my next 3 publications. Already making progress!",
                author: "Early Career Scholar",
                icon: "📚"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gold-100">
                <div className="text-3xl mb-3">{testimonial.icon}</div>
                <p className="text-navy-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-navy-900 font-bold text-sm">{testimonial.author}</p>
              </div>
            ))}
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-12">
            <p className="text-navy-800 text-lg mb-6">
              Ready to transform your academic trajectory?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://chatgpt.com/g/g-694edf7c148c8191bdb8cd918525ee4e-christian-research-roadmap-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 shadow-lg"
              >
                <span className="mr-3">🤖</span>
                Try the Free AI Generator
                <span className="ml-3">→</span>
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy-900 hover:text-white transition-all"
              >
                <span className="mr-3">🎓</span>
                See Full Strategy Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}