"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { X } from "lucide-react";

const bannerMessages = [
  "⚡ Pay Per Qualified Call",
  "🎯 10 Leads in 90 Days or We Work for Free",
  "✅ Leads Vetted Against Our 4-Point Scorecard",
  "⚙️ Plug into Our Hybrid Outbound Infrastructure",
];

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [, setScrolledPastThreshold] = useState(false);

  // Hide banner on scroll, show again at top
  useEffect(() => {
    if (bannerDismissed) return;

    let lastScrollY = window.scrollY;
    const threshold = 50;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > threshold) {
        setScrolledPastThreshold(true);
        setShowBanner(false);
      } else {
        setScrolledPastThreshold(false);
        setShowBanner(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bannerDismissed]);

  const handleDismiss = () => {
    setBannerDismissed(true);
    setShowBanner(false);
  };

  const bannerVisible = showBanner && !bannerDismissed;

  return (
    <>
      {/* Scrolling Announcement Banner */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-electric-600 via-electric-500 to-electric-600 text-white overflow-hidden select-none transition-all duration-300 ease-out ${
          bannerVisible
            ? "h-10 opacity-100 translate-y-0"
            : "h-0 opacity-0 -translate-y-full"
        }`}
        aria-hidden={!bannerVisible}
      >
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee 30s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}</style>
        <div className="relative h-10 flex items-center">
          <div className="marquee-track flex items-center whitespace-nowrap">
            {[
              ...bannerMessages,
              ...bannerMessages,
              ...bannerMessages,
              ...bannerMessages,
            ].map((msg, i) => (
              <span
                key={i}
                className="inline-flex items-center text-[13px] font-semibold tracking-wide"
              >
                <span className="px-6">{msg}</span>
                <span className="text-white/30 text-xs">✦</span>
              </span>
            ))}
          </div>
          {/* Gradient fade + close button */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center px-3 bg-gradient-to-l from-electric-500 via-electric-500 to-transparent w-16">
            <button
              onClick={handleDismiss}
              className="ml-auto p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close announcement banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`fixed left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-[top] duration-300 ease-out ${
          bannerVisible ? "top-10" : "top-0"
        }`}
      >
        <div className="container-custom">
          <nav
            className="flex items-center justify-between h-14 md:h-16"
            aria-label="Main navigation"
          >
            {/* Logo */}
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
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Volt<span className="text-electric-500">Scale</span>
                <span className="ml-1.5 text-xs font-medium text-grey-400 tracking-wide mt-5">
                  Partners
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <NavLinks />
              <div className="ml-4 pl-4 border-l border-grey-200">
                <Link
                  href="https://calendly.com/jamesgabbitus/30min"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-primary-foreground bg-electric-500 rounded-lg transition-all duration-200 hover:bg-electric-600 hover:shadow-lg hover:shadow-electric-500/20 active:scale-[0.98]"
                >
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </nav>
        </div>
      </header>
    </>
  );
}

function NavLinks() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#guarantee", label: "Guarantee" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <ul className="flex items-center gap-0.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="px-3.5 py-2 text-sm font-medium text-grey-600 rounded-lg transition-colors duration-150 hover:text-foreground hover:bg-grey-100/80"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}