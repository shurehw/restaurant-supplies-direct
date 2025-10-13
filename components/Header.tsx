"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="w-full py-3 px-4 sm:px-6 lg:px-8 border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-icon.svg"
            alt="Restaurant Supplies Direct"
            width={40}
            height={40}
            priority
          />
          <h2 className="text-lg sm:text-xl font-heading font-bold text-ink">
            Restaurant Supplies Direct
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3">
          {/* Categories with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-ink-muted hover:text-ink transition-colors text-sm font-medium">
              Categories
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-border p-6 z-50">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/takeout-containers"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
                        Takeout Containers
                      </h3>
                      <p className="text-xs text-ink-muted">
                        To-go boxes, deli containers, clamshells
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/cups-and-lids"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
                        Cups & Lids
                      </h3>
                      <p className="text-xs text-ink-muted">
                        Paper cups, plastic cups, coffee cups
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/napkins-and-towels"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
                        Napkins & Towels
                      </h3>
                      <p className="text-xs text-ink-muted">
                        Beverage napkins, dinner napkins, paper towels
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/gloves-and-bags"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
                        Gloves & Bags
                      </h3>
                      <p className="text-xs text-ink-muted">
                        Disposable gloves, trash bags
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/eco-friendly"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
                        Eco-Friendly
                      </h3>
                      <p className="text-xs text-ink-muted">
                        Compostable, biodegradable, sustainable
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/tabletop"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
                        Tabletop
                      </h3>
                      <p className="text-xs text-ink-muted">
                        Cutlery, straws, portion cups
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    href="/shop"
                    className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    View All Categories →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/custom-printing" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Custom Print</Link>
          <Link href="/wholesale-programs" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Wholesale</Link>
          <Link href="/blog" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Blog</Link>
          <Link href="/login" className="flex items-center gap-1 text-ink-muted hover:text-ink transition-colors text-sm font-medium">
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <Link href="/contact" className="px-4 py-1.5 bg-black text-white rounded-lg hover:bg-zinc-900 transition-colors text-sm font-semibold">
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink-muted hover:text-ink transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/shop"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/takeout-containers"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Takeout Containers
            </Link>
            <Link
              href="/cups-and-lids"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cups & Lids
            </Link>
            <Link
              href="/napkins-and-towels"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Napkins & Towels
            </Link>
            <Link
              href="/gloves-and-bags"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gloves & Bags
            </Link>
            <Link
              href="/eco-friendly"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eco-Friendly
            </Link>
            <Link
              href="/tabletop"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tabletop
            </Link>
            <Link
              href="/custom-printing"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Custom Printing
            </Link>
            <Link
              href="/wholesale-programs"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wholesale Programs
            </Link>
            <Link
              href="/blog"
              className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="border-t border-border pt-3 mt-3">
              <Link
                href="/login"
                className="mx-4 px-4 py-3 border-2 border-black text-black rounded-lg hover:bg-gray-50 transition-colors text-center font-medium flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            </div>
            <Link
              href="/contact"
              className="mx-4 px-4 py-3 bg-black text-white rounded-lg hover:bg-zinc-900 transition-colors text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
