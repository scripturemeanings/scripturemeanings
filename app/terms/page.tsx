import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Scripture Meanings',
  description: 'Terms of Service for Scripture Meanings - Read our terms and conditions for using our website.',
}

export default function TermsPage() {
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
          <span className="text-gray-900">Terms of Service</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our website.
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
                <strong>Quick Summary:</strong> By using Scripture Meanings, you agree to use our content for personal, non-commercial purposes. Our content is provided for informational purposes and should not replace professional biblical counseling or theological advice.
              </p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Scripture Meanings ("we," "our," or "us") at scripturemeanings.com (the "Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of the Service after any changes constitutes your acceptance of the new Terms. We will notify you of material changes by updating the "Last updated" date at the top of this page.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Scripture Meanings is an educational website that provides articles, interpretations, and insights about biblical scripture, numbers, dreams, symbols, and related topics. Our content is intended for informational and educational purposes only.
            </p>

            <h2>3. Use License</h2>
            <p>
              Permission is granted to temporarily access and use the materials on Scripture Meanings for personal, non-commercial, informational purposes only. This is a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempt to reverse engineer any software contained on the Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession, whether in electronic or printed format.
            </p>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              The Service and its original content, features, and functionality are owned by Scripture Meanings and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, articles, and software, is the property of Scripture Meanings or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without our prior written consent.
            </p>
            <p>
              Biblical scripture quotations may be from various translations and are used for educational purposes. Scripture quotations are typically in the public domain or used under fair use principles.
            </p>

            <h2>5. User Conduct</h2>
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Service in any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>Transmit any material that is abusive, harassing, defamatory, obscene, or otherwise objectionable</li>
              <li>Impersonate or attempt to impersonate Scripture Meanings, a Scripture Meanings employee, another user, or any other person or entity</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service</li>
              <li>Use any robot, spider, or other automatic device to access the Service for any purpose without our express written permission</li>
            </ul>

            <h2>6. User Comments and Content</h2>
            <p>
              Our Service includes a commenting system powered by Giscus (GitHub Discussions). When you post comments:
            </p>
            <ul>
              <li>You retain ownership of your comments</li>
              <li>You grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display your comments</li>
              <li>You are responsible for your comments and represent that you have the right to post them</li>
              <li>Comments must be respectful, relevant, and comply with these Terms</li>
              <li>We reserve the right to remove any comments that violate these Terms or are otherwise objectionable</li>
            </ul>
            <p>
              We do not endorse or assume responsibility for any comments posted by users. Comments reflect the views of the individual commenter, not Scripture Meanings.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              The materials on Scripture Meanings are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation:
            </p>
            <ul>
              <li>Implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights</li>
              <li>Any warranty that the Service will be uninterrupted, timely, secure, or error-free</li>
              <li>Any warranty that the results obtained from use of the Service will be accurate or reliable</li>
              <li>Any warranty regarding the accuracy, completeness, or usefulness of any information on the Service</li>
            </ul>
            <p>
              <strong>Important:</strong> Our content is provided for informational and educational purposes only. It should not be considered as professional theological, biblical counseling, or spiritual advice. Always consult with qualified religious leaders, biblical scholars, or counselors for matters requiring professional guidance.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall Scripture Meanings, its officers, directors, employees, agents, or affiliates be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Scripture Meanings, even if Scripture Meanings or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            <p>
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
            <p>
              Our total liability to you for all claims arising from or related to the use of the Service shall not exceed the amount you paid to us, if any, for accessing the Service, or $100, whichever is greater.
            </p>

            <h2>9. Accuracy of Materials</h2>
            <p>
              The materials appearing on Scripture Meanings could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice. However, we do not make any commitment to update the materials.
            </p>
            <p>
              Biblical interpretations and theological perspectives may vary. Our content represents our research and understanding but should not be considered the definitive or only interpretation of biblical texts.
            </p>

            <h2>10. Links to Third-Party Websites</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by Scripture Meanings. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p>
              You acknowledge and agree that Scripture Meanings shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Scripture Meanings, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
            </p>

            <h2>12. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2>13. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in the United States.
            </p>
            <p>
              If you are located outside the United States, you agree that any disputes will be resolved in accordance with the laws of the United States, and you consent to the jurisdiction of United States courts.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Scripture Meanings regarding the use of the Service and supersede all prior agreements and understandings.
            </p>

            <h2>16. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg not-prose">
              <p className="mb-2"><strong>Email:</strong> <Link href="/contact" className="text-blue-600 hover:underline">Contact Form</Link></p>
              <p className="mb-2"><strong>Website:</strong> <Link href="/contact" className="text-blue-600 hover:underline">scripturemeanings.com/contact</Link></p>
              <p className="mb-0">We will respond to your inquiry as soon as possible.</p>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-sm text-gray-600">
                These Terms of Service are effective as of {lastUpdated}. By continuing to use our Service after this date, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
            </div>
          </div>
      </div>
      </section>
    </div>
  )
}


