import { Analytics } from "@vercel/analytics/next"
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Layout from "./Layout/Layout";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibm.variable} ${fraunces.variable}`}>
      <body>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}