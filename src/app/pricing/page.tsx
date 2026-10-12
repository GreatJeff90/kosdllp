"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

type Category = "web" | "apps";

interface Plan {
  id: string;
  name: string;
  range: string;
  sub: string;
  highlighted?: boolean;
  badge?: string;
  description: string;
  features: string[];
}

const WEB_PLANS: Plan[] = [
  {
    id: "std-web",
    name: "Standard Projects",
    range: "$300 – $500",
    sub: "one-time investment",
    description: "Ideal for founders, creators, portfolios, and high-converting modern landing pages.",
    features: [
      "Custom domain registration (.com / .io / .org included for 1 yr)",
      "High-speed edge cloud web hosting",
      "SSL Certificate & automated HTTPS renewal",
      "Fully responsive mobile & desktop interface",
      "SEO configuration & OpenGraph metadata setup",
      "Integrated contact / lead capture forms",
      "Fast 5–10 day turnaround",
    ],
  },
  {
    id: "prm-web",
    name: "Premium Systems",
    range: "$500 – $1,500",
    sub: "one-time investment",
    highlighted: true,
    badge: "Most Popular",
    description: "Full-scale corporate websites, headless CMS portals, e-commerce, and interactive web apps.",
    features: [
      "Everything in Standard",
      "Custom UI/UX motion design & Framer Motion transitions",
      "Headless CMS integration (Sanity / Strapi / Supabase)",
      "E-commerce / Stripe / Paystack payment integration",
      "User authentication & protected member dashboards",
      "Continuous deployment (CI/CD) & CDN cache optimization",
      "Priority performance tuning (< 1s load times)",
      "30 days post-launch technical support",
    ],
  },
  {
    id: "ent-web",
    name: "Enterprise Architecture",
    range: "$2,000+",
    sub: "scoped to scale",
    badge: "Maximum Performance",
    description: "Mission-critical architectures, multi-tenant SaaS platforms, high-concurrency systems, and AI web solutions.",
    features: [
      "Everything in Premium",
      "Complex relational / distributed database modeling",
      "AI / LLM API integration with streaming responses",
      "Enterprise security compliance & OWASP hardening",
      "Dedicated multi-region hosting & autoscaling infra",
      "Full API documentation & microservice architecture",
      "Direct engineer Slack/WhatsApp collaboration",
      "90 days post-launch SLA & code warranty",
    ],
  },
];

const APP_PLANS: Plan[] = [
  {
    id: "std-app",
    name: "Prototype & MVP",
    range: "$2,500 – $5,000",
    sub: "global milestone rate",
    description: "Rapid native or cross-platform proof-of-concept ready for test flight, beta users, and seed fundraising.",
    features: [
      "Cross-platform iOS & Android build (React Native / Flutter)",
      "Essential core feature workflow & state management",
      "Firebase / Supabase backend setup & auth",
      "App Store & Google Play submission preparation",
      "Offline caching & essential local data storage",
      "Direct APK/TestFlight staging builds",
    ],
  },
  {
    id: "prm-app",
    name: "Production Native / Hybrid",
    range: "$5,000 – $15,000",
    sub: "global milestone rate",
    highlighted: true,
    badge: "Commercial Grade",
    description: "Complete commercial iOS & Android applications with custom backends, in-app billing, and telemetry.",
    features: [
      "Dual native-feel iOS & Android application",
      "Custom REST / GraphQL API & microservice backend",
      "In-App Purchases (StoreKit & Play Billing) / Stripe",
      "Push notification systems (OneSignal / FCM)",
      "Real-time data synchronization & WebSockets",
      "Full App Store & Google Play approval guarantee",
      "Crashlytics, Mixpanel analytics & error tracking",
    ],
  },
  {
    id: "ent-app",
    name: "Games & Heavy Interactive",
    range: "$15,000+",
    sub: "custom engineering",
    badge: "Bespoke",
    description: "Interactive 2D/3D games, AR systems, real-time multiplayer networks, and bespoke algorithmic applications.",
    features: [
      "Unity / custom web canvas 2D/3D game engineering",
      "Real-time multiplayer authoritative networking",
      "Custom shaders, haptic feedback & spatial audio",
      "Cloud save states, leaderboards & matchmaking",
      "Cross-platform desktop, console, or mobile deployment",
      "Performance optimization targeting 60–120 FPS",
      "Dedicated technical director & full lifecycle QA",
    ],
  },
];

