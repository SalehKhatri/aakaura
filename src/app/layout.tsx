"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { SplashScreenProvider } from "@/context/SplashScreenProvider";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  // Dynamic JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aakaura",
    url: "https://aakaura.in",
    description:
      "Aakaura is your sanctuary for spiritual awakening, mindfulness, and holistic healing. Explore handcrafted decor, chakra balancing, meditation guides, and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aakaura.in/search?q={search_term}",
      "query-input": "required name=search_term",
    },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f5efe6" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aakaura.in" />
        <meta
          property="og:title"
          content="Aakaura - Spiritual Growth & Wellness"
        />
        <meta
          property="og:description"
          content="Aakaura is your sanctuary for spiritual awakening, mindfulness, and holistic healing."
        />
        <meta property="og:image" content="/images/splashLogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Aakaura - Spiritual Growth & Wellness"
        />
        <meta
          name="twitter:description"
          content="Explore handcrafted decor, meditation guides, and holistic healing resources."
        />
        <meta name="twitter:image" content="/images/splashLogo.png" />
      </head>
      <body className="bg-secondaryBeige">
        <Toaster />
        <SplashScreenProvider>
          {!isAdminRoute && <Navbar />}
          <main className={`${!isAdminRoute && "pt-20"}`}>{children}</main>
          {!isAdminRoute && <Footer />}
        </SplashScreenProvider>
      </body>
    </html>
  );
}
