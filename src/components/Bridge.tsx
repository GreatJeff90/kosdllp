"use client";

import { motion } from "framer-motion";

export default function Bridge() {
  return (
    <section id="about" className="relative w-full h-[80vh] md:h-screen bg-[#0d0d0d] overflow-hidden border-t border-white/[0.03]">
      
      {/* Cinematic Full-Width Background Image with Subtle Entrance Zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/connection.png')" }}
      />
      
      {/* Shadow layer to blend top/bottom edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d] pointer-events-none" />

      {/* Screen corners content container */}
      <div className="relative z-10 w-full h-full mx-auto max-w-7xl flex flex-col justify-between p-6 sm:p-12 md:p-16">
        
        {/* Top-Left Corner: Primary Title */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl self-start"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl uppercase leading-none">
            CONNECTING <br />
            <span className="font-serif italic text-neutral-300 normal-case font-light">
              your idea
            </span>
          </h2>
        </motion.div>

        {/* Bottom-Right Corner: Target Headings & Narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-xl self-end text-left md:text-right md:ml-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            TO THE WORLD
          </h1>

          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-serif italic font-light text-neutral-300 leading-tight">
            with modern technology
          </h2>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400 max-w-md md:ml-auto">
            Translating vision into code. We bridge the gap between creative ambition and robust, distributed production systems, engineering scalable, high-performance web and mobile products.
          </p>
        </motion.div>

      </div>
    </section>
  );
}