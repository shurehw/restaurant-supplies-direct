import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LogIn } from "lucide-react";

export const metadata: Metadata = {
  title: "Login | Restaurant Supplies Direct",
  description: "Sign in to your Restaurant Supplies Direct account to manage orders, track shipments, and access wholesale pricing.",
  robots: "noindex, nofollow",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-bg flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.svg" alt="Restaurant Supplies Direct" width={40} height={40} priority />
            <span className="text-xl font-heading font-bold text-ink">Restaurant Supplies Direct</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-ink mb-2">Welcome Back</h1>
              <p className="text-ink-muted">Sign in to your account to continue</p>
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-accent-50 border border-accent-600 rounded-lg p-4 mb-6">
              <p className="text-sm text-ink text-center">
                <strong>Account system launching soon!</strong> For immediate orders, <Link href="/contact" className="text-primary-600 hover:underline font-semibold">contact us directly</Link>.
              </p>
            </div>

            {/* Form (disabled for now) */}
            <form className="space-y-4 opacity-50 pointer-events-none">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  disabled
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:bg-bg-muted"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  disabled
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:bg-bg-muted"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" disabled className="w-4 h-4 text-primary-600 border-border rounded" />
                  <span className="ml-2 text-sm text-ink-muted">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled
                className="w-full px-6 py-3 bg-primary-600 text-white font-heading font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-ink-muted">
                Don't have an account? <Link href="/signup" className="text-primary-600 hover:text-primary-700 font-semibold">Sign up</Link>
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-ink-muted hover:text-ink transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
