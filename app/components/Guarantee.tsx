import { Shield, Target, CheckCircle2 } from "lucide-react";

const qualityCriteria = [
  {
    label: "Geography",
    detail: "Based in the US or Canada",
  },
  {
    label: "Company Size",
    detail: "10–200 employees",
  },
  {
    label: "Decision-Maker",
    detail: "CTO, VP of Engineering, or Founder",
  },
  {
    label: "Attendance",
    detail: "Attends the call and stays for at least 10 minutes",
  },
  {
    label: "Active Need",
    detail: "Has an active or upcoming need for at least one software developer",
  },
];

export default function Guarantee() {
  return (
    <section className="py-20 md:py-28 lg:py-32" id="guarantee">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-electric-600 bg-electric-100 rounded-full">
            <Shield className="w-4 h-4" />
            Zero Financial Risk
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Our Double
            <span className="text-electric-500"> Performance Guarantee</span>
          </h2>
          <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto">
            You pay a one-time $500 setup fee to cover hard infrastructure
            costs. After that, it is pure pay-per-qualified-call. No retainers.
            No monthly minimums. No paying for work that doesn't produce
            results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Quantity Guarantee */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-transparent rounded-3xl" />
            <div className="relative p-8 bg-background rounded-2xl border border-grey-200 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-electric-100 text-electric-600">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-sm font-medium text-electric-600">
                    Guarantee #1
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    The Quantity Guarantee
                  </h3>
                </div>
              </div>

              <p className="text-grey-600 leading-relaxed mb-6">
                From the moment your infrastructure is live, we are on the
                clock. The system runs, the meetings come in, or we keep working
                until they do.
              </p>

              <div className="p-4 bg-electric-50 rounded-xl border border-electric-200 mb-6">
                <p className="text-lg font-semibold text-foreground text-center">
                  If we don't deliver{" "}
                  <span className="text-electric-600">
                    15 qualified leads
                  </span>{" "}
                  within the first{" "}
                  <span className="text-electric-600">90 days</span>…
                </p>
              </div>

              <div className="flex items-center gap-3 p-4 bg-grey-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-foreground font-medium">
                  We work for free until we do. No caveats, no small print.
                </p>
              </div>

              <p className="mt-4 text-sm text-grey-500 text-center">
                The risk is entirely on our shoulders to perform.
              </p>
            </div>
          </div>

          {/* Quality Guarantee */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-transparent rounded-3xl" />
            <div className="relative p-8 bg-background rounded-2xl border border-grey-200 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-electric-100 text-electric-600">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-sm font-medium text-electric-600">
                    Guarantee #2
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    The Quality Guarantee
                  </h3>
                </div>
              </div>

              <p className="text-grey-600 leading-relaxed mb-6">
                Every lead must meet all five criteria below before you're
                charged for it. You define and control these thresholds. If any
                lead falls short on any single one of them, you don't pay for
                it. Period. Example:
              </p>

              <div className="space-y-2.5 mb-6">
                {qualityCriteria.map((criterion, index) => (
                  <div
                    key={criterion.label}
                    className="flex items-start gap-3 p-3 bg-grey-50 rounded-lg"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-500 text-white text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-foreground">
                        {criterion.label}
                      </span>
                      <p className="text-xs text-grey-500 mt-0.5 leading-snug">
                        {criterion.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-grey-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-foreground font-medium">
                  Any lead that misses even one criterion? You don't pay for it.
                </p>
              </div>

              <p className="mt-4 text-sm text-grey-500 text-center">
                You only pay for legitimate, qualified opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Closing note */}
        <p className="mt-10 text-center text-sm text-grey-500 max-w-xl mx-auto">
          One closed deal at your average deal size pays back the entire
          engagement - with significant room to spare.
        </p>
      </div>
    </section>
  );
}