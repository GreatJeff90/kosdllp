import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "KOSD | KO Software Delights",
  description: "Engineering venture-grade software, AI systems, modern web platforms, and mobile apps.",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className="bg-[#0d0d0d] text-white antialiased scroll-smooth  overflow-x-hidden min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}