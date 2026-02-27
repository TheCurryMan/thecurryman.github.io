import "./globals.css";
import { Inter, Manrope, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });

export const metadata = {
  title: "Avinash Jain",
  description: "Avinash Jain's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="node_modules/react-github-contribution-calendar/default.css"
          type="text/css"
        />
      </head>
      <body className={`${inter.className} ${manrope.variable} ${lato.variable}`}>
        <header className="fixed top-4 left-4 z-50">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="AJ Logo"
              width={48}
              height={48}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
