export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-navy/90">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/academic-research.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark gradient overlay at top for logo visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 text-center text-white py-20">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/logo.png"
            alt="Alpha Wings Research"
            className="h-32 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Stop Drifting.<br />
          <span className="text-gold">Start Soaring.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
          Transform scattered research into a God-honoring 10 year career strategy.
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200">
          Get a personalized research roadmap, strategic hypothesis portfolio, and actionable next steps in just 2 weeks.
        </p>

        {/* CTA Buttons - FIXED: Removed duplicate */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://chatgpt.com/g/g-694edf7c148c8191bdb8cd918525ee4e-christian-research-roadmap-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg border-2 border-gold flex items-center gap-2"
          >
            🎁 Try Free Roadmap Generator
          </a>

          <a
            href="#how-it-works"
            className="bg-transparent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all transform hover:scale-105 shadow-lg border-2 border-white backdrop-blur-sm"
          >
            See How It Works
          </a>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-2xl font-bold text-navy">
            ⚡
          </div>
          <p className="text-sm">
            <strong className="text-gold">Only 5 spots left</strong> at founding scholar pricing ($1,500)
          </p>
        </div>
      </div>
    </section>
  );
}