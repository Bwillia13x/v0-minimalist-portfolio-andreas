"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "@/components/Analytics";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "agenda", label: "Agenda", href: "#agenda" },
  { id: "why-this-matters", label: "Why this matters", href: "#why-this-matters" },
  { id: "deliverables", label: "What we'll deliver", href: "#deliverables" },
  { id: "scope-1", label: "Scope 1", href: "#scope-1" },
  { id: "scope-2", label: "Scope 2", href: "#scope-2" },
  { id: "scope-3", label: "Scope 3", href: "#scope-3" },
  { id: "timeline", label: "Timeline", href: "#timeline" },
  { id: "success", label: "Success", href: "#success" },
  { id: "faqs", label: "FAQs", href: "#faqs" },
  { id: "proof", label: "Reference", href: "#proof" },
];

export function PitchSubnav() {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? "");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    // Show/hide based on scroll position
    const handleScroll = () => {
      const firstSection = document.getElementById(navItems[0]?.id ?? "");
      if (!firstSection) {
        setIsVisible(window.scrollY > 200);
        return;
      }

      const rect = firstSection.getBoundingClientRect();
      setIsVisible(rect.top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (item: NavItem) => {
    // Track anchor clicks
    if (typeof window !== "undefined" && window.plausible) {
      trackEvent("pitch_anchor_clicked", { section: item.id });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-[var(--ps-bg)]/95 backdrop-blur-sm border-b border-[var(--ps-border)] transition-all duration-300"
      role="navigation"
      aria-label="Pitch page navigation"
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-[var(--ps-surface)] ${
                  activeSection === item.id
                    ? "text-[var(--ps-primary)] bg-[var(--ps-surface)]"
                    : "text-[var(--ps-muted)] hover:text-[var(--ps-text)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-sm bg-[var(--ps-primary)] text-white rounded-md hover:bg-[var(--ps-primary-weak)] transition-colors"
              onClick={() => {
                if (typeof window !== "undefined" && window.plausible) {
                  trackEvent("pitch_cta_clicked", { cta: "consult", location: "subnav" });
                }
              }}
            >
              Book Call
            </Link>
            <Link
              href="#summary"
              className="px-3 py-1.5 text-sm border border-[var(--ps-border)] rounded-md hover:bg-[var(--ps-surface)] transition-colors"
              onClick={() => {
                if (typeof window !== "undefined" && window.plausible) {
                  trackEvent("pitch_cta_clicked", { cta: "scroll-top", location: "subnav" });
                }
              }}
            >
              ↑ Top
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
