"use client";

import { X } from "lucide-react";
import ProductBadges from "./ProductBadges";
import ProductSpecs from "./ProductSpecs";
import Link from "next/link";

interface QuickViewModalProps {
  product: {
    name: string;
    category: string;
    price: string;
    unit: string;
    image: string;
    certifications?: ("BPI" | "NSF" | "FDA")[];
    isCompostable?: boolean;
    isEcoFriendly?: boolean;
    material?: string;
    specs?: {
      size?: string;
      capacity?: string;
      dimensions?: string;
      caseQuantity?: string;
    };
    description?: string;
  };
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-heading font-bold text-ink">Quick View</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <ProductBadges
                  certifications={product.certifications}
                  isCompostable={product.isCompostable}
                  isEcoFriendly={product.isEcoFriendly}
                  material={product.material}
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <p className="text-xs text-ink-muted mb-1">{product.category}</p>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">{product.name}</h3>

              <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-gray-200">
                <p className="text-3xl font-heading font-black text-black">{product.price}</p>
                <p className="text-sm text-ink-muted">{product.unit}</p>
              </div>

              {product.description && (
                <p className="text-sm text-ink-muted mb-4">{product.description}</p>
              )}

              {product.specs && (
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-bold text-ink mb-2">Specifications</h4>
                  <ProductSpecs {...product.specs} />
                </div>
              )}

              <div className="mt-auto space-y-3">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Quote
                </Link>
                <button
                  onClick={onClose}
                  className="block w-full text-center px-6 py-3 bg-white text-ink font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
