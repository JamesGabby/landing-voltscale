import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const benefits = [
    "Free 30-minute strategy session",
    "Custom pipeline growth plan",
    "No obligation or commitment",
    "Results guaranteed or money back",
  ];

  return (
    <section id="book-call" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,var(--color-electric-100),transparent)]" 
        aria-hidden="true" 
      />

      <div className="container-custom">
        <div className="relative max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative p-8 md:p-12 lg:p-16 bg-background rounded-3xl border border-grey-200 shadow-2xl shadow-grey-900/5">
            {/* Decorative Corner */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-electric-100 to-transparent rounded-tr-3xl" 
              aria-hidden="true" 
            />

            <div className="relative text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-electric-500 text-primary-foreground shadow-lg shadow-electric-500/25">
                <Zap className="w-8 h-8" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Ready to Electrify
                <span className="text-electric-500"> Your Pipeline?</span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto text-pretty">
                Book a free strategy call with our team. We'll analyze your current 
                outbound efforts and show you exactly how we can help you scale.
              </p>

              {/* Benefits List */}
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {benefits.map((benefit) => (
                  <li 
                    key={benefit} 
                    className="flex items-center gap-2 text-sm text-grey-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-electric-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-10">
                <Link
                  href="https://calendly.com/jamesgabbitus/30min"
                  className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold text-primary-foreground bg-electric-500 rounded-xl transition-all duration-300 ease-out-expo hover:bg-electric-600 hover:shadow-2xl hover:shadow-electric-500/30 hover:gap-3 active:scale-[0.98]"
                >
                  Book Your Strategy Call
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Urgency Text */}
              <p className="mt-4 text-sm text-grey-500">
                Limited spots available this month — 
                <span className="font-medium text-foreground"> 2 spots remaining</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}