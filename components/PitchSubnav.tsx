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
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "audit", label: "Audit", href: "#audit" },
  { id: "plan", label: "Plan", href: "#plan" },
  { id: "solution-stack", label: "Solution", href: "#solution-stack" },
  { id: "value", label: "Value", href: "#value" },
  { id: "next-steps", label: "Next Steps", href: "#next-steps" },
];

export function PitchSubnav() {
  const [activeSection, setActiveSection] = useState("overview");
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
      const summarySection = document.getElementById("summary");
      if (summarySection) {
        const rect = summarySection.getBoundingClientRect();
        setIsVisible(rect.bottom < 0); // Show after summary section is scrolled past
      }
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
