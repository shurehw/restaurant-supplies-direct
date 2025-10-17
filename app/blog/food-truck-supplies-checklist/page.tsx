import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Essential Supplies Checklist for Food Trucks | Restaurant Supplies Direct",
  description: "Complete list of disposables and packaging supplies every food truck needs to operate efficiently.",
  openGraph: {
    title: "Essential Supplies Checklist for Food Trucks",
    description: "Complete list of disposables and packaging supplies every food truck needs to operate efficiently.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-bg">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://restaurantsuppliesdirect.com" },
          { name: "Blog", url: "https://restaurantsuppliesdirect.com/blog" },
          { name: "Food Truck Supplies Checklist", url: "https://restaurantsuppliesdirect.com/blog/food-truck-supplies-checklist" },
        ]}
      />

      <Header />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-ink-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-ink transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-ink">Food Truck Supplies Checklist</span>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-ink-muted mb-4">
            <span className="px-3 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full">
              Buying Guide
            </span>
            <time dateTime="2025-10-01">October 1, 2025</time>
            <span>•</span>
            <span>6 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-4 leading-tight">
            Essential Supplies Checklist for Food Trucks
          </h1>

          <p className="text-xl text-ink-muted">
            Complete list of disposables and packaging supplies every food truck needs to operate efficiently.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-ink-muted mb-8 leading-relaxed">
            Running a food truck requires careful inventory management in limited space. This comprehensive checklist covers all the disposable supplies you need to serve customers efficiently and professionally.
          </p>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Food Packaging Essentials
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Your packaging needs depend on your menu, but most food trucks should stock these core items:
          </p>

          <div className="bg-bg-muted p-6 rounded-xl border border-border mb-8">
            <h3 className="font-heading font-bold text-ink text-xl mb-4">Containers</h3>
            <ul className="text-ink-muted space-y-3">
              <li><strong className="text-ink">Hinged clamshell containers (8x8 or 9x9):</strong> Hot entrées, burgers, sandwiches</li>
              <li><strong className="text-ink">Paper food boats (various sizes):</strong> Fries, tacos, street food items</li>
              <li><strong className="text-ink">Deli containers with lids (8-32 oz):</strong> Salads, cold items, prep storage</li>
              <li><strong className="text-ink">Soup cups with lids (8-16 oz):</strong> Soups, chili, stews</li>
              <li><strong className="text-ink">Aluminum foil pans (small):</strong> Hot sides, catering portions</li>
            </ul>
          </div>

          <div className="bg-bg-muted p-6 rounded-xl border border-border mb-8">
            <h3 className="font-heading font-bold text-ink text-xl mb-4">Wraps and Packaging</h3>
            <ul className="text-ink-muted space-y-3">
              <li><strong className="text-ink">Sandwich/burger wraps:</strong> Paper or foil for easy handling</li>
              <li><strong className="text-ink">Food basket liners:</strong> Grease-resistant paper for baskets</li>
              <li><strong className="text-ink">Aluminum foil sheets:</strong> Wrapping hot items, keeping food warm</li>
              <li><strong className="text-ink">Deli paper:</strong> Wrapping sandwiches, separating layers</li>
            </ul>
          </div>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Utensils and Cutlery
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Stock both heavy-duty and standard options depending on your menu items:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">Plastic forks:</strong> Standard and heavy-weight options</li>
            <li><strong className="text-ink">Plastic knives:</strong> For items requiring cutting</li>
            <li><strong className="text-ink">Plastic spoons:</strong> Soups, desserts, sides</li>
            <li><strong className="text-ink">Wooden or bamboo utensils:</strong> Eco-friendly alternative</li>
            <li><strong className="text-ink">Sporks:</strong> Multi-purpose option to reduce inventory</li>
            <li><strong className="text-ink">Utensil kits:</strong> Pre-wrapped sets save service time</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Beverages and Drinkware
          </h2>
          <div className="bg-bg-muted p-6 rounded-xl border border-border mb-8">
            <h3 className="font-heading font-bold text-ink text-xl mb-4">Cups and Lids</h3>
            <ul className="text-ink-muted space-y-3">
              <li><strong className="text-ink">Cold cups (12-32 oz):</strong> Clear plastic or paper for cold beverages</li>
              <li><strong className="text-ink">Hot cups (8-20 oz):</strong> Insulated paper cups for coffee, tea, hot chocolate</li>
              <li><strong className="text-ink">Dome lids:</strong> Clear lids for cold drinks with whipped cream or toppings</li>
              <li><strong className="text-ink">Flat lids:</strong> Standard cold drink lids</li>
              <li><strong className="text-ink">Hot cup lids:</strong> Sip-through lids for hot beverages</li>
              <li><strong className="text-ink">Straws:</strong> Wrapped paper or plastic straws</li>
              <li><strong className="text-ink">Cup sleeves:</strong> Insulated sleeves for hot cups</li>
            </ul>
          </div>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Napkins and Paper Products
          </h2>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">Napkins (various sizes):</strong> Beverage napkins, lunch napkins, and dinner napkins</li>
            <li><strong className="text-ink">Paper towels:</strong> Both for customers and kitchen use</li>
            <li><strong className="text-ink">Toilet paper:</strong> If your truck has a staff bathroom</li>
            <li><strong className="text-ink">Wet wipes:</strong> Individual packets for messy foods</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Condiments and Portion Control
          </h2>
          <div className="bg-bg-muted p-6 rounded-xl border border-border mb-8">
            <h3 className="font-heading font-bold text-ink text-xl mb-4">Portion Cups and Packets</h3>
            <ul className="text-ink-muted space-y-3">
              <li><strong className="text-ink">Portion cups with lids (1-4 oz):</strong> Sauces, dressings, toppings</li>
              <li><strong className="text-ink">Condiment packets:</strong> Ketchup, mustard, mayo, hot sauce</li>
              <li><strong className="text-ink">Salt and pepper packets:</strong> Individual servings</li>
              <li><strong className="text-ink">Sugar packets:</strong> Regular and sugar substitutes</li>
              <li><strong className="text-ink">Squeeze bottles:</strong> House-made sauces and dressings</li>
            </ul>
          </div>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Bags and Carriers
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Essential for customer convenience and professional presentation:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">Paper bags (various sizes):</strong> Small, medium, and large for different order sizes</li>
            <li><strong className="text-ink">Plastic bags:</strong> Backup option or for wet/messy items</li>
            <li><strong className="text-ink">Drink carriers:</strong> 2-cup and 4-cup carriers</li>
            <li><strong className="text-ink">Catering boxes:</strong> For large or bulk orders</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Cleaning and Sanitation Supplies
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Critical for food safety and health code compliance:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">Gloves:</strong> Disposable food service gloves in multiple sizes</li>
            <li><strong className="text-ink">Trash bags:</strong> Heavy-duty bags for kitchen and customer waste</li>
            <li><strong className="text-ink">Cleaning wipes:</strong> Sanitizing wipes for surfaces</li>
            <li><strong className="text-ink">Hand sanitizer:</strong> Pump bottles and individual packets</li>
            <li><strong className="text-ink">Aprons:</strong> Disposable aprons for high-volume service</li>
            <li><strong className="text-ink">Hair nets and beard covers:</strong> Required by health codes</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Quantity Guidelines
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            For a food truck serving 100 customers per day, plan for these weekly quantities:
          </p>
          <div className="bg-bg-muted p-6 rounded-xl border border-border mb-8">
            <ul className="text-ink-muted space-y-2">
              <li>Food containers: 700-1000 units (varies by menu)</li>
              <li>Napkins: 1500-2000</li>
              <li>Utensils: 500-700 sets</li>
              <li>Cups: 500-700 (if serving beverages)</li>
              <li>Bags: 600-700</li>
              <li>Portion cups: 300-500</li>
              <li>Gloves: 2-3 boxes</li>
            </ul>
          </div>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Adjust quantities based on your specific menu and customer volume. Always maintain a 2-week buffer stock for emergencies.
          </p>

          <div className="bg-white p-8 rounded-2xl border-2 border-brand-orange my-12 shadow-md">
            <h3 className="font-heading font-bold text-ink text-2xl mb-4">
              Stock Your Food Truck
            </h3>
            <p className="text-ink-muted mb-6">
              Get all your food truck essentials at wholesale prices. Fast shipping and bulk discounts available on all products.
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-black text-white font-heading font-semibold rounded-xl hover:bg-zinc-900 transition-colors shadow-lg"
            >
              Shop All Supplies
            </Link>
          </div>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Storage Tips for Small Spaces
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Food trucks have limited storage, so optimize your space:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li>Use stackable containers and organizers</li>
            <li>Store items you use most frequently at eye level</li>
            <li>Keep backup inventory off-site or in a vehicle</li>
            <li>Standardize container sizes to reduce SKU count</li>
            <li>Implement a first-in-first-out rotation system</li>
            <li>Use vertical space with shelving and hooks</li>
          </ul>

          <p className="text-ink-muted leading-relaxed">
            Need help planning your food truck supplies? <Link href="/contact" className="text-black hover:text-zinc-900 underline font-semibold">Contact our team</Link> for customized recommendations based on your menu.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="font-heading font-bold text-ink text-2xl mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog/choosing-takeout-containers"
              className="p-6 bg-white rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all"
            >
              <h4 className="font-heading font-bold text-ink mb-2">
                How to Choose the Right Takeout Containers
              </h4>
              <p className="text-sm text-ink-muted">5 min read</p>
            </Link>
            <Link
              href="/blog/reduce-packaging-costs"
              className="p-6 bg-white rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all"
            >
              <h4 className="font-heading font-bold text-ink mb-2">
                5 Ways to Reduce Packaging Costs
              </h4>
              <p className="text-sm text-ink-muted">4 min read</p>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
