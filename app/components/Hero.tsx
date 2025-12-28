// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Background Image - More academic focused */}
      <div
        className="absolute inset-0 opacity-10" // Reduced opacity for better text contrast
        style={{
          backgroundImage: "url('/images/academic-library.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Darker gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/85 to-navy-900/98 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 text-center text-white py-20 px-4 sm:px-6 lg:px-8">
        {/* Logo with academic touch */}
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

        {/* Headline - FIXED CONTRAST ISSUE */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-white/95 to-white/90 text-transparent bg-clip-text drop-shadow-2xl">
            From Scattered Research
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 drop-shadow-2xl">
            to Strategic Legacy.
          </span>
        </h1>

        {/* Alternative: If you prefer a simpler fix, use this instead: */}
        {/* 
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            From Scattered Research
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 drop-shadow-2xl">
            to Strategic Legacy.
          </span>
        </h1>
        */}

        {/* Subheadline with better contrast */}
        <div className="bg-navy-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-8 border border-white/10">
          <p className="text-xl md:text-2xl mb-4 leading-relaxed font-medium text-white">
            Build a 10-year research strategy that maximizes your impact, secures funding, 
            and establishes your scholarly authority.
          </p>
          <p className="text-lg md:text-xl text-white/90 font-normal italic border-t border-white/10 pt-4">
            "A plan for your publications, a path for your career, and a purpose for your research."
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://chatgpt.com/g/g-694edf7c148c8191bdb8cd918525ee4e-christian-research-roadmap-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-gold-500/40 border-2 border-gold-300 flex items-center gap-3 group"
          >
            <span className="text-2xl">🤖</span>
            <div className="text-left">
              <div className="text-sm font-normal">Try Our Free</div>
              <div>AI Research Roadmap Generator</div>
            </div>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="#pricing"
            className="bg-gradient-to-r from-navy-700 to-navy-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-navy-600 hover:to-navy-700 transition-all transform hover:scale-105 shadow-xl border-2 border-gold-500/50 hover:border-gold-400 flex items-center gap-3 group"
          >
            <span className="text-2xl">🎓</span>
            <div className="text-left">
              <div className="text-sm font-normal">Founding Scholar Offer</div>
              <div>Secure Your Strategy (5 Spots Left)</div>
            </div>
          </a>
        </div>

        {/* Trust & Social Proof - with better background */}
        <div className="max-w-4xl mx-auto">
          {/* Urgency Badge */}
          <div className="mb-8 inline-flex items-center gap-3 bg-gradient-to-r from-navy-800/90 to-navy-900/90 backdrop-blur-lg px-6 py-4 rounded-xl border-2 border-gold-500/50 shadow-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-xl shadow-lg animate-pulse">
              ⚡
            </div>
            <div>
              <p className="text-lg font-medium text-white">
                <strong className="text-gold-300 font-bold">Founding Scholar Pricing:</strong>{' '}
                <span className="line-through text-white/60 mr-2">$3,500</span>
                <span className="text-gold-400 font-bold text-xl">$1,500</span>
                <span className="text-sm text-green-400 ml-2">(57% OFF)</span>
              </p>
              <p className="text-sm text-white/80 mt-1">Only 5 spots remaining at this special rate</p>
            </div>
          </div>

          {/* Academic Credibility Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              "10-Year Strategic Planning",
              "Faith-Integrated Methodology", 
              "Grant & Publication Strategy",
              "Personalized Roadmap",
              "Academic Legacy Focus"
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