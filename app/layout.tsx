import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seymour Plumbing | Smithfield QLD",
  description:
    "Seymour Plumbing — locally owned plumbing, drainage & gas services in Smithfield QLD. Licensed, insured, affordable. Call 0420 909 405.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
