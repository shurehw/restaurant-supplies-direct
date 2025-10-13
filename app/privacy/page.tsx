import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Restaurant Supplies Direct",
  description: "Privacy Policy for Restaurant Supplies Direct. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-ink-muted mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-sm max-w-none text-ink-muted space-y-6">
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Introduction</h2>
              <p>
                Restaurant Supplies Direct ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Information We Collect</h2>
              <p className="mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number, and shipping address</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Account credentials when you create an account</li>
                <li>Communications you send to us</li>
                <li>Information about your orders and preferences</li>
              </ul>
              <p className="mt-4">
                We also automatically collect certain information when you visit our site, including IP address, browser type, device information, pages viewed, and interaction data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Detect and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Information Sharing</h2>
              <p className="mb-3">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who help us operate our business (shipping, payment processing, email services)</li>
                <li>Shure Hospitality Wholesale, our parent company and fulfillment partner</li>
                <li>Law enforcement or regulatory authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and deliver personalized content. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing</li>
                <li>Opt out of marketing communications</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at info@restaurantsuppliesdirect.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Contact Us</h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>Email: info@restaurantsuppliesdirect.com</li>
                <li>Phone: (310) 243-6757</li>
                <li>Address: Los Angeles, CA</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
