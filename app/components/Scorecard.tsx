import { UserCheck, Code2, Building2, Handshake } from "lucide-react";

export default function Scorecard() {
  const criteria = [
    {
      metric: "Authority",
      variable: "Who",
      icon: <UserCheck className="w-6 h-6" />,
      title: "Decision Power Validation",
      description:
        "Must hold a title with budget authority or technical veto power. (Target: CTO, VP of Engineering, Head of Product, Founder).",
      color: "electric",
    },
    {
      metric: "Stack Fit",
      variable: "What",
      icon: <Code2 className="w-6 h-6" />,
      title: "Environment Compatibility",
      description:
        "The company's tech stack must align with your agency's core competency. (e.g., We verify they use React/Node via public repos or job posts before outreach).",
      color: "electric",
    },
    {
      metric: "Capacity",
      variable: "Size",
      icon: <Building2 className="w-6 h-6" />,
      title: "Financial Viability",
      description:
        "Must meet the minimum employee count to support enterprise rates. (Target: 11 to 200 Employees. Filters out pre-revenue startups).",
      color: "electric",
    },
    {
      metric: "Consent",
      variable: "Intent",
      icon: <Handshake className="w-6 h-6" />,
      title: "Explicit Agreement",
      description:
        'The prospect has agreed to the meeting knowing exactly who you are and what you do. (No "bait-and-switch" or "networking" calls).',
      color: "electric",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-grey-950 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-electric-400 bg-electric-500/10 rounded-full border border-electric-500/20">
            The "Unit Test" for Leads
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
            Every Lead Must Pass the
            <span className="text-electric-400"> 4-Point Scorecard</span>
          </h2>
          <p className="mt-5 text-lg text-grey-400 max-w-2xl mx-auto">
            Before a meeting ever hits your calendar, it's validated against these four criteria.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header Row - Desktop */}
          <div className="hidden md:grid grid-cols-12 gap-4 mb-4 px-6">
            <div className="col-span-2">
              <span className="text-xs font-semibold text-grey-500 uppercase tracking-wider">
                Metric
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-grey-500 uppercase tracking-wider">
                Variable
              </span>
            </div>
            <div className="col-span-8">
              <span className="text-xs font-semibold text-grey-500 uppercase tracking-wider">
                Passing Criteria (The "Unit Test")
              </span>
            </div>
          </div>

          {/* Criteria Rows */}
          <div className="space-y-4">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="bg-grey-900 rounded-2xl border border-grey-800 p-6 hover:border-electric-500/50 transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-4 items-start">
                  {/* Metric */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 md:flex-col md:items-start">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-electric-500 text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-white">
                        {item.metric}
                      </span>
                    </div>
                  </div>

                  {/* Variable */}
                  <div className="md:col-span-2 hidden md:block">
                    <span className="inline-block px-3 py-1 bg-grey-800 rounded-lg text-grey-300 text-sm">
                      {item.variable}
                    </span>
                  </div>

                  {/* Criteria */}
                  <div className="md:col-span-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electric-500/20 text-electric-400 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-grey-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-8 p-6 bg-electric-500/10 rounded-2xl border border-electric-500/20 text-center">
            <p className="text-electric-400 font-medium">
              If a lead fails any of these tests, it doesn't reach your calendar.
              <span className="text-white ml-2">No exceptions.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}