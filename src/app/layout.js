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
  description:
    "Hi! I'm Rafli Malik, a student from Bina Nusantara University, majoring in Computer Science. I'm a Front-End Developer, UI/UX Designer, and a Tech Enthusiast.",
  openGraph: {
    title: "Rafli Malik",
    description:
      "I'm a Front End Developer, UI/UX Designer, and Tech Enthusiast. Currently majoring in Computer Science at Bina Nusantara University",
    url: "https://www.raflimalik.com/",
    siteName: "Rafli Malik",
    images: [
      {
        url: "/photosquarezoom.jpg", // Must be an absolute URL
        width: 800,
        height: 800,
        alt: "Portrait of Rafli Malik",
      },
    ],
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#AA4465" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={
        "m-0 box-border max-w-full scroll-smooth p-0 antialiased " +
        RedHatText.className
      }>
      <body className="mx-6 max-w-full transition-all duration-300 ease-out md:mx-8 lg:mx-12 xl:mx-14">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
