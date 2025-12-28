//app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl mr-3">🎓</div>
              <h2 className="text-2xl font-bold">
                <span className="text-gold-400">Alpha Wings</span> Research
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Empowering Christian scholars to build influential, purpose-driven academic careers 
              through strategic research planning and faith-integrated methodology.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://chatgpt.com/g/g-694edf7c148c8191bdb8cd918525ee4e-christian-research-roadmap-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gold-600 transition-all"
              >
                <span className="mr-2">🤖</span>
                Free AI Generator
              </a>
              <a 
                href="mailto:contact@alphawingsresearch.com"
                className="inline-flex items-center border-2 border-white/30 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-white/10 transition-all"
              >
                <span className="mr-2">✉️</span>
                Email Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gold-500/30 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { text: "Research Strategy Intensive", href: "#solution" },
                { text: "Academic Visibility Acceleration", href: "#accelerator" },
                { text: "Grant Proposal Strategy", href: "#services" },
                { text: "Publication Roadmapping", href: "#solution" },
                { text: "Career Trajectory Planning", href: "#solution" },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-white/70 hover:text-gold-400 transition-all hover:translate-x-1 inline-flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gold-500/30 pb-2">
              Connect With Us
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a 
                  href="https://calendly.com/alpha-wings/discovery-call-research-strategy-intensive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold-400 transition-all hover:translate-x-1 inline-flex items-center"
                >
                  <span className="mr-2">📅</span>
                  Book Discovery Call
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@alphawingsresearch.com"
                  className="text-white/70 hover:text-gold-400 transition-all hover:translate-x-1 inline-flex items-center"
                >
                  <span className="mr-2">✉️</span>
                  contact@alphawingsresearch.com
                </a>
              </li>
              <li className="text-white/70">
                <span className="mr-2">📍</span>
                United Kingdom
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all"
                aria-label="Google Scholar"
              >
                📚
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-white/60 text-sm">
              Serving Christian academics, theologians, and researchers worldwide since 2024
            </p>
          </div>
          
          <div className="text-right">
            <div className="flex flex-wrap justify-end gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-gold-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition">Terms of Service</a>
              <a href="#faq" className="hover:text-gold-400 transition">FAQ</a>
              <span>© {new Date().getFullYear()} Alpha Wings Research</span>
            </div>
          </div>
        </div>

        {/* Academic Badge */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <div className="inline-flex items-center gap-2 text-white/50 text-sm">
            <span>🎓</span>
            <span>Research-Backed Methodology • Faith-Integrated Approach Approach</span>
            <span>✝️</span>
          </div>
          <p className="text-white/40 text-xs mt-2">
            Helping Christian scholars publish, teach, and lead with excellence
          </p>
        </div>
      </div>
    </footer>
  )
}