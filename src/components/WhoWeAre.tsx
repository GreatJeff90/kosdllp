"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-[#0d0d0d] px-6 py-24 sm:py-32 text-center border-t border-white/[0.03]">
      {/* Centered Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />

      {/* Full Bleed Background Handshake Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 0.22, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 h-full w-full bg-center bg-cover bg-no-repeat select-none"
        style={{ backgroundImage: "url('/handshake.png')" }}
      />

      {/* Edge Feathering Gradients to seamlessly blend adjoining dark sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />

      {/* Foreground Centered Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight"
        >
          Who{" "}
          <span className="font-serif italic font-light text-neutral-300">
            are we?
          </span>
        </motion.h2>

        {/* Primary Statement */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-8 max-w-3xl text-xl sm:text-3xl md:text-4xl font-light text-neutral-200 leading-snug"
        >
          We&apos;re{" "}
          <span className="font-semibold text-white">KO Software Delights</span>
          , your best option for building leading{" "}
          <span className="font-normal text-white">websites</span>,{" "}
          <span className="font-normal text-white">games</span>, and{" "}
          <span className="font-normal text-white">mobile apps</span>.
        </motion.p>
      </div>
    </section>
  );
}