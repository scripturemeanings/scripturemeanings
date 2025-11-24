import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy | Scripture Meanings',
  description: 'Cookie Policy for Scripture Meanings - Learn about how we use cookies and how to manage them.',
}

export default function CookiesPage() {
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
          <span className="text-gray-900">Cookie Policy</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Learn about how we use cookies and how you can manage your cookie preferences.
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
                <strong>Quick Summary:</strong> We use cookies to improve your experience and analyze website traffic. We use Google Analytics cookies and Giscus cookies for comments. You can control cookies through your browser settings or opt out of Google Analytics.
              </p>
            </div>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p>
              Cookies allow a website to recognize your device and store some information about your preferences or past actions. They help websites remember information about your visit, like your preferred language and other settings, which can make your next visit easier and the site more useful to you.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              Scripture Meanings uses cookies to enhance your browsing experience, analyze site traffic, and understand how visitors interact with our content. We use both first-party cookies (set by our website) and third-party cookies (set by other services we use).
            </p>

            <h2>3. Types of Cookies We Use</h2>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6 not-prose">
              <h3 className="text-xl font-bold mb-4">3.1 Necessary Cookies</h3>
              <p className="mb-4">
                These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Purpose:</strong> Essential for website functionality</li>
                <li><strong>Duration:</strong> Session cookies (deleted when you close your browser)</li>
                <li><strong>Can you opt out?</strong> No - these are required for the website to work</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6 not-prose">
              <h3 className="text-xl font-bold mb-4">3.2 Analytics Cookies (Google Analytics)</h3>
              <p className="mb-4">
                We use Google Analytics to understand how visitors use our website. These cookies collect information about:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Pages you visit and how long you spend on each page</li>
                <li>How you arrived at our website (referral source)</li>
                <li>Your approximate geographic location (country/region level)</li>
                <li>Device and browser information</li>
                <li>Click patterns and navigation paths</li>
              </ul>
              <p className="mb-2"><strong>Cookies Used:</strong></p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>_ga:</strong> Used to distinguish users (expires after 2 years)</li>
                <li><strong>_ga_*:</strong> Used to persist session state (expires after 2 years)</li>
                <li><strong>_gid:</strong> Used to distinguish users (expires after 24 hours)</li>
                <li><strong>_gat:</strong> Used to throttle request rate (expires after 1 minute)</li>
              </ul>
              <p className="mb-2"><strong>Duration:</strong> Up to 2 years</p>
              <p className="mb-2"><strong>Third-Party:</strong> Google Analytics (Google LLC)</p>
              <p className="mb-0">
                <strong>Opt Out:</strong> You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a> or by adjusting your browser settings.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-6 not-prose">
              <h3 className="text-xl font-bold mb-4">3.3 Functionality Cookies (Giscus Comments)</h3>
              <p className="mb-4">
                Our commenting system (Giscus) uses cookies to enable comment functionality and remember your preferences:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>Purpose:</strong> Enable commenting functionality, remember your GitHub authentication, and store comment preferences</li>
                <li><strong>Duration:</strong> Varies (some session cookies, some persistent)</li>
                <li><strong>Third-Party:</strong> Giscus (powered by GitHub)</li>
                <li><strong>Data Collected:</strong> GitHub username, authentication status, comment preferences</li>
              </ul>
              <p className="mb-0">
                <strong>More Information:</strong> Giscus uses cookies according to their privacy policy. You can learn more at <a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">giscus.app</a>.
              </p>
            </div>

            <h2>4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements. These third parties may set their own cookies or similar technologies to collect information about your online activities across different websites.
            </p>
            <p>
              The third-party services we use that may set cookies include:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and traffic analysis</li>
              <li><strong>Giscus:</strong> For comment functionality and user authentication</li>
            </ul>
            <p>
              These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies, and they are subject to the privacy policies of the respective third parties.
            </p>

            <h2>5. How Long Do Cookies Last?</h2>
            <p>Cookies can be either "session" or "persistent" cookies:</p>
            <ul>
              <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They help websites remember what you did on a page during a single visit.</li>
              <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you delete them. They help websites remember your preferences and actions across multiple visits.</li>
            </ul>
            <p>
              The specific duration of each cookie is listed in the cookie descriptions above. Most analytics cookies persist for up to 2 years, while session cookies are deleted when you close your browser.
            </p>

            <h2>6. Managing Your Cookie Preferences</h2>
            <p>
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg mb-6 not-prose">
              <h3 className="text-xl font-bold mb-4">How to Manage Cookies in Your Browser</h3>
              <p className="mb-4">You can control cookies through your browser settings. Here are links to instructions for popular browsers:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Internet Explorer</a></li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6 not-prose">
              <h3 className="text-xl font-bold mb-4">Opt Out of Google Analytics</h3>
              <p className="mb-4">
                To opt out of Google Analytics tracking, you can:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Google Analytics Opt-out Browser Add-on</a></li>
                <li>Adjust your browser settings to block third-party cookies</li>
                <li>Use browser extensions that block tracking cookies</li>
              </ul>
            </div>

            <h2>7. Impact of Disabling Cookies</h2>
            <p>
              If you choose to disable cookies, some features of our website may not function properly:
            </p>
            <ul>
              <li>You may not be able to comment on articles (requires Giscus cookies)</li>
              <li>Some website features may not work as intended</li>
              <li>Your preferences may not be saved between visits</li>
            </ul>
            <p>
              However, you will still be able to browse and read all of our content.
            </p>

            <h2>8. Do Not Track Signals</h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. As a result, our Service does not currently respond to DNT browser signals or mechanisms.
            </p>

            <h2>9. Cookies and Personal Information</h2>
            <p>
              Cookies themselves do not typically contain personal information. However, when combined with other information we collect (such as your IP address or contact form submissions), cookies may be used to identify you. For more information about how we collect and use personal information, please see our <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>10. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg not-prose">
              <p className="mb-2"><strong>Email:</strong> <Link href="/contact" className="text-blue-600 hover:underline">Contact Form</Link></p>
              <p className="mb-2"><strong>Website:</strong> <Link href="/contact" className="text-blue-600 hover:underline">scripturemeanings.com/contact</Link></p>
              <p className="mb-0">We will respond to your inquiry as soon as possible.</p>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-sm text-gray-600">
                This Cookie Policy is effective as of {lastUpdated}. By continuing to use our Service after this date, you acknowledge that you have read and understood this Cookie Policy.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mt-8 not-prose">
              <h3 className="text-xl font-bold mb-4">Related Policies</h3>
              <p className="mb-0">
                For more information about how we handle your personal information, please review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>.
              </p>
            </div>
          </div>
      </div>
      </section>
    </div>
  )
}


