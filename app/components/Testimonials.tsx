// components/Testimonials.jsx
'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('visibility');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const testimonials = {
    visibility: [
      {
        id: 1,
        name: "Early User Feedback",
        title: "Christian Academic Researcher",
        credential: "Used Free Audit Tool",
        image: "👨‍🏫",
        content: "This gave me more clarity in 10 minutes than I've had in 2 years! The audit revealed I was missing a Google Scholar profile entirely - no wonder nobody was citing my work. Fixed it in 15 minutes and already seeing results.",
        stats: "5-minute clarity",
        badge: "Verified",
        color: "bg-gradient-to-br from-blue-500/20 to-purple-600/10" 
      },
      {
        id: 2,
        name: "Beta Tester",
        title: "Seminary PhD Candidate",
        credential: "Accelerator Package User",
        image: "👩‍🏫",
        content: "I've spent years researching Biblical Hebrew but nobody outside my advisor knew my work existed. The platform-by-platform optimization guide was exactly what I needed. My ResearchGate profile went from 0 to 247 views in the first week.",
        stats: "247 profile views in week 1",
        badge: "Beta User",
        color: "bg-gradient-to-br from-emerald-500/20 to-blue-600/10" 
      }
    ],
    strategy: [
      {
        id: 3,
        name: "Preview Client",
        title: "Theology Professor",
        credential: "Full Intensive Preview",
        image: "👨‍💼",
        content: "The 10-year roadmap framework completely changed how I think about my academic career. Instead of just publishing papers, I now have a clear strategy for building thought leadership in Christian ethics. The faith-integration piece was especially valuable.",
        stats: "10-year clarity gained",
        badge: "Preview",
        color: "bg-gradient-to-br from-amber-500/20 to-emerald-600/10" 
      },
      {
        id: 4,
        name: "Strategy Session",
        title: "Independent Researcher",
        credential: "Discovery Call Participant",
        image: "👩‍🎓",
        content: "I didn't realize how fragmented my academic presence was until the audit. No LinkedIn, no Twitter, outdated university profile - I was basically invisible. The personalized 24-hour action plan gave me specific steps I could actually implement.",
        stats: "Platform gaps identified",
        badge: "Discovery",
        color: "bg-gradient-to-br from-pink-500/20 to-rose-600/10" 
      }
    ],
    tools: [
      {
        id: 5,
        name: "GPT User",
        title: "Postdoctoral Fellow",
        credential: "Used Free Accelerator Tool",
        image: "👨‍🔬",
        content: "The free audit tool was surprisingly thorough. It analyzed my Google Scholar profile, compared me to peers in my field, and gave me 3 immediate fixes I could do in under an hour. Worth way more than free.",
        stats: "3 quick wins identified",
        badge: "Free Tool",
        color: "bg-gradient-to-br from-yellow-500/20 to-amber-600/10" 
      },
      {
        id: 6,
        name: "Template User",
        title: "Christian Studies Researcher",
        credential: "Accelerator Package",
        image: "👩‍💻",
        content: "The content multiplication templates are gold. I turned my latest paper into a Twitter thread, LinkedIn article, and blog post in less than 2 hours. My research is finally reaching people outside academia, including pastors who can actually use it.",
        stats: "1 paper → 3 formats",
        badge: "Active User",
        color: "bg-gradient-to-br from-indigo-500/20 to-violet-600/10" 
      }
    ]
  };

  const stats = [
    { number: "500+", label: "Free Audits Completed", detail: "in first 72 hours" },
    { number: "38/100", label: "Average Starting Score", detail: "huge room for improvement" },
    { number: "92%", label: "Missing Google Scholar", detail: "biggest quick-win opportunity" },
    { number: "24hrs", label: "First Visibility Boost", detail: "with priority actions" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-navy-900 to-navy-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="mr-2">🌟</span>
            Early Results from Christian Scholars
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Scholars. <span className="text-gold-400">Real Results.</span> Real Fast.
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 font-medium">
            See how Christian academics are discovering their visibility gaps and taking action in minutes, not months.
          </p>
        </div>

        {/* Results Stats Bar - YELLOW for high energy */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-navy-800/50 backdrop-blur rounded-xl p-6 border-2 border-gold-500/30 hover:border-yellow-500 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">{stat.number}</div>
              <div className="text-white font-bold text-sm mb-1">{stat.label}</div>
              <div className="text-gold-400/80 text-xs font-semibold">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation - GOLD active, white inactive */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'visibility', label: 'Visibility Boost', icon: '📊' },
            { key: 'strategy', label: 'Strategic Clarity', icon: '🎯' },
            { key: 'tools', label: 'Tool Success', icon: '⚡' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center px-6 py-3 rounded-full transition-all font-bold ${activeTab === tab.key 
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 shadow-lg shadow-gold-500/30' 
                : 'bg-white/10 text-white hover:bg-white/20 border border-gold-500/30'
              }`}
            >
              <span className="mr-2 text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials[activeTab].map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`${testimonial.color} backdrop-blur rounded-2xl p-8 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold-500/10 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon - GOLD */}
              <div className="text-4xl text-gold-400/40 mb-4">"</div>
              
              {/* Content */}
              <p className="text-lg text-white mb-6 italic leading-relaxed font-normal">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="flex items-center flex-wrap gap-2">
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <span className="bg-gold-500/20 text-gold-400 text-xs px-2 py-1 rounded-full font-bold border border-gold-400/30">
                        {testimonial.badge}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm font-medium">{testimonial.title}</p>
                    <p className="text-gold-400/70 text-xs font-medium">{testimonial.credential}</p>
                  </div>
                </div>
                
                {/* Stat Badge - YELLOW for energy */}
                <div className="bg-navy-900/50 rounded-lg px-4 py-2 border border-gold-500/30">
                  <div className="text-yellow-500 font-bold text-sm whitespace-nowrap">{testimonial.stats}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Designed For Section */}
        <div className="mb-16">
          <h3 className="text-center text-white text-xl font-bold mb-8">
            Designed for Christian Scholars at All Stages:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { name: "PhD Students", icon: "🎓", color: "text-purple-400" },
              { name: "PostDocs", icon: "📚", color: "text-blue-400" },
              { name: "Assistant Profs", icon: "👨‍🏫", color: "text-emerald-400" },
              { name: "Senior Faculty", icon: "👩‍🏫", color: "text-amber-400" },
              { name: "Independent Scholars", icon: "✍️", color: "text-rose-400" }
            ].map((role, index) => (
              <div 
                key={index}
                className="bg-navy-800/30 rounded-xl px-4 py-6 border border-gold-500/20 hover:border-gold-400/50 transition-all text-center"
              >
                <div className={`text-3xl mb-2 ${role.color}`}>{role.icon}</div>
                <div className="text-white text-sm font-medium">{role.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - GOLD theme */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 border-2 border-gold-500/40 shadow-2xl shadow-gold-500/10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to See Your Academic Visibility Score?
              </h3>
              <p className="text-white/90 mb-8 text-lg font-medium">
                Join 500+ Christian scholars who've discovered their visibility gaps in just 5 minutes. 
                Free audit. No credit card. Instant results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://chatgpt.com/g/g-6950345e6ba48191b46c5efc536fbec1-alpha-wings-research-accelerator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-gold-500/30 text-lg"
                >
                  <span className="mr-2">🎁</span>
                  Get Free Visibility Audit
                </a>
                <span className="text-white/60 text-sm font-medium">
                  or <a href="#accelerator" className="text-gold-400 hover:text-gold-300 underline font-bold">see pricing options</a>
                </span>
              </div>
              
              {/* Trust Indicators - GOLD checkmarks */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80 font-medium">
                <div className="flex items-center">
                  <span className="text-gold-400 mr-2 font-bold">✓</span>
                  No credit card required
                </div>
                <div className="flex items-center">
                  <span className="text-gold-400 mr-2 font-bold">✓</span>
                  5-minute assessment
                </div>
                <div className="flex items-center">
                  <span className="text-gold-400 mr-2 font-bold">✓</span>
                  Faith-integrated approach
                </div>
                <div className="flex items-center">
                  <span className="text-gold-400 mr-2 font-bold">✓</span>
                  Instant actionable results
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
