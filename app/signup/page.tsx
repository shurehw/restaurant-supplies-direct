import { Metadata } from "next";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Sign Up | Restaurant Supplies Direct",
  description: "Create your Restaurant Supplies Direct account to access wholesale pricing, manage orders, and get fast shipping on restaurant supplies.",
  robots: "noindex, nofollow",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-bg flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-orange-600" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-ink mb-2">Create Account</h1>
              <p className="text-ink-muted">Get started with wholesale pricing today</p>
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-orange-50 border border-orange-600 rounded-lg p-4 mb-6">
              <p className="text-sm text-ink text-center">
                <strong>Account creation coming soon!</strong> To get started immediately, <Link href="/contact" className="text-black hover:underline font-semibold">request a quote</Link>.
              </p>
            </div>

            {/* Form (disabled for now) */}
            <form className="space-y-4 opacity-50 pointer-events-none">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    disabled
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-bg-muted"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-ink mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    disabled
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-bg-muted"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  disabled
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-bg-muted"
                  placeholder="Your Restaurant"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  disabled
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-bg-muted"
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-bg-muted"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full px-6 py-3 bg-black text-white font-heading font-semibold rounded-lg hover:bg-zinc-900 transition-colors disabled:opacity-50"
              >
                Create Account
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-ink-muted">
                Already have an account? <Link href="/login" className="text-black hover:text-zinc-900 font-semibold">Sign in</Link>
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
