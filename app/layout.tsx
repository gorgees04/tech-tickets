import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/Navbar";

const inter = Nunito({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Tech Tickets",
  description: "create tech tickets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-mainPage text-pageGreen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
