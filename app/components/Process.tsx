import { 
  Search, 
  Wrench, 
  Rocket, 
  TrendingUp,
  ChevronRight
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-6 h-6" />,
      title: "Discovery & Demo Call",
      description: "We dive deep into your business, ICP, and goals to create a custom lead generation strategy tailored to your market.",
      duration: "Week 1",
    },
    {
      number: "02",
      icon: <Wrench className="w-6 h-6" />,
      title: "Infrastructure Setup",
      description: "We build your outreach infrastructure—domains, email accounts, LinkedIn profiles, and targeting lists.",
      duration: "Week 1-2",
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6" />,
      title: "Campaign Launch",
      description: "Your campaigns go live with personalized messaging, continuous A/B testing, and real-time optimization.",
      duration: "Week 3",
    },
    {
      number: "04",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scale & Optimize",
      description: "As results come in, we double down on what works and continuously refine to maximize your pipeline growth.",
      duration: "Ongoing",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-electric-600 bg-electric-100 rounded-full">
            Our Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            From Zero to Pipeline
            <span className="text-electric-500"> in 21 Days</span>
          </h2>
          <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto text-pretty">
            Our proven 4-step process gets you from signed contract to qualified leads on your calendar in just three weeks.
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
  isLast,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
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
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-sm font-bold text-electric-500 tracking-wide">
            STEP {number}
          </span>
          <span className="px-3 py-1 text-xs font-medium text-grey-600 bg-grey-100 rounded-full">
            {duration}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2 md:text-2xl">
          {title}
        </h3>
        <p className="text-grey-600 leading-relaxed max-w-xl">
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