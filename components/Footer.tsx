import Link from "next/link";
import { Mail, Phone, MapPin, CreditCard, Smartphone, Lock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
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
              Powered by <a href="https://www.shurehw.com" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Shure Hospitality Wholesale</a>
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
              <li><Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+13102436757" className="text-gray-300 hover:text-white transition-colors">
                  (310) 243-6757
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
            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center"
              >
                Get a Quote
              </Link>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/restaurantsuppliesdirect/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Trust Badges */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center gap-4 mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-wide">We Accept</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Visa */}
              <div className="h-10 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <svg className="h-6 w-auto" viewBox="0 0 48 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 2.5L15.8 13.5H12.9L15.6 2.5H18.5ZM29.1 9.1C29.1 10.8 27.5 11.7 26.2 11.7C25.3 11.7 24.6 11.4 24 11L24.5 8.8C25.1 9.1 25.7 9.3 26.4 9.3C26.9 9.3 27.3 9.1 27.3 8.7C27.3 8.4 27 8.2 26.4 7.9C25.3 7.4 24.6 6.7 24.6 5.6C24.6 3.9 26.2 2.9 28 2.9C28.9 2.9 29.6 3.1 30.2 3.4L29.7 5.5C29.2 5.3 28.6 5.1 28 5.1C27.5 5.1 27.2 5.3 27.2 5.6C27.2 5.9 27.6 6.1 28.3 6.4C29.5 6.9 29.1 9.1 29.1 9.1ZM36.4 13.5H33.9L34.2 11.8H30.6L29.8 13.5H27.2L32.8 2.5H36L36.4 13.5ZM34.3 9.5L34.1 5.9L32.7 9.5H34.3ZM11.5 2.5L8.5 10.2L8.2 8.7L7.2 3.8C7.1 3.1 6.6 2.5 5.8 2.5H0L0 2.7C1.4 3 2.7 3.5 3.8 4.2L6.5 13.5H9.3L13.5 2.5H11.5Z" fill="#1434CB"/>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="h-10 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <svg className="h-6 w-auto" viewBox="0 0 48 30" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="15" r="11" fill="#EB001B"/>
                  <circle cx="30" cy="15" r="11" fill="#F79E1B"/>
                  <path d="M24 7.5C26.5 9.5 28 12.5 28 15.5C28 18.5 26.5 21.5 24 23.5C21.5 21.5 20 18.5 20 15.5C20 12.5 21.5 9.5 24 7.5Z" fill="#FF5F00"/>
                </svg>
              </div>
              {/* Amex */}
              <div className="h-10 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <svg className="h-6 w-auto" viewBox="0 0 48 30" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="30" rx="4" fill="#006FCF"/>
                  <path d="M12 11L10 17H8.5L6.5 11H8L9 15L10 11H12ZM15.5 17H14V11H15.5V17ZM19.5 15C20 15 20.5 14.5 20.5 14C20.5 13.5 20 13 19.5 13H18.5V15H19.5ZM21.5 14C21.5 15.1 20.6 16 19.5 16H18.5V17H17V11H19.5C20.6 11 21.5 11.9 21.5 13C21.5 13.5 21.3 13.9 21 14.2C21.3 14.5 21.5 14.7 21.5 14Z" fill="white"/>
                  <path d="M27 17L25.5 14H26V11H24V14L22.5 11H21L23 14L21 17H22.5L24 14.5V17H26L27 17Z" fill="white"/>
                </svg>
              </div>
              {/* Discover */}
              <div className="h-10 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <svg className="h-6 w-auto" viewBox="0 0 48 30" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="30" rx="4" fill="#FF6000"/>
                  <circle cx="38" cy="15" r="8" fill="#F9A825"/>
                  <path d="M8 11H10.5C11.9 11 13 12.1 13 13.5V16.5C13 17.9 11.9 19 10.5 19H8V11ZM10.5 13V17C10.8 17 11 16.8 11 16.5V13.5C11 13.2 10.8 13 10.5 13Z" fill="white"/>
                </svg>
              </div>
              {/* PayPal */}
              <div className="h-10 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <svg className="h-6 w-auto" viewBox="0 0 48 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C18 6.9 18.9 6 20 6H26C28.8 6 31 8.2 31 11C31 13.8 28.8 16 26 16H22L21 20H18V8Z" fill="#003087"/>
                  <path d="M20 10C20 8.9 20.9 8 22 8H28C30.8 8 33 10.2 33 13C33 15.8 30.8 18 28 18H24L23 22H20V10Z" fill="#009CDE"/>
                </svg>
              </div>
              {/* Apple Pay */}
              <div className="h-10 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <svg className="h-7 w-auto" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5C12 4 12.2 3.5 12.6 3.1C13 2.7 13.5 2.5 14 2.5C14.2 2.5 14.4 2.6 14.5 2.7C14.3 3.1 14 3.5 13.7 3.8C13.4 4.1 13 4.3 12.6 4.3C12.4 4.3 12.2 4.2 12 4.5Z" fill="black"/>
                  <path d="M14 4.5C14 5.3 14.5 6 15.2 6.3C15 6.7 14.6 7.3 14 7.7C13.5 8 13 8 12.7 8C12.3 8 11.9 7.8 11.5 7.5C11.1 7.2 10.8 7 10.5 7C10.2 7 9.8 7.2 9.5 7.5C9.1 7.8 8.8 8 8.5 8C7.7 8 7 7.3 7 6.5C7 5.7 7.5 5 8.2 4.7C8.7 4.5 9.2 4.3 9.8 4.3C10.2 4.3 10.5 4.5 10.8 4.7C11.2 5 11.5 5.2 11.8 5.2C12.1 5.2 12.5 5 12.8 4.7C13.2 4.5 13.6 4.3 14 4.5Z" fill="black"/>
                  <text x="18" y="14" fill="black" fontSize="9" fontWeight="500" fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif">Pay</text>
                </svg>
              </div>
              {/* Google Pay */}
              <div className="h-10 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <svg className="h-6 w-auto" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5V13H19V5H21ZM27 10.5C27 12.4 25.7 13.5 24 13.5C23.2 13.5 22.5 13.2 22 12.7L22.5 11.3C22.8 11.6 23.3 11.8 23.8 11.8C24.6 11.8 25 11.3 25 10.5V10.2C24.6 10.5 24.1 10.7 23.5 10.7C22.1 10.7 21 9.6 21 8.2C21 6.8 22.1 5.7 23.5 5.7C24.1 5.7 24.6 5.9 25 6.2V5.8H27V10.5ZM25 8.2C25 7.5 24.5 7 23.8 7C23.1 7 22.7 7.5 22.7 8.2C22.7 8.9 23.1 9.4 23.8 9.4C24.5 9.4 25 8.9 25 8.2Z" fill="#5F6368"/>
                  <text x="28" y="13" fill="#5F6368" fontSize="8" fontWeight="500" fontFamily="'Product Sans', 'Google Sans', sans-serif">Pay</text>
                  <circle cx="10" cy="9" r="5" fill="#EA4335"/>
                  <circle cx="10" cy="9" r="4" fill="#FBBC04"/>
                  <circle cx="10" cy="9" r="3" fill="#34A853"/>
                  <circle cx="10" cy="9" r="2" fill="#4285F4"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Secure Checkout
              </span>
              <span>•</span>
              <span>SSL Encrypted</span>
              <span>•</span>
              <span>PCI Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Restaurant Supplies Direct. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
              <Link href="/returns" className="hover:text-white transition-colors">Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
