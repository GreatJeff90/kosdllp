"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeAreFor() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-[#0d0d0d] px-6 py-24 md:py-32 border-t border-white/[0.03]">
      
      {/* Pillars Graphic anchored to the Left with entrance slide & fade */}
      <motion.div 
        initial={{ opacity: 0, x: -40, scale: 1.05 }}
        whileInView={{ opacity: 0.5, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-2/3 md:w-1/2 h-full bg-left-center bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('/pillars.png')" }}
      />

      {/* Gradients to blend the pillars naturally into the dark theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0d0d0d] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

      {/* Foreground Content pinned to the Right with staggered entrance animations */}
      <div className="relative z-10 mx-auto w-full max-w-7xl flex justify-end">
        <div className="w-full md:max-w-xl lg:max-w-2xl text-left pl-4 md:pl-10">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]"
          >
            Who are <span className="font-serif italic font-light text-neutral-300">we for?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="mt-8 text-xl sm:text-2xl font-light text-neutral-200 leading-relaxed"
          >
            We&apos;re for everyone seeking <span className="text-white font-medium">digital presence</span> through software and AI, websites and mobile apps.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-lg"
          >
            From modern founders and creators to growing institutions, we architect stable pillars of technology to scale your brand across the web.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold text-black transition-all hover:bg-neutral-200 active:scale-95 shadow-lg shadow-white/5"
            >
              <span>Get Started</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}