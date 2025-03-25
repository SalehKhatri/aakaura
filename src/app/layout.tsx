"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { SplashScreenProvider } from "@/context/SplashScreenProvider";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="aakaura.in"
          src="https://analytics.aakaura.in/js/script.js"
        ></script>
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
