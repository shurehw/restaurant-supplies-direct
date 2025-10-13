import { CheckCircle, Leaf, Shield } from "lucide-react";

interface ProductBadgesProps {
  certifications?: ("BPI" | "NSF" | "FDA")[];
  isCompostable?: boolean;
  isEcoFriendly?: boolean;
  material?: string;
}

export default function ProductBadges({
  certifications = [],
  isCompostable = false,
  isEcoFriendly = false,
  material
}: ProductBadgesProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {/* Compostable Badge */}
      {isCompostable && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 text-[10px] font-bold rounded border border-green-300">
          <Leaf className="w-3 h-3" />
          COMPOSTABLE
        </span>
      )}

      {/* Eco-Friendly Badge */}
      {isEcoFriendly && !isCompostable && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-semibold rounded border border-green-200">
          <Leaf className="w-3 h-3" />
          ECO
        </span>
      )}

      {/* BPI Certification */}
      {certifications.includes("BPI") && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded border border-blue-300">
          <CheckCircle className="w-3 h-3" />
          BPI
        </span>
      )}

      {/* NSF Certification */}
      {certifications.includes("NSF") && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-800 text-[10px] font-bold rounded border border-purple-300">
          <Shield className="w-3 h-3" />
          NSF
        </span>
      )}

      {/* FDA Approved */}
      {certifications.includes("FDA") && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 text-[10px] font-bold rounded border border-gray-300">
          <Shield className="w-3 h-3" />
          FDA
        </span>
      )}

      {/* Material Badge */}
      {material && (
        <span className="px-2 py-0.5 bg-gray-50 text-gray-700 text-[10px] font-medium rounded border border-gray-200">
          {material.toUpperCase()}
        </span>
      )}
    </div>
  );
}
