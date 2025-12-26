
//app/components/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery call to delivery here's the complete journey.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src="/images/checklist.jpg" 
                alt="Discovery Call" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-gold">01</span>
                <h3 className="text-3xl font-bold text-navy">Discovery Call (30 min)</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                We discuss your research background, career goals, and biggest challenges. 
                I'll explain the intensive and we'll determine if it's a good fit.
              </p>
              <p className="text-gray-600 italic">
                <strong>Timeline:</strong> Book today, call within 1 week
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src="/images/strategy-plan.jpg" 
                alt="Deep Research" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-gold">02</span>
                <h3 className="text-3xl font-bold text-navy">Intake & Kickoff (60 min)</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                You fill out a detailed questionnaire, then we have a kickoff call. 
                I ask clarifying questions and get everything I need to build your plan.
              </p>
              <p className="text-gray-600 italic">
                <strong>Timeline:</strong> Within 3 days of enrollment
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src="/images/desk-setup.jpg" 
                alt="Research Phase" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-gold">03</span>
                <h3 className="text-3xl font-bold text-navy">Deep Research (10 days)</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                I go into research mode. You won't hear much from me during this phase—
                I'm analyzing papers, generating hypotheses, and building your strategic plan.
              </p>
              <p className="text-gray-600 italic">
                <strong>Timeline:</strong> 10-14 days after kickoff
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src="/images/graduation-blend.jpg" 
                alt="Strategy Delivery" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-gold">04</span>
                <h3 className="text-3xl font-bold text-navy">Strategy Delivery (90 min)</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                I walk you through your complete strategic plan. We discuss each module, 
                answer questions, and refine next steps. You leave with clarity and confidence.
              </p>
              <p className="text-gray-600 italic">
                <strong>Timeline:</strong> 2 weeks after kickoff
              </p>
            </div>
          </div>
        </div>

        {/* Total Timeline */}
        <div className="mt-16 bg-gold/10 border-2 border-gold p-8 rounded-lg max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">
            Total Timeline: <span className="text-gold">3 Weeks</span>
          </h3>
          <p className="text-lg text-gray-700">
            From discovery call to complete strategic plan in your hands.
          </p>
        </div>
      </div>
    </section>
  )
}