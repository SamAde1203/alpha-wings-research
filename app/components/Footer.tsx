
//app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Alpha Wings Research" className="h-16 mb-4" />
            <p className="text-gray-300">
              Strategic research planning for Christian academics who want to steward their gifts well.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-gold transition">
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/alpha-wings/discovery-call-research-strategy-intensive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition"
                >
                  Book Discovery Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Contact</h3>
            <p className="text-gray-300 mb-2">
              Email: info@alphawingsresearch.com
            </p>
            <p className="text-gray-300">
              Based in Nigeria • Serving Christian academics worldwide
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alpha Wings Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
