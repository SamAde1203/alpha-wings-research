// app/components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* TWO-COLUMN LAYOUT FOR DUAL OFFERING */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* COLUMN 1: $1,500 INTENSIVE */}
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Full Research Strategy Intensive</h3>
                <p className="text-lg mb-4">Complete 10-year roadmap & comprehensive strategy</p>
                <div className="text-4xl font-bold mb-2">$1,500</div>
                <p className="text-navy-800/80 text-sm">Founding Scholar Rate (Save $2,000)</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span>40-60 Page Strategic Plan</span>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span>10-Year Career Trajectory</span>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span>Complete Research Portfolio</span>
                </div>
              </div>
              
              <a 
                href="https://calendly.com/alpha-wings/discovery-call-research-strategy-intensive"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-navy-900 text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-navy-800 transition-all shadow-lg hover:shadow-xl"
              >
                Book Discovery Call
              </a>
            </div>
            
            {/* COLUMN 2: $497 RESCUE PACKAGES */}
            <div className="bg-white/30 backdrop-blur-sm p-8 rounded-2xl border-4 border-gold-700 shadow-xl">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Emergency Rescue Packages</h3>
                <p className="text-lg mb-4">Solve ONE urgent problem in 48 hours</p>
                <div className="text-4xl font-bold mb-2">$497</div>
                <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                  ⚡ 3 SPOTS LEFT THIS WEEK
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span>2-3 Hour Intensive Session</span>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span>48-Hour Deliverable</span>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span>Immediate Problem Solving</span>
                </div>
              </div>
              
              <a 
                href="/rescue"
                className="block w-full bg-gradient-to-r from-navy-900 to-navy-800 text-white px-6 py-4 rounded-xl font-bold text-center hover:from-navy-800 hover:to-navy-700 transition-all shadow-lg hover:shadow-xl"
              >
                View Rescue Packages
              </a>
            </div>
          </div>
          
          {/* UNIFIED HEADLINE */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-navy-800/90 max-w-3xl mx-auto">
              Choose the path that fits your needs right now
            </p>
          </div>
          
          {/* COMPARISON GUIDANCE */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 mb-10 border-2 border-white/50">
            <h3 className="text-2xl font-bold text-center mb-6">Which Option Is Right For You?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔥</div>
                <h4 className="font-bold text-lg mb-2">Choose $497 Rescue If:</h4>
                <ul className="text-left space-y-2 text-sm">
                  <li>• You have ONE urgent problem to solve NOW</li>
                  <li>• Need results in 48 hours (not 2 weeks)</li>
                  <li>• Want focused, immediate help</li>
                  <li>• Have a deadline approaching</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">👑</div>
                <h4 className="font-bold text-lg mb-2">Choose $1,500 Intensive If:</h4>
                <ul className="text-left space-y-2 text-sm">
                  <li>• You want complete 10-year strategy</li>
                  <li>• Need comprehensive research portfolio</li>
                  <li>• Planning for tenure/promotion</li>
                  <li>• Want full career transformation</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* TRUST ELEMENTS */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-navy-900">
            <div className="flex items-center gap-3 font-medium">
              <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-xl">✓</div>
              <span>Faith-Integrated Approach</span>
            </div>
            <div className="flex items-center gap-3 font-medium">
              <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-xl">✓</div>
              <span>No Obligation Discovery Calls</span>
            </div>
            <div className="flex items-center gap-3 font-medium">
              <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-xl">✓</div>
              <span>Founding Scholar Guarantee</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}