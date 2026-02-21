"use client";

import {
  ArrowRight,
  CircleDollarSign,
  Target,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import LoomPlayerAdvanced from "./LoomPlayerAdvanced";

const highlights = [
  { icon: CircleDollarSign, label: "Pay Per Qualified Call" },
  { icon: Target, label: "10 Qualified Leads in 90 Days Guaranteed" },
  { icon: ShieldCheck, label: "4-Point Lead Scorecard" },
  { icon: Workflow, label: "Hybrid Outbound Infrastructure" },
];

export default function Hero() {
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
            Add <span className="text-electric-500">$1,500,000+</span> to Your
            Pipeline by Installing the CRI Protocol
          </h1>

          {/* Subheadline */}
          <p className="mt-4 md:mt-5 text-base text-grey-600 sm:text-lg md:text-xl max-w-2xl text-pretty leading-relaxed">
            For software agencies who want to scale without relying on referrals
            or managing an internal SDR team.
          </p>

          {/* VSL Video Player — Center Stage */}
          <div className="relative w-full mt-8 md:mt-10">
            <LoomPlayerAdvanced
              videoId="9a504bcd2496466e8391f664df15a49a"
              title="The CRI Protocol: How Software Agencies Add $1.5M+ to Their Pipeline"
            />
          </div>

          {/* Primary CTA */}
          <div className="mt-6 md:mt-8 flex flex-col items-center gap-3">
            <Link
              href="https://calendly.com/jamesgabbitus/30min"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-electric-500 rounded-xl transition-all duration-300 hover:bg-electric-600 hover:shadow-xl hover:shadow-electric-500/25 hover:gap-3 active:scale-[0.98]"
            >
              Book Your Free Assessment
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <p className="text-sm text-grey-500">
              Free 30-min feasibility assessment · No strings attached · No sales pitch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}