import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl sm:text-8xl font-heading font-bold text-ink mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-ink mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-ink-muted mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-900 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/shop"
              className="px-6 py-3 bg-white text-ink font-semibold rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
