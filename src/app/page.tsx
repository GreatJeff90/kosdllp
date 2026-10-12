import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bridge from "@/components/Bridge";
import WhoWeAre from "@/components/WhoWeAre";
import GlobalReach from "@/components/GlobalReach";
import Structures from "@/components/Structures";
import WhoWeAreFor from "@/components/WhoWeAreFor";

import ReadyCta from "@/components/ReadyCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      {/* <Hero /> */}
      <GlobalReach />
      <Bridge />
      <WhoWeAre />
      <Structures />
      <WhoWeAreFor />
      <ReadyCta />
      <Footer />
    </main>
  );
}