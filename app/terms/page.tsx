import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Restaurant Supplies Direct",
  description: "Terms of Service for Restaurant Supplies Direct. Review our terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
            Terms of Service
          </h1>
          <p className="text-sm text-ink-muted mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-sm max-w-none text-ink-muted space-y-6">
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Agreement to Terms</h2>
              <p>
                By accessing or using Restaurant Supplies Direct ("the Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Use of Services</h2>
              <p className="mb-3">You agree to use our services only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the site for fraudulent purposes</li>
                <li>Impersonate others or provide false information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Account Registration</h2>
              <p>
                When you create an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Orders and Pricing</h2>
              <p className="mb-3">
                All orders are subject to acceptance by Restaurant Supplies Direct. We reserve the right to refuse or cancel any order for any reason, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Product availability</li>
                <li>Errors in pricing or product information</li>
                <li>Suspected fraudulent transactions</li>
                <li>Credit or payment issues</li>
              </ul>
              <p className="mt-4">
                Prices are subject to change without notice. We strive to display accurate pricing, but errors may occur. If a product is listed at an incorrect price, we reserve the right to refuse or cancel orders placed for that product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Payment Terms</h2>
              <p>
                Payment is due at the time of order unless otherwise arranged through our wholesale programs. We accept major credit cards and other payment methods as displayed on our site. You represent that you have the legal right to use any payment method you provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Shipping and Delivery</h2>
              <p>
                Shipping costs and delivery times are estimates and may vary. Title and risk of loss pass to you upon delivery to the carrier. We are not responsible for delays caused by carriers or circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Returns and Refunds</h2>
              <p className="mb-3">
                Returns are accepted within 30 days of delivery for most products, subject to our return policy. Products must be:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unused and in original condition</li>
                <li>In original packaging</li>
                <li>Accompanied by proof of purchase</li>
              </ul>
              <p className="mt-4">
                Custom printed items and special orders are generally not returnable. Contact us for specific return authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Intellectual Property</h2>
              <p>
                All content on this site, including text, graphics, logos, images, and software, is owned by Restaurant Supplies Direct or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Disclaimers</h2>
              <p className="mb-3">
                THE SITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy, reliability, or completeness of content</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, RESTAURANT SUPPLIES DIRECT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF OUR SERVICES.
              </p>
              <p className="mt-3">
                Our total liability for any claim arising from your use of our services shall not exceed the amount you paid for the products or services giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Restaurant Supplies Direct, Shure Hospitality Wholesale, and their officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in Los Angeles, California, in accordance with the rules of the American Arbitration Association. You waive any right to a jury trial or to participate in a class action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Contact Us</h2>
              <p className="mb-3">
                For questions about these Terms of Service, contact us:
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
