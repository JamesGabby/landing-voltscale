import Link from "next/link";
import { Zap, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Process", href: "#process" },
      { name: "Results", href: "#results" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const social = [
    { name: "LinkedIn", href: "https://linkedin.com/company/voltscale", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/voltscale", icon: Twitter },
    { name: "Email", href: "mailto:hello@voltscale.com", icon: Mail },
  ];

  return (
    <footer className="bg-grey-950 text-white pt-16 pb-8 md:pt-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-grey-800">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-electric-500 text-primary-foreground">
                <Zap className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Volt<span className="text-electric-400">Scale</span>
              </span>
            </Link>
            <p className="text-grey-400 text-sm leading-relaxed mb-6 max-w-xs">
              We help B2B companies build predictable pipelines and scale revenue 
              through targeted outbound lead generation.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
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
              Company
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
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
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
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-grey-500">
            © {currentYear} VoltScale. All rights reserved.
          </p>
          <p className="text-sm text-grey-600">
            Made with <span className="text-electric-400">⚡</span> for B2B growth
          </p>
        </div>
      </div>
    </footer>
  );
}