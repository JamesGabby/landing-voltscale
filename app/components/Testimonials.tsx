import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "VoltScale transformed our outbound completely. We went from 2-3 demos per month to 15+ qualified calls weekly. The ROI has been incredible.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow",
      avatar: "/avatars/avatar-1.jpg",
      metric: "6x increase in demos",
    },
    {
      quote: "Finally, a lead gen partner that actually delivers. Their ICP research was spot-on, and the quality of leads has been consistently high for 8 months now.",
      author: "Marcus Johnson",
      role: "CEO",
      company: "DataStack",
      avatar: "/avatars/avatar-2.jpg",
      metric: "\$2.4M pipeline generated",
    },
    {
      quote: "We were skeptical after trying other agencies, but VoltScale proved us wrong within the first month. Booked 23 qualified meetings in week three.",
      author: "Emily Rodriguez",
      role: "Head of Growth",
      company: "ScaleUp AI",
      avatar: "/avatars/avatar-3.jpg",
      metric: "23 meetings in first month",
    },
  ];

  return (
    <section id="results" className="py-20 md:py-28 lg:py-32 bg-grey-950 text-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-electric-400 bg-electric-500/10 rounded-full border border-electric-500/20">
            Client Results
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
            Don't Take Our Word For It.
            <span className="text-electric-400"> See The Results.</span>
          </h2>
          <p className="mt-5 text-lg text-grey-400 max-w-2xl mx-auto text-pretty">
            Join 200+ B2B companies that have scaled their pipeline predictably with VoltScale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Logo Cloud */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-grey-800">
          <p className="text-center text-sm text-grey-500 mb-8">
            Trusted by fast-growing B2B companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50">
            {["TechFlow", "DataStack", "ScaleUp AI", "CloudBase", "SynthLabs", "Quantum"].map(
              (company) => (
                <span
                  key={company}
                  className="text-lg font-semibold text-grey-400 tracking-tight"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  metric,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
}) {
  return (
    <article className="relative flex flex-col p-6 md:p-8 bg-grey-900 rounded-2xl border border-grey-800 transition-all duration-300 hover:border-grey-700 hover:bg-grey-900/80">
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-electric-500/30 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-electric-400 fill-electric-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-grey-300 leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Metric Badge */}
      <div className="mb-6">
        <span className="inline-block px-3 py-1.5 text-sm font-semibold text-electric-400 bg-electric-500/10 rounded-lg border border-electric-500/20">
          {metric}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-grey-800">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-grey-700">
          {/* Placeholder avatar - replace with actual images */}
          <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-grey-400">
            {author.charAt(0)}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-grey-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </article>
  );
}