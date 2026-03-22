import {
  Server,
  Target,
  DatabaseZap,
  BrainCircuit,
  FlaskConical,
  Radar,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure Built for Inbox Placement",
      description:
        "The very first thing we do - before any research, before any copy, before a single prospect is identified - is register and begin warming your sending infrastructure. Dedicated domains built from scratch, never shared, never recycled. Full DMARC, DKIM, and SPF authentication on every domain. Sending volume capped and ramped gradually to stay well clear of spam triggers. We target 90–95%+ inbox placement and monitor deliverability continuously. Your domain reputation stays completely protected - and when the campaign is done, all of it belongs to you permanently.",
      duration: "Days 1–14",
      parallel: false,
    },
    {
      number: "02",
      icon: <Target className="w-6 h-6" />,
      title: "ICP & Offer Engineering",
      description:
        "While infrastructure warms in the background, we do the most important thinking work of the entire system. We use AI-augmented research to identify the specific frustrations, pressures, and priorities your best-fit clients are dealing with right now - then build an offer around those findings. Not a generic value proposition. A precise statement that makes the right prospect think: this is written for me. Everything downstream - the list, the copy, the targeting - depends on getting this right.",
      duration: "Days 1–7",
      parallel: true,
    },
    {
      number: "03",
      icon: <DatabaseZap className="w-6 h-6" />,
      title: "Hyper-Targeted, Triple-Verified Lead Lists",
      description:
        "With ICP confirmed and infrastructure still warming, we build your prospect list using multi-layer enrichment - tech stack, funding stage, hiring signals, intent data, and company growth indicators. Every contact is verified across three data sources before it enters your pipeline. We'd rather send to 3,000 highly qualified prospects than 10,000 loosely matched ones. Volume without precision is just noise.",
      duration: "Days 7–14",
      parallel: true,
    },
    {
      number: "04",
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI-Powered Personalisation at Scale",
      description:
        "Also running in parallel with the final weeks of infrastructure warmup, our AI research agent reads each prospect's website, recent news, job listings, and live tech stack individually before writing their sequence. The result isn't a template with their name dropped in. It reads like a message from someone who's been paying close attention to their business specifically. At scale, that distinction is the difference between a reply and a delete.",
      duration: "Days 7–14",
      parallel: true,
    },
    {
      number: "05",
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Controlled Testing Phase",
      description:
        "By the time infrastructure warmup completes, the prospect list is built, verified, and ready. The sequences are written and approved. We launch immediately - no delays - to a carefully controlled prospect sample and test multiple sequence variations across subject lines, openers, value framing, and calls to action. We measure everything and we don't open the taps to full scale until we've confirmed a proven 0.5% booking-rate benchmark. Scaling a losing sequence is one of the most expensive mistakes in outbound. This phase exists specifically to prevent that.",
      duration: "Day 14 onwards",
      parallel: false,
    },
    {
      number: "06",
      icon: <Radar className="w-6 h-6" />,
      title: "Scale + Live Buying-Signal Intelligence",
      description:
        "With a proven sequence confirmed, we scale to 3,000 fresh verified prospects every month. Simultaneously, our AI monitors live buying signals for every prospect in your pipeline - new funding rounds, tech migrations, key hires, job posts - and adjusts your sequences dynamically to reach the right person at the exact moment their need becomes urgent. Most agencies see booking rates climb from 0.5% to 1.5%+ once the buying-signal layer is active, typically within the first 30–45 days. Timing is the variable most outbound systems ignore entirely.",
      duration: "Ongoing",
      parallel: false,
    },
    {
      number: "07",
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn as a Second Channel",
      description:
        "Once your email system is stable and producing consistent results, we layer in LinkedIn as a second channel - adding a familiarity layer that makes email land even warmer. We'll tell you when the data says the timing is right. Until then we focus entirely on making email perform as well as it possibly can.",
      duration: "When the data says so",
      parallel: false,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-electric-600 bg-electric-100 rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            The Sequence -
            <span className="text-electric-500"> And Why It Matters</span>
          </h2>
          <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto text-pretty">
            Most outbound systems fail because they skip steps or apply them in
            the wrong order. Every stage below has a reason for being exactly
            where it is.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div
            className="absolute left-[39px] top-12 bottom-12 w-px bg-gradient-to-b from-electric-500 via-electric-300 to-electric-100 hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  number,
  icon,
  title,
  description,
  duration,
  parallel,
  isLast,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  parallel: boolean;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-6 md:gap-8 md:py-8">
      {/* Step Number & Icon */}
      <div className="flex-shrink-0 relative z-10">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-electric-500 text-primary-foreground shadow-lg shadow-electric-500/20">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm font-bold text-electric-500 tracking-wide">
            STEP {number}
          </span>
          <span className="px-3 py-1 text-xs font-medium text-grey-600 bg-grey-100 rounded-full">
            {duration}
          </span>
          {parallel && (
            <span className="px-3 py-1 text-xs font-medium text-electric-700 bg-electric-50 border border-electric-200/60 rounded-full">
              ⚡ Runs in parallel
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2 md:text-2xl">
          {title}
        </h3>
        <p className="text-grey-600 leading-relaxed max-w-xl text-sm">
          {description}
        </p>

        {/* Arrow to next step - Mobile */}
        {!isLast && (
          <div className="mt-6 md:hidden">
            <ChevronRight className="w-5 h-5 text-grey-300 rotate-90" />
          </div>
        )}
      </div>
    </div>
  );
}