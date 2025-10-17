import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gloves and Food Safety: Complete Compliance Guide for Restaurants | RSD Blog",
  description: "Essential guide to food safety gloves, proper usage, compliance requirements, and choosing the right gloves for your restaurant operations.",
  keywords: ["food safety gloves", "restaurant gloves", "nitrile gloves", "vinyl gloves", "food safety compliance", "food handler gloves", "disposable gloves"],
};

export default function GlovesFoodSafetyCompliance() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/blog" className="text-sm text-ink-muted hover:text-ink transition-colors mb-4 inline-block">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-sm text-ink-muted mb-4">
              <span className="px-3 py-1 bg-gray-100 text-black font-semibold rounded-full">
                Food Safety
              </span>
              <time dateTime="2025-10-16">Oct 16, 2025</time>
              <span>•</span>
              <span>9 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4 leading-tight">
              Gloves and Food Safety: Complete Compliance Guide for Restaurants
            </h1>
            <p className="text-lg text-ink-muted">
              Everything you need to know about selecting food service gloves, proper usage, compliance requirements, and maintaining food safety standards.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop"
              alt="Chef wearing food safety gloves in restaurant kitchen"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-ink-muted space-y-6">
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Why Food Service Gloves Matter</h2>
              <p>
                Disposable gloves are a critical component of food safety, protecting both your customers from contamination and your staff from exposure to allergens, chemicals, and raw meats. But gloves are only effective when you choose the right type and use them correctly.
              </p>
              <p>
                Improper glove use can create a false sense of security, leading to cross-contamination and health code violations. Health inspectors look closely at glove practices—incorrect usage is one of the most common violations in food service establishments.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-6">
                <p className="font-semibold text-ink mb-3">Key facts about food service gloves:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gloves are not a substitute for handwashing</li>
                  <li>Gloves must be changed frequently to prevent cross-contamination</li>
                  <li>Different tasks require different glove types</li>
                  <li>Some jurisdictions have specific glove requirements</li>
                  <li>Improper glove use can lead to health code violations and fines</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Types of Food Service Gloves</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Nitrile Gloves</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Synthetic rubber (latex-free, no allergy concerns)</li>
                  <li>Excellent puncture and tear resistance</li>
                  <li>Good chemical resistance (oils, greases, cleaning chemicals)</li>
                  <li>Textured grip for wet and dry handling</li>
                  <li>Available in various thicknesses (3-8 mil typical)</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Handling raw meats, poultry, seafood</li>
                  <li>Heavy-duty food prep</li>
                  <li>Tasks requiring durability and protection</li>
                  <li>Cleaning and sanitation tasks</li>
                  <li>Staff with latex allergies</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Cost:</p>
                <p>$0.08-0.20 per glove (varies by thickness and quality)</p>
                <p className="mt-3">
                  <strong>Recommendation:</strong> Nitrile is the industry standard for most food service applications. The extra cost over vinyl is worth it for durability and safety.
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Vinyl Gloves</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Synthetic plastic (PVC-based)</li>
                  <li>Latex-free and powder-free options</li>
                  <li>Most economical option</li>
                  <li>Looser fit than nitrile</li>
                  <li>Lower puncture resistance</li>
                  <li>Less elastic, can tear more easily</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Light-duty, short-duration tasks</li>
                  <li>Non-hazardous food handling (sandwiches, salads, pastries)</li>
                  <li>High-volume operations prioritizing cost</li>
                  <li>Tasks not involving raw meat or heavy prep</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Cost:</p>
                <p>$0.03-0.08 per glove</p>
                <p className="mt-3">
                  <strong>Limitations:</strong> Not recommended for raw meat handling or tasks requiring durability. Tears and punctures more easily than nitrile.
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Poly Gloves (Food Service Film Gloves)</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Thin polyethylene film</li>
                  <li>Very inexpensive</li>
                  <li>Loose-fitting, easy on/off</li>
                  <li>Minimal protection</li>
                  <li>Often used in dispensers or dispensed from boxes</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Very quick tasks (assembling a sandwich, wrapping food)</li>
                  <li>Minimal contact food handling</li>
                  <li>Deli counters for slicing and wrapping</li>
                  <li>Not recommended for raw meat or extensive prep</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Cost:</p>
                <p>$0.01-0.03 per glove (extremely economical)</p>
                <p className="mt-3">
                  <strong>Use case:</strong> Best as a cost-effective option for very brief, light tasks. Not suitable as your primary kitchen glove.
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Latex Gloves (Less Common Now)</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Natural rubber</li>
                  <li>Excellent fit, comfort, and dexterity</li>
                  <li>Good puncture resistance</li>
                  <li><strong>Major drawback:</strong> Latex allergies are common</li>
                </ul>
                <p className="mt-3">
                  <strong>Important:</strong> Many food service operations have banned latex gloves due to allergy concerns affecting both staff and customers. Nitrile is now the preferred alternative with similar performance and no allergy risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Glove Sizing and Fit</h2>
              <p>
                Proper fit is critical for both safety and efficiency. Too tight and gloves tear easily; too loose and they slip off or interfere with dexterity.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Standard sizing:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Small:</strong> Typically fits women and smaller-handed individuals</li>
                  <li><strong>Medium:</strong> Most common size for general staff</li>
                  <li><strong>Large:</strong> Larger hands, often men</li>
                  <li><strong>Extra Large:</strong> Very large hands</li>
                </ul>
                <p className="mt-4">
                  <strong>Stock multiple sizes:</strong> You should have at least Small, Medium, Large, and XL available. Most operations find Medium and Large are used most frequently, but all sizes are necessary for proper fit across your staff.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-6">
                <p className="font-semibold text-ink mb-3">Proper fit checklist:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Glove reaches past the wrist</li>
                  <li>Fingers fill the glove fingertips (not too long or short)</li>
                  <li>Can make a fist without tearing</li>
                  <li>Not so loose that it slips during work</li>
                  <li>Can perform detailed tasks without excessive bunching</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Powdered vs. Powder-Free Gloves</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Powdered Gloves</h3>
              <p>
                Contain cornstarch or other powder to make donning easier. However, powder can:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Contaminate food</li>
                <li>Trigger allergies in some individuals</li>
                <li>Create airborne particles in kitchen</li>
                <li>Leave residue on surfaces</li>
              </ul>
              <p className="mt-3">
                <strong>Status:</strong> Powdered gloves are being phased out in food service. Many jurisdictions ban them.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Powder-Free Gloves</h3>
              <p>
                Treated with polymer coatings or chlorination to make donning easier without powder.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>No contamination risk</li>
                <li>No allergen concerns from powder</li>
                <li>Industry standard for food service</li>
                <li>Slightly more expensive but safer</li>
              </ul>
              <p className="mt-3">
                <strong>Recommendation:</strong> Always use powder-free gloves in food service. The small cost premium is worth it for food safety and compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">When to Use Gloves: Legal Requirements</h2>
              <p>
                Food safety regulations vary by jurisdiction, but general FDA Food Code guidelines (adopted by most states) provide the framework.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Gloves Required For:</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ready-to-eat foods:</strong> Foods that won't be cooked further before consumption (salads, sandwiches, cut fruits, etc.)</li>
                  <li><strong>Bare hand contact prohibition states:</strong> Some states/cities prohibit bare hand contact with ready-to-eat foods entirely</li>
                  <li><strong>Handling after cooking:</strong> Plating, garnishing, assembling dishes after cooking</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Alternative to Gloves:</h3>
              <p>
                Many jurisdictions allow use of utensils (tongs, spatulas, deli papers) instead of gloves for handling ready-to-eat foods, as long as there's no bare hand contact.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">When Gloves Are NOT Required (But Recommended):</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Washing produce (though recommended for safety)</li>
                  <li>Handling raw meats that will be fully cooked (though highly recommended for hygiene)</li>
                  <li>Cleaning tasks (though recommended for chemical protection)</li>
                </ul>
              </div>

              <p className="mt-4">
                <strong>Important:</strong> Check your local health department regulations. Requirements vary by state and municipality. When in doubt, use gloves—it's better to over-comply than risk violations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Proper Glove Usage: Best Practices</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">When to Change Gloves</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Change gloves immediately:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>When switching between raw and ready-to-eat foods</li>
                  <li>After handling raw meat, poultry, or seafood</li>
                  <li>After touching hair, face, or other body parts</li>
                  <li>After handling trash or cleaning chemicals</li>
                  <li>After touching anything that could contaminate food (phones, door handles, money)</li>
                  <li>When gloves become torn or punctured</li>
                  <li>After 4 hours of continuous use (maximum)</li>
                  <li>Between different tasks</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Critical Rule: Gloves Don't Replace Handwashing</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="mb-3">
                  <strong>Proper sequence:</strong>
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Wash hands thoroughly (20 seconds with soap)</li>
                  <li>Dry hands completely</li>
                  <li>Put on gloves</li>
                  <li>Perform food handling task</li>
                  <li>Remove gloves properly</li>
                  <li>Wash hands again</li>
                </ol>
                <p className="mt-4">
                  Gloves protect food from hands, but hands must be clean before gloving to prevent contaminating the inside of the glove.
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Proper Glove Removal</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="mb-3">
                  Incorrect glove removal can contaminate your hands. Proper technique:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Grasp outside of one glove at wrist</li>
                  <li>Peel away from hand, turning glove inside-out</li>
                  <li>Hold removed glove in gloved hand</li>
                  <li>Slide fingers of bare hand under wrist of remaining glove (touching only inside)</li>
                  <li>Peel off second glove from inside, turning it inside-out and enveloping the first glove</li>
                  <li>Dispose in trash</li>
                  <li>Wash hands immediately</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Common Glove Violations and How to Avoid Them</h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Top violations health inspectors cite:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Not changing gloves between tasks:</strong> Train staff on when glove changes are required. Post reminders.
                  </li>
                  <li>
                    <strong>Touching face/hair with gloved hands:</strong> If you touch anything non-food, change gloves immediately.
                  </li>
                  <li>
                    <strong>Washing gloved hands instead of changing gloves:</strong> Never wash and reuse gloves. Always change them.
                  </li>
                  <li>
                    <strong>Not washing hands before gloving:</strong> Handwashing is required before putting on gloves.
                  </li>
                  <li>
                    <strong>Wearing gloves for non-food tasks:</strong> Don't wear food-handling gloves while taking out trash, handling cash, etc.
                  </li>
                  <li>
                    <strong>Torn or damaged gloves:</strong> Inspect gloves before use; discard any with tears or holes.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Choosing the Right Glove for Each Task</h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Task-based glove selection guide:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Raw meat/poultry/seafood handling:</strong> Nitrile gloves (puncture resistance essential)
                  </li>
                  <li>
                    <strong>Heavy-duty prep (chopping, cutting):</strong> Nitrile gloves, medium to heavy thickness
                  </li>
                  <li>
                    <strong>Ready-to-eat food assembly:</strong> Nitrile or vinyl gloves (either works)
                  </li>
                  <li>
                    <strong>Light-duty tasks (sandwich assembly, wrapping):</strong> Vinyl or poly gloves (economical)
                  </li>
                  <li>
                    <strong>Cleaning and sanitation:</strong> Nitrile gloves (chemical resistance)
                  </li>
                  <li>
                    <strong>Handling allergens:</strong> Nitrile gloves, change immediately after (prevent cross-contact)
                  </li>
                  <li>
                    <strong>Dishwashing (if using disposables):</strong> Heavy-duty nitrile or reusable rubber gloves
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Cost Management and Budgeting</h2>
              <p>
                Gloves are consumable supplies with high usage rates. A busy kitchen can go through hundreds of gloves per day.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Estimating Glove Needs</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="mb-2"><strong>Example calculation:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>5 kitchen staff working 8-hour shifts</li>
                  <li>Average 10 glove changes per person per shift (conservative estimate)</li>
                  <li>5 staff × 10 changes × 2 gloves = 100 gloves per day</li>
                  <li>100 gloves × 30 days = 3,000 gloves per month</li>
                  <li>At $0.10 per nitrile glove = $300/month glove budget</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Reducing Glove Waste Without Compromising Safety</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Use utensils when possible:</strong> Tongs, spatulas, and deli papers reduce glove needs</li>
                  <li><strong>Match glove type to task:</strong> Use economical poly gloves for light tasks, save nitrile for heavy-duty</li>
                  <li><strong>Proper training:</strong> Staff who understand when to change gloves waste fewer gloves unnecessarily</li>
                  <li><strong>Buy in bulk:</strong> Case quantities reduce per-glove cost by 20-40%</li>
                  <li><strong>Right-size your stock:</strong> Don't order sizes you don't use frequently</li>
                </ul>
              </div>
              <p className="mt-4">
                <strong>Important:</strong> Never compromise safety to save money on gloves. The cost of a foodborne illness outbreak or health code violation far exceeds glove expenses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Training Your Staff</h2>
              <p>
                Proper glove usage requires training and reinforcement. Include these topics in your food safety training:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>When gloves are required vs. when utensils can be used</li>
                  <li>Which glove type to use for each task</li>
                  <li>Proper handwashing before and after gloving</li>
                  <li>When to change gloves (provide specific examples)</li>
                  <li>Proper glove removal technique</li>
                  <li>What NOT to do while wearing gloves (touch face, handle cash, etc.)</li>
                  <li>Consequences of improper glove use (contamination, violations, illness)</li>
                </ul>
              </div>
              <p className="mt-4">
                <strong>Ongoing reinforcement:</strong> Post visual reminders near glove stations. Conduct spot checks. Make glove compliance part of regular performance reviews.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Storage and Accessibility</h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Best practices for glove storage:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Multiple stations:</strong> Place glove boxes at all prep stations, hand-washing areas, and high-use locations</li>
                  <li><strong>Clearly labeled:</strong> Label boxes by size so staff grab correct fit quickly</li>
                  <li><strong>Protected from contamination:</strong> Store in clean, dry areas away from chemicals and raw food</li>
                  <li><strong>Wall-mounted dispensers:</strong> Save counter space and keep boxes organized</li>
                  <li><strong>Adequate stock:</strong> Never run out during service—keep backup boxes readily available</li>
                </ul>
              </div>
            </section>

            <div className="bg-black text-white p-8 rounded-xl my-8">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Stock Your Restaurant with Quality Food Safety Gloves
              </h3>
              <p className="mb-6">
                Browse our selection of nitrile, vinyl, and poly gloves in all sizes. Bulk pricing available. Fast shipping to keep your kitchen in compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/gloves-and-bags"
                  className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center"
                >
                  Shop Food Safety Gloves
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">The Bottom Line</h2>
              <p>
                Food service gloves are essential for food safety and regulatory compliance, but only when used correctly. Choose the right glove type for each task—nitrile for durability and protection, vinyl or poly for light-duty economical use.
              </p>
              <p className="mt-3">
                Train your staff thoroughly on proper glove usage, including when to change gloves, proper handwashing protocols, and correct removal techniques. Make gloves readily available at all prep stations and monitor compliance regularly.
              </p>
              <p className="mt-3">
                The cost of gloves is a small investment in food safety that protects your customers, your staff, and your business reputation. Never compromise on glove quality or proper usage to save a few dollars.
              </p>
            </section>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-heading font-bold text-ink mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link href="/blog/restaurant-disposables-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-ink mb-1">Complete Guide to Restaurant Disposables</p>
                <p className="text-sm text-ink-muted">Essential guide to choosing disposables for your restaurant</p>
              </Link>
              <Link href="/blog/new-restaurant-supply-checklist" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-ink mb-1">Complete Restaurant Supply Checklist</p>
                <p className="text-sm text-ink-muted">Everything you need to stock before opening day</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
