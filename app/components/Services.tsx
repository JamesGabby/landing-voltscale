import { 
  Target, 
  Users, 
  Mail, 
  BarChart3, 
  Linkedin, 
  Calendar,
  ArrowUpRight
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-grey-100/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-electric-600 bg-electric-100 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Everything You Need to
            <span className="text-electric-500"> Scale Your Pipeline</span>
          </h2>
          <p className="mt-5 text-lg text-grey-600 max-w-2xl mx-auto text-pretty">
            We handle the entire lead generation process end-to-end, so your sales team can focus on closing deals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Target className="w-6 h-6" />}
            title="ICP Research & Targeting"
            description="We identify and validate your ideal customer profile using data-driven analysis to ensure every lead matches your exact criteria."
          />
          <ServiceCard
            icon={<Linkedin className="w-6 h-6" />}
            title="LinkedIn Outreach"
            description="Personalized connection requests and messaging sequences that start meaningful conversations with decision-makers."
          />
          <ServiceCard
            icon={<Mail className="w-6 h-6" />}
            title="Cold Email Campaigns"
            description="High-deliverability email infrastructure with A/B tested copy that consistently lands in primary inboxes."
          />
          <ServiceCard
            icon={<Users className="w-6 h-6" />}
            title="Lead Qualification"
            description="Every lead is vetted against your qualification criteria before reaching your calendar. No more tire-kickers."
          />
          <ServiceCard
            icon={<Calendar className="w-6 h-6" />}
            title="Appointment Setting"
            description="We book calls directly on your calendar with qualified prospects who are ready to discuss solutions."
          />
          <ServiceCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Analytics & Reporting"
            description="Transparent dashboards showing campaign performance, pipeline value, and ROI metrics updated in real-time."
          />
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
      <p className="text-grey-600 leading-relaxed">
        {description}
      </p>
    </article>
  );
}