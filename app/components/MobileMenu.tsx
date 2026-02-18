"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap, ArrowRight } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#results", label: "Results" },
    { href: "#about", label: "About" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-grey-600 hover:text-foreground hover:bg-grey-100 transition-colors duration-200"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-grey-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <nav
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-out-expo md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-grey-200">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="flex items-center gap-2"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-electric-500 text-primary-foreground">
                <Zap className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Volt<span className="text-electric-500">Scale</span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-grey-600 hover:text-foreground hover:bg-grey-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transform transition-all duration-300 ease-out-expo ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${(index + 1) * 50}ms` : "0ms",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between px-4 py-3 text-lg font-medium text-grey-700 rounded-xl transition-colors duration-200 hover:text-foreground hover:bg-grey-100"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 text-grey-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer CTA */}
          <div
            className={`p-4 border-t border-grey-200 transform transition-all duration-300 ease-out-expo ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? "250ms" : "0ms",
            }}
          >
            <Link
              href="#book-call"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-primary-foreground bg-electric-500 rounded-xl transition-all duration-200 hover:bg-electric-600 active:scale-[0.98]"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-3 text-center text-sm text-grey-500">
              Free 30-min consultation
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}