import { Metadata } from "next";
import Link from "next/link";
import { LogIn } from "lucide-react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Login | Restaurant Supplies Direct",
  description: "Sign in to your Restaurant Supplies Direct account to manage orders, track shipments, and access wholesale pricing.",
  robots: "noindex, nofollow",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-bg flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-ink mb-2">Welcome Back</h1>
              <p className="text-ink-muted">Sign in to your account to continue</p>
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-orange-50 border border-orange-600 rounded-lg p-4 mb-6">
              <p className="text-sm text-ink text-center">
                <strong>Account system launching soon!</strong> For immediate orders, <Link href="/contact" className="text-black hover:underline font-semibold">contact us directly</Link>.
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" disabled className="w-4 h-4 text-black border-border rounded" />
                  <span className="ml-2 text-sm text-ink-muted">Remember me</span>
                </label>
                <a href="#" className="text-sm text-black hover:text-zinc-900">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled
                className="w-full px-6 py-3 bg-black text-white font-heading font-semibold rounded-lg hover:bg-zinc-900 transition-colors disabled:opacity-50"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-ink-muted">
                Don't have an account? <Link href="/signup" className="text-black hover:text-zinc-900 font-semibold">Sign up</Link>
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
