"use client";

import { useState } from "react";
import { Mail, Phone, ArrowUpRight, CheckCircle2, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdwldnr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setShowModal(true);
      } else {
        const data = await response.json();
        setErrorMsg(data?.errors?.[0]?.message || "Failed to deliver message. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between overflow-x-hidden">
      <main className="relative w-full flex-1">
        
        {/* Mobile Background Graphic */}
        <div
          className="pointer-events-none absolute inset-0 block md:hidden bg-contain bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: "url('/pillars.png')" }}
        />
        <div className="pointer-events-none absolute inset-0 block md:hidden bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Desktop Left Column: Pillar Graphic & Direct Reach */}
            <div className="relative flex flex-col justify-between lg:col-span-5 h-full">
              
              {/* Graphic container (Desktop only) */}
              <div className="relative hidden md:block aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50"
                  style={{ backgroundImage: "url('/pillars.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Direct Reach info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Direct Contact
                  </span>
                </div>

                <div className="space-y-2 text-xs text-neutral-300">
                  <a
                    href="mailto:admin@kosdllp.com"
                    className="flex items-center gap-2.5 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-neutral-400" />
                    <span>admin@kosdllp.com</span>
                  </a>
                  <a
                    href="tel:+2349017370734"
                    className="flex items-center gap-2.5 transition hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-neutral-400" />
                    <span>+234 901 737 0734</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Header & Form */}
            <div className="lg:col-span-7 lg:pl-6">
              
              <div>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
                  Initiate <br />
                  <span className="font-serif italic font-light text-neutral-300">
                    your build.
                  </span>
                </h1>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-lg">
                  Tell us about your project vision or technical requirements. We review incoming proposals and respond promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6 max-w-xl">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-white/30"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-white/30"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Brief overview of what you are looking to build or scale..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-white/30"
                  />
                </div>

                {/* Private discovery call checkbox */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="privateCall"
                    name="privateCall"
                    value="Yes"
                    className="h-4 w-4 rounded border-white/20 bg-white/5 accent-white cursor-pointer"
                  />
                  <label
                    htmlFor="privateCall"
                    className="text-xs text-neutral-300 select-none cursor-pointer"
                  >
                    Want a private discovery call?
                  </label>
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-400 font-medium">{errorMsg}</p>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-bold text-black transition hover:bg-neutral-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                    </>
                  )}
                </button>

              </form>

            </div>

          </div>
        </div>
      </main>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#141414] p-6 text-center shadow-2xl sm:p-8"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 rounded-lg p-1 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/10 text-lime-400 mb-4">
                <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
              </div>

              <h3 className="text-xl font-bold tracking-tight text-white">
                Proposal Received
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Thank you for reaching out. We have received your technical inquiry and will review your specifications shortly.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full rounded-xl bg-white py-2.5 text-xs font-bold text-black transition hover:bg-neutral-200 active:scale-95"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}