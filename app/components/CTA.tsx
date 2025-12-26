
//app/components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gold to-gold/90 text-navy">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop Drifting and Start Soaring?
          </h2>

          <p className="text-2xl mb-8">
            Book your free discovery call and let's design your God-honoring research strategy.
          </p>

          <a 
            href="https://calendly.com/alpha-wings/discovery-call-research-strategy-intensive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white px-12 py-6 rounded-lg text-xl font-bold hover:bg-navy/90 transition-all transform hover:scale-105"
          >
            Book Your Free Discovery Call
          </a>

          <p className="mt-8 text-lg">
            <strong>Only 5 founding scholar spots left at $1,500</strong><br />
            (Regular price: $3,500)
          </p>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center text-left">
            <div className="flex items-center gap-3">
              <span className="text-4xl">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">✓</span>
              <span>30-minute conversation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">✓</span>
              <span>100% satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
