"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import BackButton from "@/components/ui/BackButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const showBackButton = pathname !== "/admin";

  useEffect(() => {
    const token = Cookies.get("admin_token");
    if (!token) return router.push("/admin/login");
    setIsLoading(false);
  }, [router, pathname]);
  // Skip auth check if we're already on the login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-primaryBrown">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="px-8 py-4">{showBackButton && <BackButton />}</div>
      {children}
    </div>
  );
}
