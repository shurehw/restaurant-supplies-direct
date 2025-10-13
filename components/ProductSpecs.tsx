interface ProductSpecsProps {
  size?: string;
  capacity?: string;
  caseQuantity?: string;
  dimensions?: string;
}

export default function ProductSpecs({
  size,
  capacity,
  caseQuantity,
  dimensions
}: ProductSpecsProps) {
  const specs = [];

  if (size) specs.push({ label: "Size", value: size });
  if (capacity) specs.push({ label: "Capacity", value: capacity });
  if (dimensions) specs.push({ label: "Dimensions", value: dimensions });
  if (caseQuantity) specs.push({ label: "Case Qty", value: caseQuantity });

  if (specs.length === 0) return null;

  return (
    <div className="space-y-1">
      {specs.map((spec, i) => (
        <div key={i} className="flex justify-between text-xs">
          <span className="text-ink-muted">{spec.label}:</span>
          <span className="text-ink font-medium">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
