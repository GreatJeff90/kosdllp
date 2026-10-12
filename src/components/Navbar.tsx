"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Products", href: "/products" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#0d0d0d] px-6 py-4 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex flex-col leading-tight select-none group">
          <span className="text-xl font-bold tracking-tight text-white">
            KOSD
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-300 transition-colors">
            KO SOFTWARE DELIGHTS
          </span>
        </Link>

        {/* Center: Floating Dark Pill Menu (Desktop Only) */}
        <div className="hidden md:flex items-center gap-8 rounded-full border border-white/5 bg-[#1a1a1a]/80 px-8 py-2.5 backdrop-blur-md">
          {NAV_LINKS.filter((link) => link.label !== "Products").map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-normal text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Products link visible only on desktop */}
          <Link
            href="/products"
            className="hidden md:inline-block text-xs font-normal text-neutral-300 transition-colors hover:text-white"
          >
            Products
          </Link>

          {/* Contact Button (visible everywhere) */}
          <Link
            href="/contact"
            className="rounded-xl bg-white px-4 py-2 text-xs font-medium text-black transition-opacity hover:opacity-90 active:scale-95"
          >
            Contact
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </nav>

      {/* Mobile Slide-Down Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-full mt-2 rounded-2xl border border-white/10 bg-[#141414]/95 p-6 backdrop-blur-xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}