import Link from "next/link";
import Image from "next/image";

interface CategoryPageLayoutProps {
  title: string;
  description: string;
  icon: string;
  children: React.ReactNode;
  relatedCategories?: {
    name: string;
    slug: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export default function CategoryPageLayout({
  title,
  description,
  icon,
  children,
  relatedCategories,
  faqs,
}: CategoryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.svg"
              alt="Restaurant Supplies Direct"
              width={48}
              height={48}
              priority
            />
            <span className="text-2xl font-heading font-bold text-ink leading-heading">
              Restaurant Supplies Direct
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-ink-muted hover:text-ink transition-colors">
              Shop
            </Link>
            <Link href="/custom-printing" className="text-ink-muted hover:text-ink transition-colors">
              Custom Printing
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Get Quote
            </Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-bg-muted py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-ink-muted">
            <Link href="/" className="hover:text-ink">Home</Link>
            {" / "}
            <Link href="/shop" className="hover:text-ink">Shop</Link>
            {" / "}
            <span className="text-ink font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="text-6xl sm:text-7xl">{icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-4 leading-heading">
                {title}
              </h1>
              <p className="text-xl text-ink-muted max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-6 bg-accent-50 border-y border-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-ink">
              <strong>E-commerce launching soon!</strong> Need {title.toLowerCase()} now? Contact us for immediate orders.
            </p>
            <Link
              href="/contact"
              className="whitespace-nowrap px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-ink mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-ink-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Categories */}
      {relatedCategories && relatedCategories.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-ink mb-6">
              Related Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="p-6 bg-white border border-border rounded-lg hover:border-primary-600 hover:shadow-lg transition-all"
                >
                  <span className="text-lg font-heading font-semibold text-ink hover:text-primary-600">
                    {cat.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Need Bulk or Custom Printing?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get wholesale pricing and custom branded packaging through Shure Hospitality Wholesale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wholesale-programs"
              className="px-8 py-4 bg-white text-ink font-heading font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Wholesale Programs
            </Link>
            <Link
              href="/custom-printing"
              className="px-8 py-4 bg-accent-500 text-white font-heading font-semibold rounded-lg hover:bg-accent-600 transition-colors"
            >
              Custom Printing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-ink-muted text-center">
            Restaurant Supplies Direct is your trusted source for restaurant disposables, packaging, and custom print — shipped direct from the source.
            <br />
            Powered by{" "}
            <a
              href="https://www.shurehw.com"
              className="text-primary-600 hover:text-primary-700 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shure Hospitality Wholesale
            </a>
            , a national supplier serving leading hospitality brands.
          </p>
        </div>
      </footer>
    </div>
  );
}
