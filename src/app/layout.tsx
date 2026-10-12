import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className="bg-[#0d0d0d] text-white antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}