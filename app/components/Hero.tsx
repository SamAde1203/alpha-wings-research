// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/academic-library.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Darker gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/85 to-navy-900/98 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 text-center text-white py-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🎓</div>
            <img
              src="/logo.png"
              alt="Alpha Wings Research"
              className="h-32 w-auto drop-shadow-2xl filter brightness-110"
            />
            <p className="text-gold-400 text-sm font-bold mt-2 tracking-wider bg-navy-800/50 px-4 py-1 rounded-full">
              STRATEGIC RESEARCH PLANNING FOR CHRISTIAN SCHOLARS
            </p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-white/95 to-white/90 text-transparent bg-clip-text drop-shadow-2xl">
            From Scattered Research
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 drop-shadow-2xl">
            to Strategic Legacy.
          </span>
        </h1>

        {/* Subheadline */}
        <div className="bg-navy-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-8 border border-white/10">
          <p className="text-xl md:text-2xl mb-4 leading-relaxed font-medium text-white">
            Build a 10-year research strategy that maximizes your impact, secures funding, 
            and establishes your scholarly authority.
          </p>
          <p className="text-lg md:text-xl text-white/90 font-normal italic border-t border-white/10 pt-4">
            "A plan for your publications, a path for your career, and a purpose for your research."
          </p>
        </div>

        {/* ===== UPDATED: 3-COLUMN CTA BUTTONS ===== */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-12 max-w-5xl mx-auto">
          
          {/* COLUMN 1: FREE AI TOOL */}
          <a
            href="https://chatgpt.com/g/g-694edf7c148c8191bdb8cd918525ee4e-christian-research-roadmap-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-1/3 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl border-2 border-white/20 hover:border-gold-400 flex items-center gap-3 group"
          >
            <span className="text-2xl">🤖</span>
            <div className="text-left">
              <div className="text-sm font-normal">Start Free</div>
              <div>AI Roadmap Generator</div>
            </div>
            <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* COLUMN 2: $497 RESCUE PACKAGES - NEW! */}
          <a
            href="/rescue"
            className="w-full lg:w-1/3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-2xl hover:shadow-3xl hover:shadow-gold-500/40 border-2 border-gold-300 flex items-center gap-3 group relative"
          >
            {/* "HOT" BADGE */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              🔥 HOT
            </div>
            <span className="text-2xl">⚡</span>
            <div className="text-left">
              <div className="text-sm font-normal">Emergency Rescue</div>
              <div>Solve Problem in 48 Hours</div>
            </div>
            <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* COLUMN 3: $1,500 INTENSIVE */}
          <a
            href="#pricing"
            className="w-full lg:w-1/3 bg-gradient-to-r from-navy-700 to-navy-800 hover:from-navy-600 hover:to-navy-700 text-white px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-xl border-2 border-gold-500/50 hover:border-gold-400 flex items-center gap-3 group"
          >
            <span className="text-2xl">👑</span>
            <div className="text-left">
              <div className="text-sm font-normal">Full Strategy</div>
              <div>10-Year Research Plan</div>
            </div>
          </a>
        </div>

        {/* ===== UPDATED: DUAL OFFER URGENCY SECTION ===== */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            {/* $497 RESCUE URGENCY */}
            <div className="bg-gradient-to-r from-navy-800/80 to-navy-900/80 backdrop-blur-lg p-5 rounded-xl border-2 border-red-500/50 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-xl shadow-lg">
                  🔥
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Emergency Rescue Packages</p>
                  <p className="text-sm text-white/80">$497 • 48-hour turnaround</p>
                </div>
              </div>
              <p className="text-sm text-white/90">
                <strong className="text-red-300">Only 3 spots left this week</strong> for immediate problem-solving.
              </p>
            </div>

            {/* $1,500 INTENSIVE URGENCY */}
            <div className="bg-gradient-to-r from-navy-800/80 to-navy-900/80 backdrop-blur-lg p-5 rounded-xl border-2 border-gold-500/50 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-xl shadow-lg animate-pulse">
                  ⚡
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Founding Scholar Intensive</p>
                  <p className="text-sm text-white/80">$1,500 • Complete 10-year plan</p>
                </div>
              </div>
              <p className="text-sm text-white/90">
                <strong className="text-gold-300">Only 5 spots remaining</strong> at 57% off ($3,500 value).
              </p>
            </div>
          </div>

          {/* Rescue Package Notice */}
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm p-4 rounded-xl border border-red-500/30 mb-6">
            <p className="text-white text-sm text-center">
              <strong className="text-red-300">Need faster help?</strong> Try our <a href="/rescue" className="text-gold-300 underline font-bold hover:text-gold-200">Emergency Rescue Packages</a> for urgent problem-solving in 48 hours.
            </p>
          </div>

          {/* Academic Credibility Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              "10-Year Strategic Planning",
              "Faith-Integrated Methodology", 
              "Grant & Publication Strategy",
              "Personalized Roadmap",
              "48-Hour Emergency Support"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-5 h-5 bg-gold-500/30 rounded-full flex items-center justify-center text-xs">✓</div>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
		
        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce-slow">
          <a href="#problem" className="inline-block text-gold-400 hover:text-gold-300 transition-colors group">
            <div className="w-12 h-12 mx-auto rounded-full border-2 border-gold-500/60 flex items-center justify-center group-hover:border-gold-400 transition-colors bg-white/5 backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <span className="text-xs font-medium mt-3 block tracking-wider text-white/80">EXPLORE THE STRATEGY</span>
          </a>
        </div>
      </div>
    </section>
  );
}