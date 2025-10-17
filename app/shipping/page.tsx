import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Truck, Clock, MapPin, DollarSign, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping Policy | Restaurant Supplies Direct",
  description: "Learn about our shipping rates, delivery times, and policies. Fast, reliable shipping from Los Angeles to your door.",
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
            Shipping Policy
          </h1>
          <p className="text-sm text-ink-muted mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-sm max-w-none text-ink-muted space-y-8">
            {/* Overview Section */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <Package className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-ink mb-3">Shipping Overview</h2>
                  <p>
                    All orders ship from our Los Angeles, CA warehouse. We partner with major carriers to ensure your restaurant supplies arrive quickly and safely. Most orders are processed and shipped within 1-2 business days.
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping Rates */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <DollarSign className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-4">Shipping Rates</h2>
                  <div className="space-y-4">
                    <div className="bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
                      <h3 className="font-bold text-ink mb-2">Free Standard Shipping</h3>
                      <p>Orders over $150 ship free via standard ground shipping to the continental United States.</p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50 border-b">
                            <th className="text-left p-3 font-semibold text-ink">Order Value</th>
                            <th className="text-left p-3 font-semibold text-ink">Standard Ground</th>
                            <th className="text-left p-3 font-semibold text-ink">Express (2-3 Days)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-3">Under $50</td>
                            <td className="p-3">$12.99</td>
                            <td className="p-3">$24.99</td>
                          </tr>
                          <tr>
                            <td className="p-3">$50 - $99.99</td>
                            <td className="p-3">$9.99</td>
                            <td className="p-3">$19.99</td>
                          </tr>
                          <tr>
                            <td className="p-3">$100 - $149.99</td>
                            <td className="p-3">$7.99</td>
                            <td className="p-3">$16.99</td>
                          </tr>
                          <tr className="bg-accent/5">
                            <td className="p-3 font-bold">$150+</td>
                            <td className="p-3 font-bold text-accent">FREE</td>
                            <td className="p-3">$14.99</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-sm mt-4">
                      <strong>Note:</strong> Shipping costs are calculated at checkout based on your location, order weight, and selected shipping method. Large or heavy orders may require freight shipping (see below).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Delivery Times */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-4">Delivery Timeframes</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-bold text-ink mb-2">Standard Ground</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span><strong>California:</strong> 1-3 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span><strong>Western States:</strong> 2-4 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span><strong>Central States:</strong> 3-5 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span><strong>Eastern States:</strong> 4-6 business days</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-bold text-ink mb-2">Express Shipping</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span><strong>2-Day Express:</strong> Delivery in 2 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span><strong>Overnight:</strong> Next business day delivery (contact us for rates)</span>
                        </li>
                      </ul>
                      <p className="text-sm mt-3 text-ink-muted">
                        Express orders must be placed by 2:00 PM PST for same-day processing.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <strong>Important:</strong> Delivery timeframes are estimates and begin after your order ships. Business days exclude weekends and holidays. Actual delivery times may vary based on carrier schedules and destination.
                  </p>
                </div>
              </div>
            </section>

            {/* LA Local Delivery */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-4">Los Angeles Local Delivery</h2>
                  <p className="mb-4">
                    We offer special local delivery service for customers in the Los Angeles area, including same-day and next-day options.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Same-Day Delivery:</strong> Available for orders placed before 11:00 AM PST ($25 flat rate, $200 minimum order)</li>
                    <li><strong>Next-Day Delivery:</strong> $15 flat rate for orders over $100</li>
                    <li><strong>Free Local Delivery:</strong> Orders over $300</li>
                  </ul>
                  <p className="mt-4">
                    <a href="/la-hospitality-supplies" className="text-accent hover:underline font-semibold">
                      Learn more about our LA local delivery service →
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* International & Alaska/Hawaii */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-4">Alaska, Hawaii & International Shipping</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-ink mb-2">Alaska & Hawaii</h3>
                      <p>
                        We ship to Alaska and Hawaii via USPS Priority Mail or freight carriers. Shipping costs and delivery times vary based on weight and destination. Please contact us for a quote.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-ink mb-2">International Orders</h3>
                      <p>
                        International shipping is available on a case-by-case basis for bulk orders. Please <a href="/contact" className="text-accent hover:underline">contact us</a> for rates and delivery estimates. Customer is responsible for all customs duties, taxes, and import fees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Freight & Large Orders */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Freight Shipping (Bulk Orders)</h2>
              <p className="mb-3">
                Orders exceeding 150 lbs or with large dimensions may require freight shipping via pallet. Freight shipments:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Typically deliver within 3-7 business days to commercial addresses</li>
                <li>Require a signature upon delivery</li>
                <li>Are delivered curbside (inside delivery available for additional fee)</li>
                <li>May have additional charges for residential delivery, liftgate service, or limited access areas</li>
              </ul>
              <p className="mt-4">
                We'll contact you with freight quotes and coordinate delivery for large orders. Volume discounts are available for wholesale customers.
              </p>
            </section>

            {/* Order Processing */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Order Processing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Orders are typically processed within 1-2 business days</li>
                <li>You'll receive an email confirmation when your order is placed</li>
                <li>You'll receive a shipping confirmation with tracking information once your order ships</li>
                <li>Orders placed on weekends or holidays are processed the next business day</li>
                <li>Custom printing orders may require additional processing time (typically 3-5 business days)</li>
              </ul>
            </section>

            {/* Tracking */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Order Tracking</h2>
              <p>
                Once your order ships, you'll receive a tracking number via email. You can track your shipment directly through the carrier's website. If you have any questions about your order status, contact us at <a href="tel:+13102436757" className="text-accent hover:underline">(310) 243-6757</a> or <a href="mailto:info@restaurantsuppliesdirect.com" className="text-accent hover:underline">info@restaurantsuppliesdirect.com</a>.
              </p>
            </section>

            {/* Damaged or Lost */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Damaged or Lost Shipments</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-ink mb-2">Damaged Items</h3>
                  <p>
                    Please inspect your order upon delivery. If items are damaged, note it on the delivery receipt and contact us within 48 hours at <a href="mailto:info@restaurantsuppliesdirect.com" className="text-accent hover:underline">info@restaurantsuppliesdirect.com</a> with photos of the damage. We'll arrange for a replacement or refund.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-ink mb-2">Lost Packages</h3>
                  <p>
                    If your tracking shows delivered but you haven't received your package, please check with neighbors and building management. If still not found, contact us within 7 days and we'll file a claim with the carrier.
                  </p>
                </div>
              </div>
            </section>

            {/* Address Changes */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Address Changes & Refused Shipments</h2>
              <p className="mb-3">
                Please double-check your shipping address before placing your order. If you need to update your shipping address:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us immediately if your order hasn't shipped yet</li>
                <li>Once shipped, we can attempt to redirect with the carrier (additional fees may apply)</li>
                <li>Refused shipments or returns to sender due to incorrect addresses may incur return shipping fees</li>
              </ul>
            </section>

            {/* PO Boxes */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">PO Boxes & Military Addresses</h2>
              <p>
                We ship to PO Boxes via USPS only. Large or heavy orders cannot be shipped to PO Boxes. APO/FPO military addresses are accepted and shipped via USPS Priority Mail. Delivery times to military addresses vary and may take 2-3 weeks.
              </p>
            </section>

            {/* Business vs Residential */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Business vs. Residential Delivery</h2>
              <p>
                Shipping rates may differ for business and residential addresses. Business addresses typically have lower rates and faster delivery. Please provide accurate address type during checkout. Residential deliveries may have additional fees for large or freight shipments.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-accent/5 rounded-lg p-6 border border-accent/20">
              <h2 className="text-2xl font-heading font-bold text-ink mb-4">Questions About Shipping?</h2>
              <p className="mb-4">
                Our team is here to help! Contact us for shipping quotes, bulk order arrangements, or any questions about our shipping policies.
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-accent" />
                  <span>Email: <a href="mailto:info@restaurantsuppliesdirect.com" className="text-accent hover:underline font-semibold">info@restaurantsuppliesdirect.com</a></span>
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-accent" />
                  <span>Phone: <a href="tel:+13102436757" className="text-accent hover:underline font-semibold">(310) 243-6757</a></span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
