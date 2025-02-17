"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { SplashScreenProvider } from "@/context/SplashScreenProvider";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  return (
    <html lang="en">
      <body className="bg-secondaryBeige">
        <Toaster />
        <SplashScreenProvider>
          {!isAdminRoute && <Navbar />}
          <main className={`${!isAdminRoute && "pt-24"}`}>{children}</main>
        </SplashScreenProvider>
      </body>
    </html>
  );
}
