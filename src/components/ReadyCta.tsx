"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ReadyCta() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0d0d0d] px-6 py-28 text-center border-t border-white/[0.03]">
      
      {/* Centered Ambient Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(163,230,53,0.06),transparent_50%)]" />

      {/* Background Graphic with Subtle Fade & Scale In */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-5xl bg-center bg-contain bg-no-repeat invert"
        style={{ backgroundImage: "url('/ready-bg.png')" }}
      />

      {/* Top and Bottom edge feathering */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0d0d0d] to-transparent" /> 
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

      {/* Foreground Centered Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        
        {/* Primary Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl leading-none"
        >
          Ready to <br />
          <span className="font-serif italic font-light text-neutral-300">
            take off?
          </span>
        </motion.h2>

        {/* Supporting description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-8 max-w-xl text-base text-neutral-400 leading-relaxed sm:text-lg"
        >
          Turn your next big software concept into an engineered, market-ready reality.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-bold text-black transition-all hover:bg-neutral-200 active:scale-95 shadow-xl"
          >
            <span>Get Started</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </Link>

          <Link
            href="/pricing"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
          >
            Explore Pricing
          </Link>
        </motion.div>

      </div>
    </section>
  );
}