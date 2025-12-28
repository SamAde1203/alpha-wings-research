//app/components/Problem.tsx
export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-white to-lightGray">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="mr-2">😟</span>
            The Hidden Problem
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Does This <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-700">Sound Familiar?</span>
          </h2>
          
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-medium">
            You love your research and ministry work but something feels off.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="flex items-start gap-4">
              <span className="text-5xl">😕</span>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Scattered & Reactive</h3>
                <p className="text-navy-700 leading-relaxed">
                  You respond to calls for papers without a coherent research program. 
                  Each project feels disconnected from the last.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="flex items-start gap-4">
              <span className="text-5xl">⏰</span>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Not Enough Time</h3>
                <p className="text-navy-700 leading-relaxed">
                  Teaching, ministry, and admin work consume your calendar. 
                  Research happens in stolen moments if at all.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="flex items-start gap-4">
              <span className="text-5xl">🤔</span>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Uncertain Trajectory</h3>
                <p className="text-navy-700 leading-relaxed">
                  You have no idea if you're "on track" for tenure, promotion, or influence. 
                  You're just hoping it works out.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10">
            <div className="flex items-start gap-4">
              <span className="text-5xl">⚔️</span>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Torn Between Worlds</h3>
                <p className="text-navy-700 leading-relaxed">
                  Your institution wants "rigorous scholarship," but your heart cries for 
                  work that serves the Church. How do you honor both?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mountain Image */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <img 
              src="/images/mountain-peak.jpg" 
              alt="The Academic Journey" 
              className="mx-auto rounded-2xl shadow-2xl max-w-2xl w-full border-4 border-gold-500/30"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none"></div>
          </div>
          <p className="text-navy-700 italic mt-6 text-lg font-medium">
            The peak seems far away but with the right strategy, it's within reach.
          </p>
        </div>

        {/* The Cost - FIXED: FORCED DARK BACKGROUND */}
        <div className="bg-navy-900 text-white p-10 md:p-12 rounded-2xl max-w-4xl mx-auto border-2 border-gold-500/30 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Here's What This <span className="text-gold-400">Really Costs You:</span>
          </h3>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4 bg-navy-800 p-5 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <span className="text-2xl flex-shrink-0 text-red-400 font-bold">✗</span>
              <p className="text-lg text-white leading-relaxed font-medium">
                Years of brilliant research that <strong className="text-white font-bold">never reaches the people who need it</strong>
              </p>
            </div>
            
            <div className="flex items-start gap-4 bg-navy-800 p-5 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <span className="text-2xl flex-shrink-0 text-red-400 font-bold">✗</span>
              <p className="text-lg text-white leading-relaxed font-medium">
                <strong className="text-white font-bold">Burnout and resentment</strong> from working harder without clarity on what actually matters
              </p>
            </div>
            
            <div className="flex items-start gap-4 bg-navy-800 p-5 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <span className="text-2xl flex-shrink-0 text-red-400 font-bold">✗</span>
              <p className="text-lg text-white leading-relaxed font-medium">
                Constant worry about whether you're <strong className="text-white font-bold">stewarding your gifts well</strong> or wasting your calling
              </p>
            </div>
            
            <div className="flex items-start gap-4 bg-navy-800 p-5 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <span className="text-2xl flex-shrink-0 text-red-400 font-bold">✗</span>
              <p className="text-lg text-white leading-relaxed font-medium">
                Five years from now, <strong className="text-white font-bold">still feeling scattered, uncertain, and stuck</strong> in the same place
              </p>
            </div>
          </div>

          {/* Emotional Hook */}
          <div className="mt-10 pt-8 border-t-2 border-gold-500/20">
            <p className="text-center text-xl text-gold-400 italic font-medium">
              "What if there was a better way?"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
