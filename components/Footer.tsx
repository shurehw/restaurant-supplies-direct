import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Restaurant Supplies Direct</h3>
            <p className="text-sm text-gray-300 mb-4">
              Premium restaurant disposables, packaging, and custom print — shipped direct from the source.
            </p>
            <p className="text-xs text-gray-400">
              Powered by <a href="https://www.shurehw.com" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Shure Hospitality Wholesale</a>
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="text-gray-300 hover:text-white transition-colors">All Categories</Link></li>
              <li><Link href="/takeout-containers" className="text-gray-300 hover:text-white transition-colors">Takeout Containers</Link></li>
              <li><Link href="/cups-and-lids" className="text-gray-300 hover:text-white transition-colors">Cups & Lids</Link></li>
              <li><Link href="/napkins-and-towels" className="text-gray-300 hover:text-white transition-colors">Napkins & Towels</Link></li>
              <li><Link href="/gloves-and-bags" className="text-gray-300 hover:text-white transition-colors">Gloves & Bags</Link></li>
              <li><Link href="/eco-friendly" className="text-gray-300 hover:text-white transition-colors">Eco-Friendly</Link></li>
              <li><Link href="/tabletop" className="text-gray-300 hover:text-white transition-colors">Tabletop</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/custom-printing" className="text-gray-300 hover:text-white transition-colors">Custom Printing</Link></li>
              <li><Link href="/wholesale-programs" className="text-gray-300 hover:text-white transition-colors">Wholesale Programs</Link></li>
              <li><Link href="/la-hospitality-supplies" className="text-gray-300 hover:text-white transition-colors">LA Local Delivery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:1-800-555-0123" className="text-gray-300 hover:text-white transition-colors">
                  1-800-555-0123
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@restaurantsuppliesdirect.com" className="text-gray-300 hover:text-white transition-colors">
                  info@rsd.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Los Angeles, CA
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Restaurant Supplies Direct. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
