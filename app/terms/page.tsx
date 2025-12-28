// app/terms/page.tsx
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none text-navy-800">
          <p className="text-sm text-gray-600 mb-8">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using Alpha Wings Research services (including Research Strategy Intensive, 
              Emergency Rescue Packages, and Free AI Tools), you agree to be bound by these Terms of Service.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Our Services</h2>
            <p className="mb-4">
              Alpha Wings Research provides strategic planning services for Christian academics:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Research Strategy Intensive ($1,500):</strong> Comprehensive 10-year research planning</li>
              <li><strong>Emergency Rescue Packages ($497):</strong> Focused problem-solving in 48 hours</li>
              <li><strong>Free AI Tools:</strong> Academic visibility assessment and roadmap generation</li>
              <li><strong>Discovery Calls:</strong> Complimentary consultations</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Payment and Refunds</h2>
            <p className="mb-4">
              <strong>Payment:</strong> All services require full payment upfront via Stripe unless a payment 
              plan is specifically agreed upon in writing.
            </p>
            <p className="mb-4">
              <strong>Refund Policy:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Research Strategy Intensive:</strong> Full refund if requested within 7 days of purchase, before the discovery call.</li>
              <li><strong>Emergency Rescue Packages:</strong> 50% refund if, after your intensive session, you don't feel you received significant value.</li>
              <li><strong>Discovery Calls:</strong> Free, no payment required.</li>
              <li><strong>Free Tools:</strong> No charge, no refund applicable.</li>
            </ul>
            <p className="text-sm text-gray-600">
              Refund requests must be made in writing to contact@alphawingsresearch.com.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              <strong>You Own:</strong> Your research ideas, publications, and academic work.
            </p>
            <p className="mb-4">
              <strong>We Own:</strong> Our methodologies, frameworks, templates, and deliverables (strategic briefs, roadmaps, etc.).
            </p>
            <p className="mb-4">
              <strong>License:</strong> You receive a non-exclusive, non-transferable license to use deliverables 
              for your personal academic career development.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. What We Don't Do</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Write or edit your papers, dissertations, or grant proposals</li>
              <li>Guarantee publication acceptance, tenure, or promotion</li>
              <li>Provide legal, financial, or psychological counseling</li>
              <li>Share your confidential information without consent</li>
              <li>Promise specific citation counts or impact factors</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Session Policies</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Scheduling:</strong> Sessions must be scheduled within 30 days of payment</li>
              <li><strong>Rescheduling:</strong> 24-hour notice required for changes</li>
              <li><strong>No-shows:</strong> Forfeit the session without refund</li>
              <li><strong>Recording:</strong> Sessions may be recorded for quality assurance (you'll be notified)</li>
              <li><strong>Preparation:</strong> Complete pre-session questionnaires for best results</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              Alpha Wings Research's total liability for any claim shall not exceed the amount paid for the service. 
              We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of the United Kingdom. Any disputes shall be resolved 
              through good faith negotiation before pursuing legal action.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Changes to Terms</h2>
            <p className="mb-4">
              We may update these terms periodically. Continued use of our services after changes constitutes 
              acceptance of the new terms.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Contact Information</h2>
            <p className="mb-2">
              For questions about these terms:
            </p>
            <p className="font-medium">
              Rev. Sam Adeyemi<br />
              Alpha Wings Research<br />
              Email: contact@alphawingsresearch.com<br />
              Based in United Kingdom
            </p>
          </section>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <p className="text-sm text-gray-600">
              By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}