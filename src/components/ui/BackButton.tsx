"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, [pathname]);

  if (!canGoBack) return null;

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-4 py-2 text-primaryBrown border border-primaryBrown rounded-lg hover:bg-primaryBrown hover:text-white transition"
    >
      <FaArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
}
