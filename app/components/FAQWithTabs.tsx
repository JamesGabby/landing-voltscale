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
    question: "What exactly is this?",
    answer:
      "A fully engineered client acquisition system built specifically for established software agencies. We build your sending infrastructure from scratch, research and verify your prospect list, write AI-personalised sequences using live data on each prospect, and deliver qualified meetings to your calendar on a pay-per-call basis. You show up and close. We handle everything upstream of that.",
  },
  {
    category: "Service",
    question: "How is this different from other lead generation agencies?",
    answer:
      "Most lead gen agencies use bought lists, generic templates, and shared sending infrastructure. That approach fails consistently and expensively - and it's not cold email failing, it's a specific, fixable version of it.\n\nWhat's structurally different here: every prospect is individually researched and triple-verified before a single message goes out. Sending infrastructure is built from scratch and dedicated entirely to your campaign. Our AI research agent writes every sequence using live data - each prospect's website, LinkedIn profile, recent posts, job listings, and tech stack - so every message reads like outreach from a technical peer who's been paying close attention. Not a template with a name field dropped in.",
  },
  {
    category: "Service",
    question: "What channels do you use?",
    answer:
      "Cold email is the foundation. We build dedicated sending infrastructure, warm it over two weeks, and launch to 3,000 triple-verified prospects per month.\n\nLinkedIn is available as a second channel once your email system is stable and producing consistent results - it adds a familiarity layer that makes email land even warmer. We'll tell you when the data says the timing is right. Until then, we focus entirely on making email perform as well as it possibly can.",
  },
  // Results
  {
    category: "Results",
    question: "How long until I see results?",
    answer:
      "The infrastructure warmup takes a mandatory two weeks - but we start it on day one so it costs you zero additional calendar time. ICP research, list building, and sequence writing all run in parallel during that window.\n\nBy day 14, the list is built, sequences are approved, and we launch immediately. First qualified meetings typically appear within weeks two to four of launch. Our quantity guarantee commits us to 15 qualified leads within 90 days.",
  },
  {
    category: "Results",
    question: "What kind of results can I expect?",
    answer:
      "The conservative benchmark: 3,000 verified prospects per month at a 0.5% booking rate delivers 15 qualified calls. At a 20% close rate and $75,000 average deal size, that's 3 new clients per month - $225,000 in new monthly revenue.\n\nOnce the AI buying-signal layer is active - typically within the first 30–45 days - most agencies see booking rates climb to 1.5% or higher. That's the same 3,000 prospects delivering 45+ calls per month, pushing new monthly revenue toward $300,000–$450,000+.\n\nThese numbers are the floor, not the ceiling. We build to the conservative case and let the system outperform it.",
  },
  {
    category: "Results",
    question: "What counts as a qualified lead?",
    answer:
      "Every lead must meet all five criteria before you're charged for it - and you define and control these thresholds:\n\n1. Based in the US or Canada\n2. At a company with 10–200 employees\n3. A genuine decision-maker: CTO, VP of Engineering, or Founder\n4. Attends the call and stays for at least 10 minutes\n5. Has an active or upcoming need for at least one software developer\n\nIf any lead falls short on any single one of them, you don't pay for it. Period.",
  },
  // Process
  {
    category: "Process",
    question: "How does the onboarding process work?",
    answer:
      "Day one: we register and begin warming your dedicated sending infrastructure - this has a mandatory two-week warmup and starting it immediately means it costs you zero extra calendar time.\n\nIn parallel: we run ICP and offer engineering to identify exactly what your best-fit clients are struggling with right now, build your triple-verified prospect list using multi-layer enrichment, and write your AI-personalised sequences.\n\nBy day 14: everything is ready. We launch to a controlled sample, test variations, and confirm a proven 0.5% booking-rate benchmark before scaling to full volume. Total time from you during setup: two to three hours.",
  },
  {
    category: "Process",
    question: "How much of my time does this require?",
    answer:
      "Two to three hours during initial setup - working through ICP, offer positioning, and sequence approval. After that, your only job is showing up to qualified meetings and closing.\n\nWe handle the research, the infrastructure, the copy, the testing, the deliverability monitoring, the buying-signal intelligence, and the sequence optimisation. You stay completely focused on leading your engineering team and shipping great software.",
  },
  {
    category: "Process",
    question: "How do you personalise at scale without it becoming a template?",
    answer:
      "Our AI research agent reads each prospect's website, recent news coverage, LinkedIn profile, recent posts, job listings, and live tech stack individually before writing their sequence. It's not a merge-field operation - it's a research-first write for every single prospect.\n\nThe result reads like outreach from a technical peer who's been paying close attention to their business specifically. At scale, that distinction is the difference between a reply and a delete.",
  },
  // Investment
  {
    category: "Investment",
    question: "How does pricing work?",
    answer:
      "There is a one-time setup fee of $500.\n\nThis covers the hard costs we front on your behalf - domain registration and hosting, email authentication and DNS configuration, inbox warmup, prospect sourcing and list building, data enrichment, email verification, sending platform setup, and AI research agent usage. It is not a revenue line for us. It is an investment in building your outbound infrastructure from scratch - all of which you own permanently from day one.\n\nAfter that, it is pure pay-per-qualified-call. You only pay when a lead hits your calendar and meets all five quality criteria. No retainers. No monthly minimums. No paying for work that doesn't produce results.\n\nOne closed deal at your average deal size pays back the entire engagement - with significant room to spare.",
  },
  {
    category: "Investment",
    question: "What's the ROI compared to building this internally?",
    answer:
      "Building internally typically means $100,000+ annually on an SDR team and manager - people who've likely never sold technical services. Then months of domain warmup, tool selection, copy testing, and compliance work, all while pulling your focus away from leading your engineering team. Most agencies who attempt the DIY route see their first real traction at month seven or eight, if they make it that far.\n\nWhen you partner with us, you plug into a fully validated system from day one - proven ICP, winning copy, clean verified data, live buying signals, protected infrastructure, and consistent qualified meetings on your calendar.",
  },
  {
    category: "Investment",
    question: "Why do you keep your client count deliberately small?",
    answer:
      "The buying-signal monitoring, sequence optimisation, and deliverability management we do is not automated set-and-forget work. It requires genuine, ongoing attention to each client's market, ICP, and live sequence performance.\n\nThat's why we have a cap on our active client count - not as a sales device, but as a quality control mechanism. When we reach capacity, new enquiries go to a waitlist. We are currently filling our first cohort of case study partners at a reduced rate. Once those spots are filled, the next opening will be at full price and on a waitlist basis.",
  },
  // Guarantees
  {
    category: "Guarantees",
    question: "What are the guarantees exactly?",
    answer:
      "There are two.\n\nQuantity guarantee: we deliver 15 qualified leads within 90 days. If we don't, we work for free until we do.\n\nQuality guarantee: every lead must meet all five criteria you define and control. If any lead falls short on any of them, you don't pay for it. Period.\n\nNo caveats. No small print. The risk is entirely on our shoulders to perform.",
  },
  {
    category: "Guarantees",
    question: "What agencies is this actually built for?",
    answer:
      "Established software or development agencies with 10–50 team members already doing at least $20k in monthly revenue - but whose pipeline still swings unpredictably, and who are still leaning heavily on referrals and networking.\n\nYou should have a proven sales process, a close rate of 20% or more on the right opportunities, three to eight solid recent case studies, and an ICP universe of at least 50,000–100,000+ companies.\n\nThis is not for brand-new agencies still trying to land their first few case studies, anyone expecting overnight results, or anyone with poor communication - tight, fast collaboration is non-negotiable.",
  },
];

const categories = [
  "All",
  "Service",
  "Results",
  "Process",
  "Investment",
  "Guarantees",
];

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
            Everything you need to know about how VoltScale Partners works.
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
                      openIndex === index
                        ? "text-electric-600"
                        : "text-foreground"
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
                    openIndex === index
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-grey-600 leading-relaxed border-t border-grey-100 pt-4 whitespace-pre-line text-sm">
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
              Book a call and I'll answer everything personally. I'll tell you
              honestly within that call whether I'm confident I can deliver for
              you - and if I'm not, I'll tell you that plainly.
            </p>
            <Link
              href="https://calendly.com/voltscalepartners/quick-chat"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-electric-500 rounded-xl hover:bg-electric-600 transition-all active:scale-[0.98]"
            >
              Book Your Free Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}