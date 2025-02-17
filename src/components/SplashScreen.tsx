"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeftShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SplashScreen() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const hasBeenSplashed = sessionStorage.getItem("hasBeenSplashed");

      if (!hasBeenSplashed) {
        setIsOpen(true);
        sessionStorage.setItem("hasBeenSplashed", "true");
      }
    }
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ x: 0, y: 0 }}
          exit={{
            x: isMobile ? 0 : "-100%",
            y: isMobile ? "-100%" : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col md:flex-row"
        >
          {/* Logo area */}
          <div className="w-full md:w-[65%] h-[40%] md:h-full bg-primaryBeige flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.85, rotate: -10 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 50 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
                scale: { type: "spring", damping: 15, stiffness: 120 },
              }}
              className="relative w-48 h-48 md:w-[480px] md:h-[480px]"
            >
              <Image
                src="/logo.png"
                alt="Aakura Logo"
                className="object-contain"
                fill
                quality={100}
                priority
              />
            </motion.div>
          </div>

          {/* Blur effect area */}
          <div
            className="w-full md:w-[35%] h-[60%] md:h-full bg-primaryBeige/35 backdrop-blur cursor-pointer relative"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                animate={{
                  x: isMobile ? 0 : [-5, 5, -5],
                  y: isMobile ? [-5, 5, -5] : 0,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <BsArrowLeftShort className="w-8 h-8 md:w-10 md:h-10 text-primaryBrown opacity-100 rotate-90 md:rotate-0" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
