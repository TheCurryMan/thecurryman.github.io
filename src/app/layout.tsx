import "./globals.css";
import { Inter, Manrope, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
