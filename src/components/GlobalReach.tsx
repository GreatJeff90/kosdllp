"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GlobalReach() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0d0d0d] px-6 text-center">
      {/* Background radial ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

      {/* Rotating Globe Background with Entrance Fade & Scale */}
      <div className="pointer-events-none absolute flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[480px] w-[480px] sm:h-[620px] sm:w-[620px] md:h-[750px] md:w-[750px] select-none"
        >
          {/* Continuous Rotation Layer */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 45,
              ease: "linear",
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/globe.png"
              alt="Rotating dotted globe"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Centered Text Overlay with Staggered Entrance Animations */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight"
        >
          Get your ideas around the globe, <br />
          <span className="font-serif italic font-light text-neutral-300">
            without hassle.
          </span>
        </motion.h2>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex items-center gap-4"
        >
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-xs font-bold text-black transition-all hover:bg-neutral-200 active:scale-95 shadow-lg shadow-white/5"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Top & Bottom fade gradients to blend into adjoining dark sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0d0d0d] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
    </section>
  );
}