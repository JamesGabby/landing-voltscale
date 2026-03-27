"use client";

import {
  ArrowRight,
  CircleDollarSign,
  Target,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  { icon: CircleDollarSign, label: "Pay Per Qualified Call - No Retainers" },
  { icon: Target, label: "15 qualified Leads in 90 Days Guaranteed" },
  { icon: ShieldCheck, label: "5-Point Lead Quality Guarantee" },
];

const stats = [
  {
    value: "$225,000+",
    label: "New monthly revenue",
    sub: "at conservative benchmarks",
  },
  {
    value: "15–45",
    label: "Qualified calls per month",
    sub: "scaling as the system matures",
  },
  {
    value: "$750,000+",
    label: "Added to your pipeline",
    sub: "within the first 90 days",
  },
  {
    value: "3,000",
    label: "Verified prospects per month",
    sub: "triple-verified, never recycled",
  },
];

export default function HeroNoVideo() {
  return (
    <section className="relative pt-28 pb-6 md:pt-36 md:pb-10 lg:pt-40 lg:pb-14 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-electric-100),transparent)]"
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Value Prop Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
            {highlights.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-electric-700 bg-electric-50 border border-electric-200/60 rounded-full"
              >
                <item.icon className="w-3.5 h-3.5 text-electric-500" />
                {item.label}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] text-balance !leading-[1.15]">
            Predictably Add{" "}
            <span className="text-electric-500">$225,000+</span> in New Monthly
            Client Revenue Using AI-Augmented Cold Email Outreach at True Scale
          </h1>

          {/* Subheadline */}
          <p className="mt-4 md:mt-5 text-base text-grey-600 sm:text-lg md:text-xl max-w-2xl text-pretty leading-relaxed">
            For Established Software Agencies - Without Buying Ads, Hiring an
            SDR Team, or Praying for Referrals
          </p>

          {/* Primary CTA */}
          <div className="mt-8 md:mt-10 flex flex-col items-center gap-3">
            <Link
              href="https://calendly.com/voltscalepartners/quick-chat"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-electric-500 rounded-xl transition-all duration-300 hover:bg-electric-600 hover:shadow-xl hover:shadow-electric-500/25 hover:gap-3 active:scale-[0.98]"
            >
              Book Your Free Discovery Call
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <p className="text-sm text-grey-500">
              15 minutes · No pitch · I'll tell you honestly if we're a fit
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-12 md:mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-px bg-electric-100/60 rounded-2xl overflow-hidden border border-electric-200/60">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-1 px-4 py-6 bg-white/80 backdrop-blur-sm"
              >
                <span className="text-2xl md:text-3xl font-extrabold text-electric-500 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-foreground text-center">
                  {stat.label}
                </span>
                <span className="text-xs text-grey-400 text-center leading-snug">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}