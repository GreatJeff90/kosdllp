import { MousePointer2 } from "lucide-react";
import CardShowcase from "./CardShowcase";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-[#0d0d0d] pt-12 text-center text-white">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6">
        {/* Floating Cursor Tag: Robert (Left) */}
        <div className="absolute -left-12 top-6 hidden -rotate-6 items-center gap-1.5 sm:flex md:-left-20">
          <div className="rounded-full bg-[#52b788] px-3.5 py-1 text-xs font-semibold text-white shadow-lg">
            Robert
          </div>
          <MousePointer2 className="h-4 w-4 -rotate-90 fill-[#52b788] text-[#52b788]" />
        </div>

        {/* Floating Cursor Tag: Clarissa (Right) */}
        <div className="absolute -right-8 bottom-6 hidden rotate-6 items-center gap-1.5 sm:flex md:-right-16">
          <MousePointer2 className="h-4 w-4 rotate-45 fill-[#f2707a] text-[#f2707a]" />
          <div className="rounded-full bg-[#f2707a] px-3.5 py-1 text-xs font-semibold text-white shadow-lg">
            Clarissa
          </div>
        </div>

        {/* Top Tag / Pill */}
        <div className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-lime-400">
          <span className="h-2 w-2 rounded-full bg-lime-400" />
          <span>Early Access — Build Your Identity</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-normal tracking-tight text-white sm:text-6xl md:text-7xl">
          Build Your Identity <br />
          <span className="font-serif italic font-light text-neutral-200">Connect</span> Your World
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
          Join a vibrant community space where conversations come alive — express yourself through unique avatars and stand out in every interaction.
        </p>
      </div>

      {/* 3D Cards Showcase */}
      <CardShowcase />
    </section>
  );
}