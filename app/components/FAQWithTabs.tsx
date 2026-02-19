"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // About the Service
  {
    category: "Service",
    question: "What exactly is the CRI Protocol?",
    answer:
      "The CRI (Continuous Revenue Integration) Protocol is a data-driven outbound system built specifically for software agencies. It combines two parallel processes: Signal-Based Outreach (targeting companies showing buying signals) and Cohort-Based Validation (rigorous A/B testing to find your winning message). Think of it as engineering logic applied to business development.",
  },
  {
    category: "Service",
    question: "How is this different from other lead generation agencies?",
    answer:
      "Most lead gen agencies are spray-and-pray marketers who don't understand your technical positioning. We take a technical approach—we understand your stack, your differentiators, and your ideal client's challenges. We speak engineer-to-engineer and validate our approach with data before scaling.",
  },
  {
    category: "Service",
    question: "What channels do you use for outreach?",
    answer:
      "We deploy a multi-channel approach including cold email and LinkedIn outreach. All outreach is sent from infrastructure we build specifically for your campaigns. We manage 1,800+ unique outreaches per month across these channels.",
  },
  // Results
  {
    category: "Results",
    question: "How long until I see results?",
    answer:
      "Campaigns typically go live within 2 weeks. First qualified meetings usually appear within weeks 2-4. Our Volume Guarantee commits us to delivering 10 Qualified Sales Opportunities within 90 days.",
  },
  {
    category: "Results",
    question: "What kind of results can I expect?",
    answer:
      "1,800 outreaches/month at 0.5% booking rate = ~9 qualified meetings monthly. With 10% close rate and \$50K average project value = ~\$550,000 in new annual revenue from initial contracts alone.",
  },
  {
    category: "Results",
    question: "What counts as a 'Qualified Sales Opportunity'?",
    answer:
      "A prospect who passes our 4-Point Scorecard: Authority (decision-maker), Stack Fit (tech alignment), Capacity (11-200 employees), and Consent (explicit agreement to meet). No bait-and-switch calls.",
  },
  // Process
  {
    category: "Process",
    question: "What's involved in onboarding?",
    answer:
      "15-minute Feasibility Assessment → We map your TAM and build a Signal Report → Review data together → Build your custom CRI infrastructure. Total time investment: 2-3 hours for onboarding.",
  },
  {
    category: "Process",
    question: "How much of my time does this require?",
    answer:
      "We need your technical brain during initial setup (2-3 hours). After that, your only job is showing up to qualified meetings. Far less than managing an internal SDR team.",
  },
  {
    category: "Process",
    question: "How do you find companies with 'buying signals'?",
    answer:
      "Custom data scraping tracks: funding rounds, executive hires, tech stack changes in job posts, public repos, and growth indicators. When a signal matches your ICP, we trigger outreach.",
  },
  // Investment
  {
    category: "Investment",
    question: "How does pricing work?",
    answer:
      "Two parts. First, a one-time Setup Fee that covers the raw costs of building your outbound machine—Apollo data, domain setups, and sending infrastructure. Second, a Pay-Per-Qualified-Meeting fee for every meeting we book that actually shows up and fits your criteria. You only pay us a profit when we deliver a tangible result. The risk is incredibly low. You cover the base cost to build the machine, and everything after that is performance-based.",
  },
  {
    category: "Investment",
    question: "What's the ROI vs. hiring internally?",
    answer:
      "Internal SDR team: \$150k+/year + tech stack + 6 months trial and error + management overhead. CRI Protocol: proven system from Day 1, no hiring, performance guarantee. Most see positive ROI within 2-3 closed deals.",
  },
  {
    category: "Investment",
    question: "Why only 2 clients per month?",
    answer:
      "Each CRI Protocol is custom-built for your positioning and market. More clients = compromised quality. We'd rather do exceptional work for fewer clients than mediocre work for many.",
  },
  // Guarantees
  {
    category: "Guarantees",
    question: "What if you don't deliver results?",
    answer:
      "Dual Guarantee: (1) Volume—if we don't generate 10 opportunities in 90 days, we work free until we do. (2) Quality—if any lead fails our scorecard, we replace it at no cost.",
  },
  {
    category: "Guarantees",
    question: "What types of agencies is this for?",
    answer:
      "Software agencies with 10-50 employees targeting \$50K+ projects who want to scale past \$5-10M ARR without internal SDR teams. NOT for agencies under 10 people or those competing on price.",
  },
];

const categories = ["All", "Service", "Results", "Process", "Investment", "Guarantees"];

export default function FAQWithTabs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-grey-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-electric-600 bg-electric-100 rounded-full">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Frequently Asked
            <span className="text-electric-500"> Questions</span>
          </h2>
          <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto">
            Everything you need to know about the CRI Protocol.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeCategory === category
                  ? "bg-electric-500 text-white shadow-md shadow-electric-500/20"
                  : "bg-background text-grey-600 border border-grey-200 hover:border-grey-300 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {filteredFAQs.map((faq, index) => (
              <div
                key={`${activeCategory}-${index}`}
                className={`bg-background rounded-xl border transition-all duration-200 ${
                  openIndex === index
                    ? "border-electric-200 shadow-md shadow-electric-500/5"
                    : "border-grey-200 hover:border-grey-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3
                    className={`text-base font-semibold transition-colors ${
                      openIndex === index ? "text-electric-600" : "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      openIndex === index
                        ? "bg-electric-500 text-white rotate-180"
                        : "bg-grey-100 text-grey-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-grey-600 leading-relaxed pt-2 border-t border-grey-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="p-8 bg-background rounded-2xl border border-grey-200 shadow-sm">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-electric-500" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-grey-600 mb-6">
              Book a call and I&apos;ll answer everything personally.
            </p>
            <Link
              href="https://calendly.com/jamesgabbitus"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-electric-500 rounded-xl hover:bg-electric-600 transition-all active:scale-[0.98]"
            >
              Book Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}