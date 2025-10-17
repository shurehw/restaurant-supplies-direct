import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RefreshCw, PackageCheck, AlertCircle, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy | Restaurant Supplies Direct",
  description: "Learn about our returns, refunds, and exchange policy. We stand behind our products with a satisfaction guarantee.",
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
            Returns & Refunds Policy
          </h1>
          <p className="text-sm text-ink-muted mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-sm max-w-none text-ink-muted space-y-8">
            {/* Overview */}
            <section className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
              <div className="flex items-start gap-4">
                <PackageCheck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-ink mb-3">Our Commitment to You</h2>
                  <p>
                    We stand behind the quality of our products. If you're not completely satisfied with your order, we're here to help. We offer returns, exchanges, and refunds within 30 days of delivery for most products.
                  </p>
                </div>
              </div>
            </section>

            {/* Return Eligibility */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <RefreshCw className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-4">Return Eligibility</h2>
                  <p className="mb-4">To be eligible for a return, items must meet the following criteria:</p>

                  <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                    <h3 className="font-bold text-ink mb-3">Returnable Items</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Unopened, unused products in original packaging</li>
                      <li>Items returned within 30 days of delivery</li>
                      <li>Products that are not damaged due to customer misuse</li>
                      <li>Non-custom, non-personalized items</li>
                      <li>Items with original labels and tags attached</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h3 className="font-bold text-ink mb-3">Non-Returnable Items</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Custom printed products</strong> - Cannot be returned unless defective</li>
                      <li><strong>Opened food service items</strong> - For hygiene and safety reasons</li>
                      <li><strong>Clearance or final sale items</strong> - Marked as non-returnable at purchase</li>
                      <li><strong>Items opened from sealed packaging</strong> - Once sanitary seals are broken</li>
                      <li><strong>Special orders</strong> - Made-to-order or special request items</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Return Timeframes */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-4">Return Timeframes</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-bold text-ink mb-2">Standard Returns</h3>
                      <p className="text-sm">30 days from delivery date for unopened items in original condition</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-bold text-ink mb-2">Defective Items</h3>
                      <p className="text-sm">Report within 48 hours of delivery for damaged or defective products</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-bold text-ink mb-2">Wrong Item Shipped</h3>
                      <p className="text-sm">Notify us within 7 days of delivery - we'll arrange free return shipping</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-bold text-ink mb-2">Custom Printed Orders</h3>
                      <p className="text-sm">Defects must be reported within 48 hours of delivery with photo evidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Return */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">How to Initiate a Return</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Contact Us</h3>
                    <p>Email <a href="mailto:info@restaurantsuppliesdirect.com" className="text-accent hover:underline">info@restaurantsuppliesdirect.com</a> or call <a href="tel:+13102436757" className="text-accent hover:underline">(310) 243-6757</a> with your order number and reason for return.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Receive RMA Number</h3>
                    <p>We'll issue a Return Merchandise Authorization (RMA) number and provide return instructions. <strong>Do not return items without an RMA number.</strong></p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Pack & Ship</h3>
                    <p>Securely package items in original packaging if possible. Include the RMA number on the outside of the box. Ship to the provided return address.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Inspection & Refund</h3>
                    <p>Once we receive and inspect your return (typically 3-5 business days), we'll process your refund or exchange.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Return Shipping */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Return Shipping Costs</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left p-3 font-semibold text-ink">Return Reason</th>
                      <th className="text-left p-3 font-semibold text-ink">Shipping Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3">Defective or damaged items</td>
                      <td className="p-3 font-semibold text-accent">Free - We cover return shipping</td>
                    </tr>
                    <tr>
                      <td className="p-3">Wrong item shipped (our error)</td>
                      <td className="p-3 font-semibold text-accent">Free - We cover return shipping</td>
                    </tr>
                    <tr>
                      <td className="p-3">Changed mind / No longer needed</td>
                      <td className="p-3">Customer pays return shipping</td>
                    </tr>
                    <tr>
                      <td className="p-3">Ordered wrong item</td>
                      <td className="p-3">Customer pays return shipping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <strong>Tip:</strong> We recommend using a trackable shipping method. We are not responsible for returns lost in transit.
              </p>
            </section>

            {/* Refunds */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Refunds</h2>
              <div className="space-y-4">
                <p>Once your return is received and inspected, we will notify you via email about the approval status of your refund.</p>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-bold text-ink mb-3">Refund Processing Times</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span><strong>Inspection:</strong> 3-5 business days after we receive your return</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span><strong>Refund processing:</strong> 5-10 business days to original payment method</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span><strong>Bank/card processing:</strong> May take additional 3-5 days depending on your financial institution</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-ink mb-2">Partial Refunds</h3>
                  <p className="mb-2">In some cases, only partial refunds are granted:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Items with obvious signs of use or missing packaging</li>
                    <li>Items damaged not due to our error or shipping damage</li>
                    <li>Items returned more than 30 days after delivery</li>
                    <li>Opened or unsealed products where applicable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-ink mb-2">Restocking Fees</h3>
                  <p>A 20% restocking fee may apply to large orders (over $1,000) returned due to customer preference or ordering error. This fee does not apply to defective items or our shipping errors.</p>
                </div>
              </div>
            </section>

            {/* Exchanges */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Exchanges</h2>
              <p className="mb-4">
                We're happy to exchange items for different sizes, quantities, or products of equal value. To exchange an item:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Follow the return process above and indicate you'd like an exchange</li>
                <li>Specify the replacement item you'd like</li>
                <li>We'll ship the replacement once we receive your return</li>
                <li>If there's a price difference, we'll charge or refund accordingly</li>
              </ol>
              <p className="mt-4">
                <strong>Faster option:</strong> Place a new order for the correct item while returning the unwanted item. This ensures faster delivery of your needed products.
              </p>
            </section>

            {/* Damaged or Defective */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-4">Damaged or Defective Items</h2>
                  <p className="mb-4">
                    We inspect all orders before shipping, but damage can occur in transit. If you receive damaged or defective items:
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <ul className="space-y-2">
                      <li><strong>1. Document the damage:</strong> Take photos of the product and shipping box</li>
                      <li><strong>2. Note on delivery receipt:</strong> If damage is visible, note it when signing for delivery</li>
                      <li><strong>3. Contact us within 48 hours:</strong> Email photos to <a href="mailto:info@restaurantsuppliesdirect.com" className="text-accent hover:underline">info@restaurantsuppliesdirect.com</a></li>
                      <li><strong>4. We'll arrange replacement:</strong> We'll send a replacement or issue a full refund at no cost to you</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-sm">
                    We may file a claim with the shipping carrier for damaged items, which is why photos are important.
                  </p>
                </div>
              </div>
            </section>

            {/* Wholesale/Bulk Orders */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Wholesale & Bulk Order Returns</h2>
              <p className="mb-3">
                For large wholesale orders (over $2,500), special return terms may apply:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Returns must be arranged through your account manager</li>
                <li>Palletized returns may require freight pickup arrangements</li>
                <li>Restocking fees may be higher for very large orders</li>
                <li>Custom quoted orders may have different return policies</li>
              </ul>
              <p className="mt-4">
                Contact your account manager or email <a href="mailto:info@restaurantsuppliesdirect.com" className="text-accent hover:underline">info@restaurantsuppliesdirect.com</a> for wholesale return arrangements.
              </p>
            </section>

            {/* Custom Printed Products */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Custom Printed Products</h2>
              <p className="mb-4">
                Custom printed items are made specifically for you and generally cannot be returned unless:
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span><strong>Printing defects:</strong> Smudged, misaligned, or incorrect colors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span><strong>Wrong design printed:</strong> Not matching approved proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span><strong>Product defects:</strong> Damaged containers, lids, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✗</span>
                    <span><strong>Design changes:</strong> Once approved by customer, design cannot be changed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✗</span>
                    <span><strong>Change of mind:</strong> Cannot return custom work if produced correctly</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-sm bg-blue-50 border border-blue-200 rounded-lg p-4">
                <strong>Important:</strong> Please carefully review and approve all custom printing proofs before production. We require written approval before proceeding with custom orders.
              </p>
            </section>

            {/* Cancellations */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Order Cancellations</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-ink mb-2">Before Shipping</h3>
                  <p>
                    Orders can be cancelled free of charge if they haven't shipped yet. Contact us immediately at <a href="tel:+13102436757" className="text-accent hover:underline">(310) 243-6757</a>. Once an order ships, standard return policies apply.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-ink mb-2">Custom Orders</h3>
                  <p>
                    Custom printing orders cannot be cancelled once production has begun (typically 24-48 hours after proof approval).
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-accent/5 rounded-lg p-6 border border-accent/20">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-ink mb-4">Questions About Returns?</h2>
                  <p className="mb-4">
                    Our customer service team is here to help make your return as smooth as possible.
                  </p>
                  <ul className="list-none space-y-2">
                    <li>
                      <strong>Email:</strong> <a href="mailto:info@restaurantsuppliesdirect.com" className="text-accent hover:underline">info@restaurantsuppliesdirect.com</a>
                    </li>
                    <li>
                      <strong>Phone:</strong> <a href="tel:+13102436757" className="text-accent hover:underline">(310) 243-6757</a>
                    </li>
                    <li>
                      <strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM PST
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Policy Updates</h2>
              <p>
                We reserve the right to update this returns policy at any time. Changes will be posted on this page with an updated revision date. Your use of our site after changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
