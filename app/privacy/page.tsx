// app/privacy/page.tsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-navy-800">
          <p className="text-sm text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At Alpha Wings Research, we collect information to provide and improve our services to Christian scholars:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, institutional affiliation</li>
              <li><strong>Academic Information:</strong> Research interests, publication history, career stage</li>
              <li><strong>Payment Information:</strong> Processed securely through Stripe (we don't store credit card details)</li>
              <li><strong>Communication:</strong> Emails, discovery call notes, strategy session recordings</li>
              <li><strong>Usage Data:</strong> Website analytics via anonymized tools</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide personalized research strategy services</li>
              <li>To communicate about your sessions and deliverables</li>
              <li>To process payments for Rescue Packages and Strategy Intensives</li>
              <li>To improve our services for Christian academics</li>
              <li>To send relevant content about academic career development (with your consent)</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Data Protection</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal data:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encrypted communication for all sessions</li>
              <li>Secure payment processing via Stripe</li>
              <li>Limited access to personal data (only Rev. Sam Adeyemi)</li>
              <li>Regular security assessments</li>
              <li>Data minimization principles</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Your Rights</h2>
            <p className="mb-4">
              As a user of our services, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Third-Party Services</h2>
            <p className="mb-4">
              We use trusted third-party services to deliver our offerings:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Stripe:</strong> Secure payment processing</li>
              <li><strong>Calendly:</strong> Session scheduling</li>
              <li><strong>Google Workspace:</strong> Email and document storage</li>
              <li><strong>Zoom:</strong> Virtual session delivery</li>
              <li><strong>Vercel:</strong> Website hosting</li>
            </ul>
            <p className="text-sm text-gray-600">
              Each service has its own privacy policies which we recommend reviewing.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain personal data only as long as necessary:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Active clients:</strong> For duration of service + 3 years</li>
              <li><strong>Inactive clients:</strong> 5 years from last engagement</li>
              <li><strong>Payment records:</strong> 7 years for tax compliance</li>
              <li><strong>Website analytics:</strong> 26 months anonymized</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Contact Us</h2>
            <p className="mb-2">
              For privacy-related inquiries or to exercise your rights:
            </p>
            <p className="font-medium">
              Rev. Sam Adeyemi<br />
              Alpha Wings Research<br />
              Email: contact@alphawingsresearch.com
            </p>
          </section>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <p className="text-sm text-gray-600">
              This privacy policy may be updated periodically. We'll notify you of significant changes 
              via email or website notification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}