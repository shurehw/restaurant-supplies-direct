import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Switched from our old supplier and couldn't be happier. Quality is excellent and prices are 30% lower. The whole team is impressed.",
    author: "Maria Rodriguez",
    business: "Taco Haven",
    location: "Austin, TX",
    rating: 5,
  },
  {
    quote: "Fast shipping, great products, and the customer service team actually knows their stuff. They helped us find eco-friendly options that fit our budget.",
    author: "James Chen",
    business: "Green Leaf Cafe",
    location: "Portland, OR",
    rating: 5,
  },
  {
    quote: "We order cases of takeout containers and cups every week. Consistent quality, always in stock, and delivery is reliable. Exactly what we need.",
    author: "Sarah Johnson",
    business: "Downtown Deli",
    location: "Chicago, IL",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-2">
            Trusted by Restaurants Nationwide
          </h2>
          <p className="text-base text-ink-muted max-w-2xl mx-auto">
            Join hundreds of restaurants saving time and money
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border-2 border-border hover:border-black hover:shadow-2xl transition-all group"
            >
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink text-base mb-6 leading-relaxed font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-ink text-base">{testimonial.author}</p>
                <p className="text-sm text-ink-muted font-semibold">{testimonial.business}</p>
                <p className="text-xs text-ink-muted mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-10 border-t-2 border-border">
          <div className="text-center">
            <p className="text-4xl font-heading font-black text-black mb-2">500+</p>
            <p className="text-sm text-ink-muted font-medium">Active Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-heading font-black text-black mb-2">4.8</p>
            <p className="text-sm text-ink-muted font-medium">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-heading font-black text-black mb-2">1-3</p>
            <p className="text-sm text-ink-muted font-medium">Day Shipping</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-heading font-black text-black mb-2">99%</p>
            <p className="text-sm text-ink-muted font-medium">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
