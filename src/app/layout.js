import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { RedHatText } from "@/app/fonts";

export const metadata = {
  title: {
    template: "%s | Rafli Malik",
    default: "Rafli Malik",
  },
  description: "Rafli Malik's Personal Portfolio Website",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF5F6" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={
        "m-0 p-0 max-w-full scroll-smooth box-border antialiased " +
        RedHatText.className
      }>
      <body className="max-w-full mx-6 md:mx-8 lg:mx-12 xl:mx-14 transition-all duration-300 ease-out ">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
