import {
  Server,
  Target,
  DatabaseZap,
  BrainCircuit,
  FlaskConical,
  Radar,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-grey-100/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-electric-600 bg-electric-100 rounded-full">
            What We Build For You
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            A Fully Engineered
            <span className="text-electric-500"> Client Acquisition System</span>
          </h2>
          <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto text-pretty">
            Every component is built from scratch for your agency, sequenced in
            the right order, and owned by you permanently - regardless of what
            happens next.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Server className="w-6 h-6" />}
            title="Sending Infrastructure"
            description="Dedicated domains registered and warmed specifically for your campaign - never shared, never recycled. Full DMARC, DKIM, and SPF authentication on every domain, with deliverability monitored continuously. We target 90–95%+ inbox placement before a single message goes out."
          />
          <ServiceCard
            icon={<Target className="w-6 h-6" />}
            title="ICP & Offer Engineering"
            description="We use AI-augmented research to identify the specific frustrations, pressures, and priorities your best-fit clients are dealing with right now - then build an offer around those findings. Not a generic value proposition. A precise statement that makes the right prospect think: this is written for me."
          />
          <ServiceCard
            icon={<DatabaseZap className="w-6 h-6" />}
            title="Triple-Verified Lead Lists"
            description="Prospect lists built using multi-layer enrichment - tech stack, funding stage, hiring signals, intent data, and company growth indicators. Every contact is verified across three data sources before it enters your pipeline. We'd rather send to 3,000 highly qualified prospects than 10,000 loosely matched ones."
          />
          <ServiceCard
            icon={<BrainCircuit className="w-6 h-6" />}
            title="AI-Powered Personalisation"
            description="Our AI research agent reads each prospect's website, recent news, job listings, and live tech stack individually before writing their sequence. The result reads like a message from a technical peer who's been paying close attention - not a template with a name field dropped in."
          />
          <ServiceCard
            icon={<FlaskConical className="w-6 h-6" />}
            title="Controlled Testing & Optimisation"
            description="We launch to a carefully controlled sample and test multiple sequence variations across subject lines, openers, value framing, and calls to action. We don't open the taps to full scale until we've confirmed a proven 0.5% booking-rate benchmark. Scaling a losing sequence is one of the most expensive mistakes in outbound."
          />
          <ServiceCard
            icon={<Radar className="w-6 h-6" />}
            title="Live Buying-Signal Intelligence"
            description="Once at scale, our AI monitors live buying signals for every prospect in your pipeline - new funding rounds, tech migrations, key hires, job posts - and adjusts your sequences dynamically to reach the right person at the exact moment their need becomes urgent. Timing is the variable most outbound systems ignore entirely."
          />
        </div>

        {/* LinkedIn Add-On Note */}
        <div className="mt-8 flex items-start gap-4 max-w-2xl mx-auto p-5 rounded-2xl border border-electric-200/60 bg-electric-50/60">
          <div className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-electric-100 text-electric-600">
            <Linkedin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-0.5">
              LinkedIn Outreach - Available as a Future Add-On
            </p>
            <p className="text-sm text-grey-600 leading-relaxed">
              Once your email system is stable and producing consistent results,
              we layer in LinkedIn as a second channel - adding a familiarity
              layer that makes email land even warmer. We'll tell you when the
              data says the timing is right. Until then, we focus entirely on
              making email perform as well as it possibly can.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="group relative p-6 md:p-8 bg-background rounded-2xl border border-grey-200/80 transition-all duration-300 ease-out-expo hover:shadow-xl hover:shadow-grey-900/5 hover:border-grey-300/80 hover:-translate-y-1">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-electric-100 text-electric-600 transition-colors duration-300 group-hover:bg-electric-500 group-hover:text-primary-foreground">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
        {title}
        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-electric-500" />
      </h3>
      <p className="text-grey-600 leading-relaxed text-sm">{description}</p>
    </article>
  );
}