//app/components/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="mr-2">🗺️</span>
            Your Journey
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-700">Works</span>
          </h2>
          
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-medium">
            From discovery call to delivery here's the complete journey.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-white to-lightGray p-8 rounded-2xl border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="md:w-1/3">
              <div className="relative">
                <img 
                  src="/images/checklist.jpg" 
                  alt="Discovery Call" 
                  className="rounded-2xl shadow-xl w-full border-4 border-gold-500/30"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-2xl font-bold text-navy-900 shadow-lg">
                  01
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-navy-900 mb-4">
                Discovery Call <span className="text-gold-600">(30 min)</span>
              </h3>
              <p className="text-lg text-navy-700 mb-4 leading-relaxed">
                We discuss your research background, career goals, and biggest challenges. 
                I'll explain the intensive and we'll determine if it's a good fit.
              </p>
              <div className="flex items-center gap-2 text-navy-700 bg-white/80 px-4 py-2 rounded-lg border border-gold-500/20 inline-block">
                <span className="text-gold-600 font-bold">⏱️</span>
                <span className="font-semibold">Timeline:</span> Book today, call within 1 week
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-gradient-to-br from-white to-lightGray p-8 rounded-2xl border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="md:w-1/3">
              <div className="relative">
                <img 
                  src="/images/strategy-plan.jpg" 
                  alt="Deep Research" 
                  className="rounded-2xl shadow-xl w-full border-4 border-gold-500/30"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-2xl font-bold text-navy-900 shadow-lg">
                  02
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-navy-900 mb-4">
                Intake & Kickoff <span className="text-gold-600">(60 min)</span>
              </h3>
              <p className="text-lg text-navy-700 mb-4 leading-relaxed">
                You fill out a detailed questionnaire, then we have a kickoff call. 
                I ask clarifying questions and get everything I need to build your plan.
              </p>
              <div className="flex items-center gap-2 text-navy-700 bg-white/80 px-4 py-2 rounded-lg border border-gold-500/20 inline-block">
                <span className="text-gold-600 font-bold">⏱️</span>
                <span className="font-semibold">Timeline:</span> Within 3 days of enrollment
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-white to-lightGray p-8 rounded-2xl border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="md:w-1/3">
              <div className="relative">
                <img 
                  src="/images/desk-setup.jpg" 
                  alt="Research Phase" 
                  className="rounded-2xl shadow-xl w-full border-4 border-gold-500/30"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-2xl font-bold text-navy-900 shadow-lg">
                  03
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-navy-900 mb-4">
                Deep Research <span className="text-gold-600">(10 days)</span>
              </h3>
              <p className="text-lg text-navy-700 mb-4 leading-relaxed">
                I go into research mode. You won't hear much from me during this phase
                I'm analyzing papers, generating hypotheses, and building your strategic plan.
              </p>
              <div className="flex items-center gap-2 text-navy-700 bg-white/80 px-4 py-2 rounded-lg border border-gold-500/20 inline-block">
                <span className="text-gold-600 font-bold">⏱️</span>
                <span className="font-semibold">Timeline:</span> 10-14 days after kickoff
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-gradient-to-br from-white to-lightGray p-8 rounded-2xl border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="md:w-1/3">
              <div className="relative">
                <img 
                  src="/images/graduation-blend.jpg" 
                  alt="Strategy Delivery" 
                  className="rounded-2xl shadow-xl w-full border-4 border-gold-500/30"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-2xl font-bold text-navy-900 shadow-lg">
                  04
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-navy-900 mb-4">
                Strategy Delivery <span className="text-gold-600">(90 min)</span>
              </h3>
              <p className="text-lg text-navy-700 mb-4 leading-relaxed">
                I walk you through your complete strategic plan. We discuss each module, 
                answer questions, and refine next steps. You leave with clarity and confidence.
              </p>
              <div className="flex items-center gap-2 text-navy-700 bg-white/80 px-4 py-2 rounded-lg border border-gold-500/20 inline-block">
                <span className="text-gold-600 font-bold">⏱️</span>
                <span className="font-semibold">Timeline:</span> 2 weeks after kickoff
              </div>
            </div>
          </div>
        </div>

        {/* Total Timeline */}
        <div className="mt-16 bg-gradient-to-br from-gold-500 to-gold-600 p-10 rounded-2xl max-w-3xl mx-auto text-center shadow-2xl border-2 border-gold-400">
          <h3 className="text-3xl font-bold text-navy-900 mb-4">
            Total Timeline: <span className="text-white">3 Weeks</span>
          </h3>
          <p className="text-lg text-navy-900 font-semibold">
            From discovery call to complete strategic plan in your hands.
          </p>
          
          {/* Timeline Visual */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="bg-navy-900 text-white px-4 py-2 rounded-lg font-bold text-sm">
              Day 1
            </div>
            <div className="flex-1 h-1 bg-navy-900/30"></div>
            <div className="bg-navy-900 text-white px-4 py-2 rounded-lg font-bold text-sm">
              Day 21
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
