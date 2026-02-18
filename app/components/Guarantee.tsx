import { Shield, Target, CheckCircle2 } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-20 md:py-28 lg:py-32" id="guarantee"> 
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-electric-600 bg-electric-100 rounded-full">
            <Shield className="w-4 h-4" />
            Risk Reversal
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            The Dual
            <span className="text-electric-500"> Performance Guarantee</span>
          </h2>
          <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto">
            Since we're building custom infrastructure for your agency, we operate on a strict dual guarantee. This aligns our incentives with yours completely.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Volume Guarantee */}
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
                    The Volume Guarantee
                  </h3>
                </div>
              </div>

              <p className="text-grey-600 leading-relaxed mb-6">
                You invest a one-time setup fee to build the system. From that point on, we are on the clock.
              </p>

              <div className="p-4 bg-electric-50 rounded-xl border border-electric-200 mb-6">
                <p className="text-lg font-semibold text-foreground text-center">
                  If we don't generate <span className="text-electric-600">10 Qualified Sales Opportunities</span> within the first <span className="text-electric-600">90 days</span>...
                </p>
              </div>

              <div className="flex items-center gap-3 p-4 bg-grey-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-foreground font-medium">
                  We continue working for free until we do. Our hourly rate goes to zero.
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
                We know that "volume" means nothing if the leads are bad. That's why every meeting is vetted against our 4-Point Scorecard.
              </p>

              <div className="space-y-3 mb-6">
                {["Authority", "Stack Fit", "Capacity", "Consent"].map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 p-3 bg-grey-50 rounded-lg"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-500 text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="font-medium text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-grey-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-foreground font-medium">
                  Bad lead? We replace it immediately at no cost.
                </p>
              </div>

              <p className="mt-4 text-sm text-grey-500 text-center">
                You only pay for legitimate opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}