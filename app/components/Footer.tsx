import Link from "next/link";
import { Zap, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: "Who It's For", href: "#who-its-for" },
      { name: "How It Works", href: "#process" },
      { name: "Guarantee", href: "#guarantee" },
      { name: "About", href: "#about" },
      { name: "FAQ", href: "#faq" },
    ],
    engagement: [
      { name: "Book a Discovery Call", href: "https://calendly.com/voltscalepartners/quick-chat" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const social = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/jamesgabbitus",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:james@voltscale.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-grey-950 text-white pt-16 pb-8 md:pt-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-grey-800">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/vs-logo.png"
                  alt="VoltScale Logo"
                  fill
                  className="object-cover"
                  sizes="36px"
                  priority
                />
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Volt<span className="text-electric-500">Scale</span>
                <span className="ml-1.5 text-xs font-medium text-grey-400 tracking-wide mt-5">
                  Partners
                </span>
              </span>
            </Link>
            <p className="text-grey-400 text-sm leading-relaxed mb-4 max-w-sm">
              We build AI-augmented cold email infrastructure for established
              software agencies — delivering qualified meetings on a
              pay-per-call basis, with no retainers and no monthly minimums.
            </p>
            <p className="text-grey-500 text-sm leading-relaxed mb-6 max-w-sm">
              15 qualified leads in 90 days, or we work for free until we do.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-grey-800 text-grey-400 transition-colors duration-200 hover:bg-grey-700 hover:text-white"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-grey-400 transition-colors duration-200 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Get Started
            </h3>
            <ul className="space-y-3">
              {navigation.engagement.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    className="text-sm text-grey-400 transition-colors duration-200 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <div className="mt-8 p-4 rounded-xl bg-grey-800/60 border border-grey-700/60">
              <p className="text-xs text-grey-400 leading-relaxed mb-3">
                Currently filling our first cohort of case study partners at a
                reduced rate. Once those spots are filled, the next opening will
                be at full price.
              </p>
              <Link
                href="https://calendly.com/voltscalepartners/quick-chat"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-400 hover:text-electric-300 transition-colors duration-200"
              >
                <Zap className="w-3.5 h-3.5" />
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-grey-500">
            © {currentYear} VoltScale Partners. All rights reserved.
          </p>
          <p className="text-sm text-grey-600">
            Built by{" "}
            <span className="text-grey-400 font-medium">James Gabbitus</span>
            {" "}·{" "}
            <span className="text-electric-400">⚡</span>
            {" "}UK
          </p>
        </div>
      </div>
    </footer>
  );
}