// app/rescue/thank-you/page.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RescueThankYou() {
  // Track conversion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track conversion in analytics
      //window.gtag?.('event', 'conversion', {
      //  send_to: 'AW-YOUR-ID/rescue_purchase',
      //  value: 497.00,
      //  currency: 'USD',
     //   transaction_id: Date.now().toString()
     // });
      
      // Facebook Pixel
     // window.fbq?.('track', 'Purchase', { value: 497.00, currency: 'USD' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4 py-20">
        
        {/* Confirmation Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border-4 border-gold-500 shadow-2xl shadow-gold-500/20">
          
          {/* Celebration Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              YOU'RE IN! RESCUE PACKAGE CONFIRMED
            </h1>
            <p className="text-xl text-gold-300 font-bold">
              Thank you for your $497 investment in your research future!
            </p>
          </div>

          {/* Urgent Action Box - UPDATED WITH CALENDLY LINKS */}
          <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 backdrop-blur-sm rounded-2xl p-8 mb-10 border-2 border-gold-500/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">⚠️</div>
              <h2 className="text-2xl font-bold">IMPORTANT: BOOK YOUR SESSION NOW</h2>
            </div>
            
            <p className="text-lg mb-6">
              Choose the session that best fits your needs:
            </p>
            
            <div className="grid gap-4 mb-8">
              <a 
                href="https://calendly.com/alpha-wings/dissertation-rescue" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-6 rounded-xl border border-gold-500/30 transition-all group"
              >
                <div className="text-3xl">🎓</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Dissertation Topic Rescue (2 hours)</h3>
                  <p className="text-sm text-white/80">For PhD/Masters students stuck with topic selection</p>
                </div>
                <div className="text-2xl group-hover:translate-x-2 transition-transform">→</div>
              </a>
              
              <a 
                href="https://calendly.com/alpha-wings/journal-rescue" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-6 rounded-xl border border-gold-500/30 transition-all group"
              >
                <div className="text-3xl">📄</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Journal Targeting Rescue (2.5 hours)</h3>
                  <p className="text-sm text-white/80">For researchers struggling to find the right journal</p>
                </div>
                <div className="text-2xl group-hover:translate-x-2 transition-transform">→</div>
              </a>
              
              <a 
                href="https://calendly.com/alpha-wings/scattered-publications-rescue" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-6 rounded-xl border border-gold-500/30 transition-all group"
              >
                <div className="text-3xl">📊</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Scattered Publications Rescue (3 hours)</h3>
                  <p className="text-sm text-white/80">For faculty needing a coherent research direction</p>
                </div>
                <div className="text-2xl group-hover:translate-x-2 transition-transform">→</div>
              </a>
            </div>
            
            <div className="bg-navy-900/50 p-6 rounded-xl border border-gold-500/30">
              <h3 className="font-bold text-lg mb-2 text-gold-300">CAN'T FIND YOUR WELCOME EMAIL?</h3>
              <ol className="space-y-2 text-white/90">
                <li>1. Check your <strong>spam folder</strong> and <strong>promotions tab</strong></li>
                <li>2. Search for email from <strong>contact@alphawingsresearch.com</strong></li>
                <li>3. Still can't find it? <strong>Text/call: +44 7426 112316 </strong></li>
              </ol>
            </div>
          </div>

          {/* Next Steps Timeline - UPDATED WITH CALENDLY EMPHASIS */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-10">
              YOUR 5-STEP PATH TO GETTING UNSTUCK
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gold-500/30 md:left-1/2 md:-translate-x-1/2"></div>
              
              {[
                {
                  step: '1',
                  icon: '📅',
                  title: 'Book Your Session NOW',
                  desc: 'Click one of the Calendly links above to choose a time THIS WEEK',
                  timeline: 'Right Now',
                  isUrgent: true
                },
                {
                  step: '2',
                  icon: '📝',
                  title: 'Complete Questionnaire',
                  desc: 'Fill the Google Form sent to your email so I can prepare for maximum impact',
                  timeline: 'After booking',
                  isUrgent: false
                },
                {
                  step: '3',
                  icon: '📤',
                  title: 'Upload Materials',
                  desc: 'CV, manuscript, publication list, or relevant documents via email',
                  timeline: '24 hours before session',
                  isUrgent: false
                },
                {
                  step: '4',
                  icon: '🎯',
                  title: 'Intensive Rescue Session',
                  desc: '2-3 hours of focused problem-solving via Zoom',
                  timeline: 'This week',
                  isUrgent: true
                },
                {
                  step: '5',
                  icon: '⚡',
                  title: 'Receive Strategic Brief',
                  desc: '4-6 page custom strategic brief delivered to your email within 48 hours',
                  timeline: '48 hours after session',
                  isUrgent: false
                }
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row mb-10 items-center">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-navy-900 z-10 md:left-1/2 md:-translate-x-1/2 ${
                    item.isUrgent ? 'bg-red-500 animate-pulse' : 'bg-gold-500'
                  }`}></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:ml-auto'}`}>
                    <div className={`bg-gradient-to-br rounded-xl p-6 border transition-all ${
                      item.isUrgent 
                        ? 'from-red-500/10 to-red-600/10 border-red-500/50 shadow-lg shadow-red-500/20' 
                        : 'from-white/10 to-white/5 border-gold-500/30'
                    }`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <span className={`text-sm font-bold ${item.isUrgent ? 'text-red-400' : 'text-gold-400'}`}>
                            {item.timeline}
                            {item.isUrgent && ' ⚡'}
                          </span>
                        </div>
                      </div>
                      <p className="text-white/90">{item.desc}</p>
                      
                      {item.step === '1' && (
                        <div className="mt-4">
                          <a 
                            href="https://calendly.com/alpha-wings/dissertation-rescue" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-lg font-bold hover:from-gold-600 hover:to-gold-700 transition-all mr-3"
                          >
                            Book Now →
                          </a>
                          <span className="text-sm text-white/70">or choose other options above</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support & Contact */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-2xl font-bold mb-4">QUESTIONS BEFORE BOOKING?</h3>
              <ul className="space-y-3 text-white/90 mb-6">
                <li>• Reply to the welcome email</li>
                <li>• Call/text: +44 7426 112316</li>
                <li>• Response within 2-4 hours</li>
              </ul>
              <p className="text-sm text-white/70">
                Not sure which session to choose? Text me a brief description of your situation.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gold-500/20 to-gold-600/20 p-8 rounded-2xl border border-gold-500/50">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">GET READY FOR BREAKTHROUGH</h3>
              <p className="text-white/90 mb-6">
                I'm excited to help you get unstuck and move forward with clarity and confidence!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <p className="font-bold">Rev. Sam Adeyemi</p>
                  <p className="text-sm text-white/80">Alpha Wings Research</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">READY TO GET STARTED?</h3>
              <p className="text-lg text-white/90 mb-6">
                Book your session now to secure your spot this week!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { href: "https://calendly.com/alpha-wings/dissertation-rescue", label: "🎓 Dissertation Rescue", duration: "2h" },
                  { href: "https://calendly.com/alpha-wings/journal-rescue", label: "📄 Journal Rescue", duration: "2.5h" },
                  { href: "https://calendly.com/alpha-wings/scattered-publications-rescue", label: "📊 Publications Rescue", duration: "3h" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-xl font-bold hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    {link.label} <span className="text-sm bg-navy-900/30 px-2 py-1 rounded">{link.duration}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <Link 
              href="/"
              className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all"
            >
              ← Return to Main Site
            </Link>
            
            <p className="text-white/60 mt-6 text-sm">
              Need immediate help? Call/text: +44 7426 112316
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { text: 'Secure Payment', icon: '🔒' },
              { text: '48-Hour Delivery', icon: '⚡' },
              { text: 'Personal Session', icon: '👨‍🏫' },
              { text: 'Email Support', icon: '✉️' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}