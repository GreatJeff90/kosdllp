"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Structures() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-[#0d0d0d] px-6 py-24 md:py-32 border-t border-white/[0.03]">
      
      {/* Background Graphic pinned to the right with entrance zoom & fade */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05, x: 40 }}
        whileInView={{ opacity: 0.7, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-2/3 h-full bg-right-bottom md:bg-right bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('/structures.png')" }}
      />

      {/* Gradients to smoothly blend the graphic into the dark container */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0d0d0d] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]"
          >
            Building from scratch <br />
            or managing{" "}
            <span className="font-serif italic font-light text-neutral-300">
              existing structures,
            </span>{" "}
            <br />
            <span className="text-lime-400">we got you.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold text-black transition-all hover:bg-neutral-200 active:scale-95 shadow-lg shadow-white/5"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
            >
              Explore Pricing
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}