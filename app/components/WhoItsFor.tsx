import { CheckCircle2, XCircle } from "lucide-react";

const forList = [
  {
    text: "Established software or development agency with 10–50 team members",
  },
  {
    text: "Already doing at least \$20k in monthly revenue — but pipeline still swings unpredictably",
  },
  {
    text: "Proven sales process with a close rate of 20%+ on the right opportunities",
  },
  {
    text: "3–8 solid, recent case studies that make prospects say \"these guys are legit\"",
  },
  {
    text: "Ideal client universe of at least 50,000–100,000+ companies",
  },
  {
    text: "Still leaning heavily on referrals — some months slammed, others scrambling with your bench sitting idle",
  },
  {
    text: "Done with tire-kickers — you only want serious prospects who already understand the value of what you build",
  },
  {
    text: "Ready to add \$750,000+ to your qualified pipeline in the next 90 days",
  },
];

const notForList = [
  {
    text: "Brand-new agencies still trying to land their first few case studies",
  },
  {
    text: "Anyone expecting overnight results — this is a system that compounds and rewards patience",
  },
  {
    text: "Anyone with poor communication — tight, fast collaboration is non-negotiable",
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="py-20 md:py-28 lg:py-32 bg-grey-100/50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-electric-600 bg-electric-100 rounded-full">
            Is This For You?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Built for a Very
            <span className="text-electric-500"> Specific Agency</span>
          </h2>
          <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto text-pretty">
            This system isn't for everyone — and that's deliberate. Read both
            lists carefully before booking a call.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* For Column */}
          <div className="relative rounded-2xl border border-grey-200 bg-background p-8 overflow-hidden">
            {/* Subtle top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-400 to-electric-600 rounded-t-2xl"
              aria-hidden="true"
            />

            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0" />
              This is for you if…
            </h3>

            <ul className="space-y-4">
              {forList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-electric-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-grey-600 leading-snug">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Column */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl border border-grey-200 bg-background p-8 overflow-hidden flex-1">
              {/* Subtle top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-grey-300 to-grey-400 rounded-t-2xl"
                aria-hidden="true"
              />

              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-grey-400 shrink-0" />
                This is NOT for you if…
              </h3>

              <ul className="space-y-4">
                {notForList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-grey-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-grey-600 leading-snug">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifier Note */}
            <div className="rounded-2xl border border-electric-200/60 bg-electric-50/60 p-6">
              <p className="text-sm text-grey-600 leading-relaxed">
                <span className="font-semibold text-foreground">
                  If these points resonate —
                </span>{" "}
                you have a proven delivery machine that just needs a reliable
                engine in front of it. That's exactly the problem this system
                was built to solve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}