//app/components/Problem.tsx
export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Does This Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You love your research and ministry work but something feels off.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-lightGray p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">😕</span>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">Scattered & Reactive</h3>
                <p className="text-gray-700">
                  You respond to calls for papers without a coherent research program. 
                  Each project feels disconnected from the last.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-lightGray p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⏰</span>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">Not Enough Time</h3>
                <p className="text-gray-700">
                  Teaching, ministry, and admin work consume your calendar. 
                  Research happens in stolen moments if at all.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-lightGray p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🤔</span>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">Uncertain Trajectory</h3>
                <p className="text-gray-700">
                  You have no idea if you're "on track" for tenure, promotion, or influence. 
                  You're just hoping it works out.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-lightGray p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚔️</span>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">Torn Between Worlds</h3>
                <p className="text-gray-700">
                  Your institution wants "rigorous scholarship," but your heart cries for 
                  work that serves the Church. How do you honor both?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mountain Image */}
        <div className="text-center mb-12">
          <img 
            src="/images/mountain-peak.jpg" 
            alt="The Academic Journey" 
            className="mx-auto rounded-lg shadow-xl max-w-2xl w-full"
          />
          <p className="text-gray-600 italic mt-4">
            The peak seems far away but with the right strategy, it's within reach.
          </p>
        </div>

        {/* The Cost */}
        <div className="bg-navy text-white p-12 rounded-lg max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Here's What This Really Costs You:</h3>
          <div className="space-y-4 text-lg">
            <p>❌ You might not get tenure or worse, you'll resent the work it takes.</p>
            <p>❌ You'll burn out trying to do everything without a plan.</p>
            <p>❌ You'll wonder if you're stewarding your gifts well or wasting your calling.</p>
            <p>❌ Five years from now, you'll still feel scattered, uncertain, and stuck.</p>
          </div>
        </div>
      </div>
    </section>
  )
}