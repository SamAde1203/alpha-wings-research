
//app/components/Solution.tsx
export default function Solution() {
  return (
    <section className="py-20 bg-lightGray">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Introducing: The Research Strategy Intensive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete strategic plan for your next 3-10 years delivered in 2 weeks.
          </p>
        </div>

        {/* What You Get */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-navy text-center mb-12">
            What You Get:
          </h3>

          <div className="space-y-8">
            {/* Module 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex gap-6 items-start">
              <img src="/images/magnifying-glass.jpg" alt="Research" className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
              <div>
                <h4 className="text-2xl font-bold text-navy mb-3">
                  1. Field Intelligence Report
                </h4>
                <p className="text-gray-700">
                  I analyze <strong>100+ recent papers</strong> in your field to map trends, gaps, and opportunities. 
                  You'll know what's hot, what's missing, and where you can make an impact.
                </p>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex gap-6 items-start">
              <img src="/images/lightbulb.jpg" alt="Ideas" className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
              <div>
                <h4 className="text-2xl font-bold text-navy mb-3">
                  2. Strategic Hypothesis Portfolio
                </h4>
                <p className="text-gray-700">
                  I generate <strong>30+ research ideas</strong> tailored to your field and calling, then score them on 
                  novelty, impact, and feasibility. You get the <strong>top 10 fully explained</strong>.
                </p>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex gap-6 items-start">
              <img src="/images/checklist.jpg" alt="Portfolio" className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
              <div>
                <h4 className="text-2xl font-bold text-navy mb-3">
                  3. 3-Year Research Portfolio
                </h4>
                <p className="text-gray-700">
                  We select <strong>5-7 projects</strong> and sequence them strategically. Not random papers, 
                  but a <strong>coherent program</strong> where each piece builds on the last.
                </p>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex gap-6 items-start">
              <img src="/images/timeline.jpg" alt="Career Path" className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
              <div>
                <h4 className="text-2xl font-bold text-navy mb-3">
                  4. 10-Year Career Trajectory
                </h4>
                <p className="text-gray-700">
                  We map <strong>year-by-year milestones</strong> for publications, grants, promotions, and influence. 
                  You'll know exactly what "on track" looks like.
                </p>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex gap-6 items-start">
              <img src="/images/strategy-plan.jpg" alt="Next Steps" className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
              <div>
                <h4 className="text-2xl font-bold text-navy mb-3">
                  5. Strategic Next Steps
                </h4>
                <p className="text-gray-700">
                  Collaborators to approach, grants to apply for, and a <strong>90-day action plan</strong>. 
                  You'll know exactly what to do Monday morning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className="bg-gradient-to-r from-navy to-navy/90 text-white p-12 rounded-lg max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">The Deliverable:</h3>
          <p className="text-xl mb-6">
            A <strong className="text-gold">40-60 page strategic plan</strong> that becomes your roadmap for the next decade.
          </p>
          <p className="text-lg">
            Plus: A <strong>90-minute strategy call</strong> where I walk you through everything and answer your questions.
          </p>
        </div>
      </div>
    </section>
  )
}
