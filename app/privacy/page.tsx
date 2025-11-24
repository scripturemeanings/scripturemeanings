import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Scripture Meanings',
  description: 'Privacy Policy for Scripture Meanings - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Privacy Policy</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-slate-400 mt-4">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
              <p className="text-gray-800 mb-0">
                <strong>Quick Summary:</strong> We collect minimal data necessary to provide our service. We use Google Analytics for website statistics, Giscus for comments (via GitHub), and process contact form submissions. We do not sell your data.
              </p>
            </div>

            <h2>1. Introduction</h2>
            <p>
              Scripture Meanings ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at scripturemeanings.com (the "Service").
            </p>
            <p>
              By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Information You Provide Directly</h3>
            <p>We collect information that you voluntarily provide to us, including:</p>
            <ul>
              <li><strong>Contact Form Submissions:</strong> When you contact us through our contact form, we collect your name, email address, and message content.</li>
              <li><strong>Comments:</strong> When you post comments on our articles using Giscus (our commenting system), you authenticate through GitHub, and we may collect your GitHub username, profile information, and comment content.</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our Service, we automatically collect certain information about your device and browsing behavior:</p>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, and navigation paths</li>
              <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device type, and screen resolution</li>
              <li><strong>Location Data:</strong> General geographic location derived from your IP address (country/region level, not precise location)</li>
              <li><strong>Referral Information:</strong> The website or source that referred you to our Service</li>
            </ul>

            <h3>2.3 Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and store certain information. For detailed information about the cookies we use and your choices regarding cookies, please see our <Link href="/cookies">Cookie Policy</Link>.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li><strong>To Provide and Maintain Our Service:</strong> To deliver content, respond to inquiries, and ensure proper functionality</li>
              <li><strong>To Improve Our Service:</strong> To analyze usage patterns, identify popular content, and enhance user experience</li>
              <li><strong>To Communicate With You:</strong> To respond to your contact form submissions and comments</li>
              <li><strong>To Ensure Security:</strong> To detect and prevent fraud, abuse, and security threats</li>
              <li><strong>To Comply With Legal Obligations:</strong> To meet legal requirements and respond to lawful requests</li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>We use the following third-party services that may collect information about you:</p>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6 not-prose">
              <h3 className="text-xl font-bold mb-4">Google Analytics</h3>
              <p className="mb-4">
                We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Pages visited and time spent on each page</li>
                <li>How you arrived at our website</li>
                <li>Your approximate geographic location</li>
                <li>Device and browser information</li>
              </ul>
              <p className="mt-4">
                Google Analytics uses cookies and may collect your IP address. This data is processed by Google according to their Privacy Policy. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6 not-prose">
              <h3 className="text-xl font-bold mb-4">Giscus Comments</h3>
              <p className="mb-4">
                Our commenting system is powered by Giscus, which uses GitHub Discussions. When you comment:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>You authenticate through your GitHub account</li>
                <li>Your GitHub username and profile information may be displayed</li>
                <li>Comments are stored in GitHub Discussions</li>
                <li>Giscus processes data according to their Privacy Policy</li>
              </ul>
              <p className="mt-4">
                To comment, you must have a GitHub account. Giscus's use of your information is governed by their Privacy Policy. You can learn more at <a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">giscus.app</a>.
              </p>
            </div>

            <h2>5. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party service providers (like Google Analytics and Giscus) who assist us in operating our Service, subject to confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation, or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of the transaction</li>
              <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:
            </p>
            <ul>
              <li><strong>Contact Form Submissions:</strong> Retained for up to 2 years or until you request deletion</li>
              <li><strong>Comments:</strong> Retained indefinitely as part of the public discussion threads (managed by Giscus/GitHub)</li>
              <li><strong>Analytics Data:</strong> Google Analytics data is retained according to Google's data retention policies (typically 26 months)</li>
            </ul>

            <h2>7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6 not-prose">
              <h3 className="text-xl font-bold mb-4">Your Rights Include:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-Out:</strong> Opt out of certain data collection (e.g., Google Analytics)</li>
              </ul>
            </div>

            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request within 30 days.
            </p>

            <h3>7.1 California Privacy Rights (CCPA)</h3>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information (we do not sell personal information).
            </p>

            <h3>7.2 European Privacy Rights (GDPR)</h3>
            <p>
              If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, and object to processing.
            </p>

            <h2>8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our Service, you consent to the transfer of your information to these countries. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information.
            </p>

            <h2>11. Links to Other Websites</h2>
            <p>
              Our Service may contain links to other websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the privacy policy of every website you visit.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We may also notify you via email or a prominent notice on our Service if changes are material.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg not-prose">
              <p className="mb-2"><strong>Email:</strong> <Link href="/contact" className="text-blue-600 hover:underline">Contact Form</Link></p>
              <p className="mb-2"><strong>Website:</strong> <Link href="/contact" className="text-blue-600 hover:underline">scripturemeanings.com/contact</Link></p>
              <p className="mb-0">We will respond to your inquiry as soon as possible.</p>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-sm text-gray-600">
                This Privacy Policy is effective as of {lastUpdated}. By continuing to use our Service after this date, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


