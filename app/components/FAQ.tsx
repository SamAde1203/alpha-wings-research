//app/components/FAQ.tsx
export default function FAQ() {
  const faqs = [
    {
      q: "What's the difference between the $1,500 Intensive and $497 Rescue Packages?",
      a: "The $1,500 Research Strategy Intensive provides a complete 10-year roadmap with 40-60 page strategic plan. The $497 Rescue Packages solve ONE urgent problem in 2-3 hours with 48-hour deliverables. Think comprehensive strategy vs. emergency intervention."
    },
    {
      q: "Who are the Rescue Packages for?",
      a: "Christian scholars who need immediate help: PhD students stuck on dissertation topics, faculty with scattered publications, researchers with finished manuscripts needing journal targets, anyone with a deadline approaching who can't wait weeks for help."
    },
    {
      q: "What's your turnaround time for Rescue Packages?",
      a: "48 hours from our intensive session. We meet for 2-3 hours to solve your problem, and you receive a 4-6 page strategic brief within 48 hours. It's designed for urgent academic emergencies."
    },
    {
      q: "Can I book multiple Rescue Packages?",
      a: "Yes! If you have multiple problems (e.g., scattered publications AND need journal targeting), you can book separate packages. However, spots are limited each week, so book quickly."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit/debit cards via Stripe. For the $1,500 Intensive, we offer 50% upfront and 50% at delivery if needed. Rescue Packages require full payment upfront due to the immediate nature of the service."
    },
    {
      q: "Do you offer refunds?",
      a: "For Rescue Packages: 50% refund if after our session you don't feel you received significant value. For the Full Intensive: Full refund within 7 days if requested before the discovery call. See our full Terms of Service for details."
    },
    {
      q: "What if I need help but can't afford either option right now?",
      a: "Start with our free AI Research Roadmap Generator. It gives you immediate insights and actionable steps. You can also book a free discovery call to discuss your situation we may be able to suggest alternative approaches."
    },
    {
      q: "I'm bivocational (pastor + academic). Will this work for me?",
      a: "Absolutely. We specialize in helping Christian scholars navigate multiple callings. We'll design strategies that honor both your academic work and ministry, showing how they can strengthen each other."
    },
    {
      q: "What if my institution doesn't support my research focus?",
      a: "We'll help you navigate institutional tensions strategically finding ways to meet expectations while advancing work that matters to you and serves the Church. This is a common challenge we address."
    },
    {
      q: "Do you guarantee publication acceptance or tenure?",
      a: "No. We provide strategic guidance, frameworks, and actionable plans based on academic best practices. Outcomes depend on many factors including your execution, field norms, and institutional contexts. We help maximize your chances."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="mr-2">❓</span>
            Common Questions
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-navy-800 max-w-3xl mx-auto">
            Get clear answers about our Research Strategy Intensive and Emergency Rescue Packages
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold-200 hover:border-gold-400 transition-all hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-start">
                  <span className="text-gold-600 mr-3">Q{index + 1}.</span>
                  {faq.q}
                </h3>
                <div className="pl-9">
                  <p className="text-lg text-navy-800 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions? */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-xl mb-6 text-white/90">
                Book a free discovery call to discuss your specific situation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/alpha-wings/discovery-call-research-strategy-intensive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="mr-3">📅</span>
                  Book Free Discovery Call
                </a>
                <a 
                  href="mailto:contact@alphawingsresearch.com"
                  className="inline-flex items-center border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all"
                >
                  <span className="mr-3">✉️</span>
                  Email Your Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}