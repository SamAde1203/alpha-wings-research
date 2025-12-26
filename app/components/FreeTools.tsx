export default function FreeTools() {
  return (
    <section className="py-20 bg-gradient-to-br from-gold/10 to-navy/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">
            🎁 Try Our Free Research Roadmap Generator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get an instant preview of our methodology with our AI-powered tool
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Features */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                What You'll Get (Free!)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <strong>Personalized Research Themes</strong>
                    <p className="text-gray-600">3-5 strategic areas aligned with your faith</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <strong>10-Year Career Roadmap</strong>
                    <p className="text-gray-600">Clear milestones from now to legacy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <strong>Immediate Action Steps</strong>
                    <p className="text-gray-600">What to do next, starting today</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <div>
                    <strong>Faith-Integrated Strategy</strong>
                    <p className="text-gray-600">Biblical principles guide every recommendation</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: CTA */}
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">
                Powered by AI
              </h3>
              <p className="mb-6 text-gray-200">
                Uses the same Alpha Wings Research methodology our $1,500 clients receive
              </p>
              <a 
                href="https://chatgpt.com/g/g-694edf7c148c8191bdb8cd918525ee4e-christian-research-roadmap-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Generate Your Roadmap Free →
              </a>
              <p className="text-sm text-gray-300 mt-4">
                ⏱️ Takes 5 minutes • No signup required
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            💬 "This gave me more clarity in 10 minutes than I've had in 2 years!" - Early User
          </p>
        </div>
      </div>
    </section>
  )
}
