//app/components/Solution.tsx
export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-lightGray to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="mr-2">✨</span>
            The Alpha Wings Solution
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-navy-900">Introducing: The </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-700">Research Strategy Intensive</span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto font-medium text-navy-800">
            A complete strategic plan for your next 3-10 years delivered in 2 weeks.
          </p>
        </div>

        {/* What You Get - FORCE DARK TEXT HERE */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 !text-navy-900">
            What You Get:
          </h3>

          <div className="space-y-6">
            {/* Module 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10 flex gap-6 items-start group">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition-all">
                <img src="/images/magnifying-glass.jpg" alt="Research" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-2 !text-navy-900">
                  <span className="text-gold-600">1.</span> Field Intelligence Report
                </h4>
                <p className="leading-relaxed !text-navy-800">
                  I analyze <strong className="!text-navy-900">100+ recent papers</strong> in your field to map trends, gaps, and opportunities. 
                  You'll know what's hot, what's missing, and where you can make an impact.
                </p>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10 flex gap-6 items-start group">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition-all">
                <img src="/images/lightbulb.jpg" alt="Ideas" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-2 !text-navy-900">
                  <span className="text-gold-600">2.</span> Strategic Hypothesis Portfolio
                </h4>
                <p className="leading-relaxed !text-navy-800">
                  I generate <strong className="!text-navy-900">30+ research ideas</strong> tailored to your field and calling, then score them on 
                  novelty, impact, and feasibility. You get the <strong className="!text-navy-900">top 10 fully explained</strong>.
                </p>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10 flex gap-6 items-start group">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition-all">
                <img src="/images/checklist.jpg" alt="Portfolio" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-2 !text-navy-900">
                  <span className="text-gold-600">3.</span> 3-Year Research Portfolio
                </h4>
                <p className="leading-relaxed !text-navy-800">
                  We select <strong className="!text-navy-900">5-7 projects</strong> and sequence them strategically. Not random papers, 
                  but a <strong className="!text-navy-900">coherent program</strong> where each piece builds on the last.
                </p>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10 flex gap-6 items-start group">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition-all">
                <img src="/images/timeline.jpg" alt="Career Path" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-2 !text-navy-900">
                  <span className="text-gold-600">4.</span> 10-Year Career Trajectory
                </h4>
                <p className="leading-relaxed !text-navy-800">
                  We map <strong className="!text-navy-900">year-by-year milestones</strong> for publications, grants, promotions, and influence. 
                  You'll know exactly what "on track" looks like.
                </p>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10 flex gap-6 items-start group">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition-all">
                <img src="/images/strategy-plan.jpg" alt="Next Steps" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-2 !text-navy-900">
                  <span className="text-gold-600">5.</span> Strategic Next Steps
                </h4>
                <p className="leading-relaxed !text-navy-800">
                  Collaborators to approach, grants to apply for, and a <strong className="!text-navy-900">90-day action plan</strong>. 
                  You'll know exactly what to do Monday morning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery - This section should have WHITE text on DARK background */}
        <div className="bg-navy-900 p-10 md:p-12 rounded-2xl max-w-4xl mx-auto border-2 border-gold-500/40 shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Deliverable:
            </h3>
            <p className="text-xl mb-6 font-medium leading-relaxed text-white">
              A <strong className="text-gold-400">40-60 page strategic plan</strong> that becomes your roadmap for the next decade.
            </p>
            <p className="text-lg font-medium text-white/90">
              Plus: A <strong className="text-gold-400">90-minute strategy call</strong> where I walk you through everything and answer your questions.
            </p>
          </div>

          {/* Visual Elements */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800 p-6 rounded-xl border border-gold-500/20">
              <div className="text-4xl mb-3 text-center text-white">📄</div>
              <h4 className="font-bold text-center mb-2 text-white">40-60 Page Plan</h4>
              <p className="text-sm text-center text-white/80">Your complete research roadmap</p>
            </div>
            
            <div className="bg-navy-800 p-6 rounded-xl border border-gold-500/20">
              <div className="text-4xl mb-3 text-center text-white">🎯</div>
              <h4 className="font-bold text-center mb-2 text-white">90-Minute Call</h4>
              <p className="text-sm text-center text-white/80">Personal strategy session with me</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}