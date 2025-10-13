import { Shield, Truck, RotateCcw, Award } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Premium products or your money back",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $500",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
    },
    {
      icon: Award,
      title: "Trusted Since 2010",
      description: "Serving 500+ businesses nationwide",
    },
  ];

  return (
    <section className="py-8 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-11 h-11 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                <badge.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-heading font-bold text-ink text-xs mb-0.5">
                {badge.title}
              </h3>
              <p className="text-[10px] text-ink-muted leading-tight">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