export default function PricingPage() {
  const [category, setCategory] = useState<Category>("web");
  const plans = category === "web" ? WEB_PLANS : APP_PLANS;

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* Fixed Background Image across scroll */}
      <div 
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 mx-auto h-full w-full max-w-6xl bg-center bg-contain bg-no-repeat opacity-25 invert"
        style={{ backgroundImage: "url('/ready-bg.png')" }}
      />

      {/* Top & Bottom edge soft vignettes */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-[1]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-[1]" />

      <main className="relative z-10 w-full flex-1 px-6 pt-16 pb-28 md:pt-24 md:pb-36">
        <div className="mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.08]"
            >
              Predictable costs, <br />
              <span className="font-serif italic font-light text-neutral-300">
                exceptional software.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-sm text-neutral-400 leading-relaxed sm:text-base max-w-xl mx-auto"
            >
              Every build comes engineered with production-ready standards, secure deployment, and zero hidden maintenance traps.
            </motion.p>

            {/* Toggle Segment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 inline-flex items-center rounded-full border border-white/10 bg-[#161616]/80 p-1.5 backdrop-blur-md"
            >
              <button
                type="button"
                onClick={() => setCategory("web")}
                className={`relative rounded-full px-6 py-2.5 text-xs font-semibold transition-all ${
                  category === "web"
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Web Platforms & Sites
              </button>
              <button
                type="button"
                onClick={() => setCategory("apps")}
                className={`relative rounded-full px-6 py-2.5 text-xs font-semibold transition-all ${
                  category === "apps"
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Mobile Apps & Games
              </button>
            </motion.div>

            {category === "web" && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-[11px] text-neutral-400 tracking-wide"
              >
                *Includes 1st-year domain registration, cloud edge hosting & SSL setup.
              </motion.p>
            )}
          </div>

          {/* Pricing Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
            >
              {plans.map((plan, index) => {
                const isHighlight = plan.highlighted;

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/30 ${
                      isHighlight
                        ? "border-2 border-white/30 bg-[#141414]/90 shadow-2xl shadow-white/5 ring-1 ring-white/20"
                        : "border border-white/10 bg-[#121212]/80 hover:bg-[#151515]/90"
                    }`}
                  >
                    {/* Top Content */}
                    <div>
                      {/* Badge / Pill */}
                      <div className="flex items-center justify-between gap-2 min-h-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                          {plan.name}
                        </span>
                        {plan.badge && (
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                              isHighlight
                                ? "bg-white text-black"
                                : "border border-white/10 bg-white/5 text-neutral-300"
                            }`}
                          >
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      {/* Range / Price */}
                      <div className="mt-6 flex flex-baseline items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                          {plan.range}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-1 uppercase tracking-wider">
                        {plan.sub}
                      </p>

                      {/* Description */}
                      <p className="mt-5 text-xs text-neutral-300 leading-relaxed min-h-[40px]">
                        {plan.description}
                      </p>

                      {/* Divider */}
                      <div className="my-6 h-px w-full bg-white/[0.08]" />

                      {/* Features List */}
                      <ul className="space-y-3.5 text-xs text-neutral-300">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-snug text-neutral-300">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-8 pt-4">
                      <Link
                        href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold transition-all active:scale-95 ${
                          isHighlight
                            ? "bg-white text-black hover:bg-neutral-200 shadow-xl"
                            : "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
                        }`}
                      >
                        <span>Select Plan</span>
                        <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                      </Link>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#121212]/60 p-6 text-center backdrop-blur-md"
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Need a Custom Architecture or Retainer?
            </h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              If your system involves existing database migrations, distributed microservices, or custom AI agent workflows, we provide customized milestone scopes.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-neutral-200 hover:text-white transition-colors underline underline-offset-4 decoration-white/30"
            >
              <span>Schedule technical scoping &rarr;</span>
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}