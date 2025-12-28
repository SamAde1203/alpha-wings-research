// app/rescue/page.tsx
import Image from 'next/image';

export default function RescuePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION - UPDATED WITH LOGO & BETTER CONTRAST ===== */}
<section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
  {/* Background Image with DARKER Overlay for Better Text Contrast */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/rescue/rescue-hero.jpg"
      alt="Christian scholar finding clarity in research"
      fill
      className="object-cover opacity-20" // Reduced opacity for better text visibility
      priority
      quality={85}
    />
    {/* DARKER gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/85 to-navy-900/98"></div>
    
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
  </div>

  {/* Floating Elements for Visual Interest */}
  <div className="absolute top-20 left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-600/10 rounded-full blur-3xl"></div>
  <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

  <div className="container relative z-10 mx-auto px-4 text-center">
    
    {/* LOGO + Branding */}
    <div className="mb-8 md:mb-12 flex flex-col items-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">🎓</span>
        </div>
        <Image
          src="/logo.png"
          alt="Alpha Wings Research"
          width={160}
          height={60}
          className="h-12 w-auto brightness-110 contrast-110 drop-shadow-lg"
        />
      </div>
      <p className="text-sm text-gold-400 font-bold tracking-wider uppercase">
        Research Rescue Initiative
      </p>
    </div>

    {/* Urgency Badge - IMPROVED */}
    <div className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full text-sm font-bold mb-10 shadow-2xl animate-pulse border-2 border-gold-300">
      <span className="mr-2 text-lg">⚡</span>
      <span className="font-bold">3 EMERGENCY SPOTS AVAILABLE • THIS WEEK ONLY</span>
    </div>
    
    {/* Main Headline - FIXED CONTRAST */}
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl">
      <span className="bg-gradient-to-r from-white via-white/95 to-white text-transparent bg-clip-text">
        Stuck?
      </span>
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 drop-shadow-2xl">
        Get Unstuck in 48 Hours
      </span>
    </h1>
    
    {/* Subheadline - IMPROVED */}
    <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium text-white/95 max-w-3xl mx-auto leading-relaxed">
      <span className="bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
        Emergency Research Rescue Packages for 
      </span>
      <span className="text-gold-300 font-bold"> Christian Scholars</span>
    </p>
    
    {/* Price Badge - ENHANCED */}
    <div className="inline-flex flex-col items-center mb-10">
      <div className="bg-gradient-to-r from-gold-500/30 to-gold-600/30 backdrop-blur-lg px-10 py-6 rounded-2xl border-2 border-gold-500/50 shadow-2xl mb-4">
        <div className="flex items-baseline justify-center gap-4">
          <div className="text-right">
            <p className="text-sm text-white/80 font-bold uppercase tracking-wider">Investment</p>
            <p className="text-5xl md:text-6xl font-bold text-gold-300">$497</p>
          </div>
          <div className="h-16 w-px bg-gold-500/50"></div>
          <div className="text-left">
            <p className="text-sm text-white/80 font-bold uppercase tracking-wider">Results In</p>
            <p className="text-5xl md:text-6xl font-bold text-white">48hrs</p>
          </div>
        </div>
        <p className="text-sm text-white/80 mt-3 font-medium">2-3 Hour Intensive • Limited Availability</p>
      </div>
      
      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 text-sm text-white/90">
          <div className="w-5 h-5 bg-gold-500/20 rounded-full flex items-center justify-center">
            <span className="text-gold-400 text-xs">✓</span>
          </div>
          <span>Faith-Integrated Approach</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/90">
          <div className="w-5 h-5 bg-gold-500/20 rounded-full flex items-center justify-center">
            <span className="text-gold-400 text-xs">✓</span>
          </div>
          <span>48-Hour Deliverable</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/90">
          <div className="w-5 h-5 bg-gold-500/20 rounded-full flex items-center justify-center">
            <span className="text-gold-400 text-xs">✓</span>
          </div>
          <span>Personal Intensive Session</span>
        </div>
      </div>
    </div>
    
    {/* CTA Button - ENHANCED */}
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <a 
        href="#packages"
        className="relative inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl hover:shadow-3xl hover:shadow-gold-500/40 transform hover:scale-105 border-2 border-gold-300"
      >
        <span className="mr-3 text-2xl">👇</span>
        <div className="text-left">
          <div className="text-sm font-normal">Choose Your</div>
          <div>Emergency Rescue Package</div>
        </div>
        <span className="ml-3 text-2xl group-hover:translate-x-2 transition-transform">→</span>
      </a>
    </div>
    
    {/* Social Proof - Optional but Powerful */}
    <div className="mt-12 max-w-md mx-auto">
      <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
        <p className="text-sm text-white/80 italic mb-2">"This gave me more clarity in 3 hours than I've had in 2 years!"</p>
        <p className="text-xs text-gold-400 font-bold">— Early Rescue Package Client</p>
      </div>
    </div>
    
    {/* Scroll Indicator - ENHANCED */}
    <div className="mt-16">
      <a href="#problem" className="inline-block group">
        <div className="w-12 h-12 mx-auto rounded-full border-2 border-gold-500/60 flex items-center justify-center group-hover:border-gold-400 transition-colors bg-white/5 backdrop-blur-sm">
          <svg className="w-6 h-6 text-gold-400 group-hover:text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <span className="text-xs font-medium mt-3 block tracking-wider text-white/70">SEE THE EMERGENCY PACKAGES</span>
      </a>
    </div>
  </div>
</section>

      {/* ===== PROBLEM SECTION ===== */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy-900">
              YOU'RE BRILLIANT. YOU'RE CALLED. BUT YOU'RE STUCK.
            </h2>
            
            <div className="bg-gradient-to-br from-navy-50 to-white p-8 md:p-12 rounded-2xl border-2 border-gold-200 shadow-lg">
              <p className="text-xl text-navy-800 mb-8 text-center font-medium">
                Does this sound like you?
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  "Scattered publications with no coherent research identity",
                  "Finished manuscript but no idea where to submit it",
                  "Drowning in dissertation topic ideas but can't commit",
                  "Tenure review coming with a disconnected dossier",
                  "Need expert help NOW—not in 3 weeks, not eventually"
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-xl border border-navy-200 hover:border-gold-400 transition-all group">
                    <span className="text-red-500 text-2xl mr-4 mt-1">❌</span>
                    <p className="text-navy-800 group-hover:text-navy-900 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <p className="text-lg text-navy-900 font-bold mb-2">
                  ⚠️ The longer you stay stuck, the more opportunities you miss.
                </p>
                <p className="text-navy-700">
                  Every week of delay costs you citations, grants, promotions, and momentum.
                </p>
              </div>
              
              <div className="mt-10 text-center">
                <div className="inline-flex items-center text-gold-600 font-bold text-xl">
                  <span className="mr-3">→</span>
                  There's a better way.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUTION SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              INTRODUCING: RESEARCH RESCUE PACKAGES
            </h2>
            
            <p className="text-xl text-center text-white/90 mb-12 max-w-3xl mx-auto">
              Emergency intervention for Christian scholars who need <strong>ONE specific problem solved FAST</strong>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: "📅", text: "Book your intensive this week" },
                { icon: "🎯", text: "2-3 hours solving your exact problem" },
                { icon: "⚡", text: "Written deliverable within 48 hours" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-gold-500/30 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            
            {/* Limited Availability Badge */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Image
                  src="/images/rescue/rescue-limited.png"
                  alt="Only 3 spots available this week"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent rounded-xl flex items-end justify-center p-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-400 mb-2">⚠️ ONLY 3 SPOTS</p>
                    <p className="text-white font-medium">Available this week</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-white/80 mt-4 text-sm">
                After these fill, next availability is 3+ weeks out
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3 PACKAGES SECTION ===== */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy-900">
            CHOOSE YOUR RESCUE PACKAGE
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl border-2 border-gold-300 hover:border-gold-500 transition-all hover:shadow-3xl hover:scale-[1.02]">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-gold-100 rounded-xl mb-4">
                    <Image
                      src="/images/rescue/rescue-package1.png"
                      alt="Fix scattered publications"
                      width={80}
                      height={80}
                      className="w-20 h-20 mx-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">📦 Fix My Scattered Publications</h3>
                  <p className="text-navy-700 font-medium">For faculty with disconnected research outputs</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-navy-900 mb-3 text-lg">THE PROBLEM:</h4>
                  <p className="text-navy-700 mb-6">
                    You have multiple publications but they don't tell a coherent story. 
                    Tenure committees can't figure out your research identity.
                  </p>
                  
                  <h4 className="font-bold text-navy-900 mb-3 text-lg">YOU'LL RECEIVE:</h4>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Research Spine Statement (ready to use)",
                      "3-Year Publication Consolidation Plan",
                      "Tenure Narrative Reframe Strategy",
                      "5-Page Strategic Brief (within 48 hours)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold-600 font-bold mr-3">✓</span>
                        <span className="text-navy-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-navy-900">$497</p>
                    <p className="text-navy-700 text-sm">This week + 48-hour turnaround</p>
                  </div>
                  
                  <a 
                    href="https://buy.stripe.com/3cI3cu33J6tg3dua6i9EI0a"
                    className="block w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 py-4 px-6 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl"
                  >
                    Fix My Scattered Publications - $497
                  </a>
                </div>
              </div>
            </div>

            {/* Package 2 - MOST POPULAR */}
            <div className="relative transform lg:scale-105 z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-navy-900 text-gold-500 px-6 py-2 rounded-full text-sm font-bold border-2 border-gold-500 whitespace-nowrap shadow-lg">
                ⭐ MOST POPULAR
              </div>
              
              <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl border-4 border-gold-400">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block p-4 bg-gold-100 rounded-xl mb-4">
                      <Image
                        src="/images/rescue/rescue-package2.png"
                        alt="Find publication target"
                        width={80}
                        height={80}
                        className="w-20 h-20 mx-auto"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">📦 Where Should I Publish This Paper?</h3>
                    <p className="text-navy-700 font-medium">For scholars with finished manuscripts</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-navy-900 mb-3 text-lg">THE PROBLEM:</h4>
                    <p className="text-navy-700 mb-6">
                      Your paper is written but you're paralyzed choosing the right journal. 
                      Don't waste 6-12 months on the wrong submission.
                    </p>
                    
                    <h4 className="font-bold text-navy-900 mb-3 text-lg">YOU'LL RECEIVE:</h4>
                    <ul className="space-y-3 mb-8">
                      {[
                        "5 Target Journals Ranked (fit & prestige)",
                        "Submission Strategy for Each Journal",
                        "Cover Letter Framework",
                        "4-Page Targeting Strategy Brief"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold-600 font-bold mr-3">✓</span>
                          <span className="text-navy-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-6">
                      <p className="text-3xl font-bold text-navy-900">$497</p>
                      <p className="text-navy-700 text-sm">This week + 48-hour turnaround</p>
                    </div>
                    
                    <a 
                      href="https://buy.stripe.com/8x2bJ0cEjcRE29q3HU9EI0b"
                      className="block w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 py-4 px-6 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl"
                    >
                      Find My Publication Target - $497
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl border-2 border-gold-300 hover:border-gold-500 transition-all hover:shadow-3xl hover:scale-[1.02]">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-gold-100 rounded-xl mb-4">
                    <Image
                      src="/images/rescue/rescue-package3.png"
                      alt="Choose dissertation topic"
                      width={80}
                      height={80}
                      className="w-20 h-20 mx-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">📦 Dissertation Topic Breakthrough</h3>
                  <p className="text-navy-700 font-medium">For PhD students stuck in topic selection</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-navy-900 mb-3 text-lg">THE PROBLEM:</h4>
                  <p className="text-navy-700 mb-6">
                    You have too many ideas or no clear idea. Your advisor says "find your passion" 
                    but you need structure. You're losing time.
                  </p>
                  
                  <h4 className="font-bold text-navy-900 mb-3 text-lg">YOU'LL RECEIVE:</h4>
                  <ul className="space-y-3 mb-8">
                    {[
                      "15-20 Potential Dissertation Topics",
                      "Evaluation Matrix (scored & ranked)",
                      "Top 3 Deep-Dive Analysis",
                      "5-Page Decision Brief (within 48 hours)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold-600 font-bold mr-3">✓</span>
                        <span className="text-navy-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-navy-900">$497</p>
                    <p className="text-navy-700 text-sm">This week + 48-hour turnaround</p>
                  </div>
                  
                  <a 
                    href="https://buy.stripe.com/cNibJ08o39Fs5lCfqC9EI0c"
                    className="block w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 py-4 px-6 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl"
                  >
                    Choose My Dissertation Topic - $497
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy-900">
            HOW IT WORKS: SIMPLE, FAST, EFFECTIVE
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Process Diagram */}
            <div className="mb-12">
              <Image
                src="/images/rescue/rescue-process.png"
                alt="6-step rescue process"
                width={1200}
                height={600}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Steps Details */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Choose & Pay", desc: "Click your package button. Secure $497 payment via Stripe." },
                { step: "2", title: "Book Session", desc: "Receive Calendly link. Book your 2-3 hour slot this week." },
                { step: "3", title: "Complete Prep", desc: "Fill quick Google Form. Helps me prepare for our session." },
                { step: "4", title: "Solve Together", desc: "2-3 hour Zoom intensive. Get expert guidance and clarity." },
                { step: "5", title: "Receive Deliverable", desc: "Get 4-6 page strategic brief within 48 hours." },
                { step: "6", title: "Move Forward", desc: "No more stuck. You have a plan and confidence to execute." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border-2 border-navy-200 hover:border-gold-400 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-navy-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* ===== FOUNDER SECTION ===== */}
<section className="py-20 bg-gradient-to-b from-navy-900 to-navy-800 text-white">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide">
        WHO WILL GUIDE YOU?
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Founder Image */}
        <div className="md:w-1/3">
          <div className="relative rounded-2xl overflow-hidden border-4 border-gold-500 shadow-2xl">
            <Image
              src="/images/rescue/rescue-founder.jpg"
              alt="Rev. Sam Adeyemi – Founder of Alpha Wings Research"
              width={400}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Founder Content */}
        <div className="md:w-2/3">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Rev. Sam Adeyemi
          </h3>

          <p className="text-gold-400 font-medium mb-6">
            Founder, Alpha Wings Research
          </p>

          <p className="text-lg text-gray-200 mb-5 leading-relaxed">
            I help Christian scholars build strategic, publishable research programmes
            that honour God and advance their academic fields.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>• PhD-track researcher focused on historical theology, theological ethics, and applied scholarship</li>
            <li>• Experienced in journal-oriented writing, long-form research development, and project design</li>
            <li>• Builder of initiatives that bridge the Church, the academy, and public life</li>
            <li>• Helped scholars move from scattered ideas to coherent, submission-ready research trajectories</li>
          </ul>

          <p className="text-gray-200 leading-relaxed">
            I understand the tension Christian academics face honouring divine calling while meeting
            institutional expectations, pursuing rigorous scholarship while remaining faithful to the Church.
            <br />
            <br />
            Alpha Wings Research exists to help you integrate vocation, intellectual depth, and strategic clarity 
            so your work bears lasting fruit in both the academy and the Kingdom.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-navy-900">
              READY TO GET UNSTUCK?
            </h2>
            
            <div className="bg-gradient-to-br from-gold-50 to-white p-8 md:p-12 rounded-2xl border-4 border-gold-300 shadow-2xl mb-10">
              <p className="text-xl md:text-2xl text-navy-900 mb-8 font-medium">
                You've been stuck long enough. Your research matters. Your calling matters. Your time matters.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <a 
                  href="https://buy.stripe.com/3cI3cu33J6tg3dua6i9EI0a"
                  className="bg-white border-2 border-gold-400 hover:border-gold-600 text-navy-900 py-4 px-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 block"
                >
                  Fix Scattered Publications
                </a>
                
                <a 
                  href="https://buy.stripe.com/8x2bJ0cEjcRE29q3HU9EI0b"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 py-4 px-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 block"
                >
                  Find Publication Target
                </a>
                
                <a 
                  href="https://buy.stripe.com/cNibJ08o39Fs5lCfqC9EI0c"
                  className="bg-white border-2 border-gold-400 hover:border-gold-600 text-navy-900 py-4 px-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 block"
                >
                  Choose Dissertation Topic
                </a>
              </div>
              
              <p className="text-navy-700 mt-8 text-sm">
                ⚠️ Only 3 spots available this week • First-come, first-served
              </p>
            </div>
            
            <div className="text-navy-700">
              <p className="mb-4">
                Questions? Email: <a href="mailto:contact@alphawingsresearch.com" className="text-gold-600 hover:text-gold-700 font-bold">contact@alphawingsresearch.com</a>
              </p>
              <p className="text-sm text-navy-600">
                © {new Date().getFullYear()} Alpha Wings Research • Empowering Christian Scholars to Soar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}