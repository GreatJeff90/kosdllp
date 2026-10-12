import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative w-full overflow-hidden bg-[#0a0a0a] border-t border-white/[0.06] text-neutral-400">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-8">
        
        {/* Top Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">KOSD</span>
              <span className="text-neutral-500 font-light">|</span>
              <span className="text-xs font-medium tracking-wide text-neutral-300">
                KO Software Delights
              </span>
            </Link>

            <p className="mt-4 text-xs leading-relaxed text-neutral-400 max-w-sm">
              Engineering venture-grade software, AI systems, modern web platforms, and mobile apps.
            </p>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                Subscribe to our newsletter
              </p>
              <form className="mt-2.5 flex max-w-sm items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="h-9 w-full rounded-l-lg border border-white/10 bg-white/[0.04] px-3.5 text-xs text-white placeholder-neutral-500 outline-none transition focus:border-white/30"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 items-center justify-center rounded-r-lg bg-white px-3 text-xs font-semibold text-black transition hover:bg-neutral-200 active:scale-95"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Nav Links & Contact Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:justify-items-end">
            
            {/* Column 1: Product */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Product</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/features" className="transition hover:text-white">Features</Link>
                </li>
                <li>
                  <Link href="/apps" className="transition hover:text-white">Apps</Link>
                </li>
                <li>
                  <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources & Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Resources</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/about" className="transition hover:text-white">About</Link>
                </li>
                <li>
                  <Link href="/blog" className="transition hover:text-white">Blog</Link>
                </li>
                <li>
                  <Link href="/docs" className="transition hover:text-white">Documentation</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="col-span-2 sm:col-span-1 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Contact</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href="mailto:admin@kosdllp.com"
                    className="flex items-center gap-2 transition hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 text-neutral-400" />
                    <span>admin@kosdllp.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+2349017370734"
                    className="flex items-center gap-2 transition hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 text-neutral-400" />
                    <span>+234 901 737 0734</span>
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="inline-block text-neutral-300 transition hover:text-white">
                    Submit Technical Proposal &rarr;
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider & Legal Sub-bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row text-[11px] text-neutral-500">
          <p suppressHydrationWarning>
            © {currentYear} KOSD (KO Software Delights). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-neutral-300">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-neutral-300">Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* Massive Gradient Blurred Watermark Brand Mark */}
      <div className="pointer-events-none select-none relative -mb-6 md:-mb-10 w-full overflow-hidden text-center">
        <span className="block text-[22vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent">
          KOSD
        </span>
      </div>
    </footer>
  );
}