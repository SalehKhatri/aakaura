"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeftShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import fonts from "@/config/fonts";

export default function SplashScreen() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const text = "Manifesting your aura…";
  const letters = text.split("");

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

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.3 * i },
    }),
  };

  // Letter animation
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: -10,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

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
          <div className="w-full md:w-[65%] h-[40%] md:h-full bg-primaryBeige flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.85, rotate: -10 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 50 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                scale: { type: "spring", damping: 15, stiffness: 120 },
              }}
              className="relative w-full h-full flex flex-col items-center justify-center"
            >
              <Image
                src="/splashLogo.png"
                alt="Aakura Logo"
                className="object-contain"
                fill
                quality={100}
                priority
              />

              <div className="absolute bottom-[25%] md:bottom-[35%] left-0 right-0 text-center">
                <motion.p
                  className={`${fonts.specialElite} text-base md:text-2xl text-primaryBrown overflow-hidden`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {letters.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      style={{
                        display: "inline-block",
                        marginRight: letter === " " ? "0.25em" : "0",
                        whiteSpace: "pre",
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Blur effect area */}
          <div
            className="w-full md:w-[35%] h-[60%] md:h-full bg-primaryBeige/20 backdrop-blur cursor-pointer relative flex flex-col items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: 1,
                transition: {
                  opacity: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.4,
                    delay: 0.8,
                  },
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Arrow Animation */}
              <motion.div
                animate={{
                  x: isMobile ? 0 : [-8, 8, -8],
                  y: isMobile ? [-8, 8, -8] : 0,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <BsArrowLeftShort className="w-10 h-10 md:w-12 md:h-12 text-primaryBrown opacity-100 rotate-90 md:rotate-0 drop-shadow-lg" />
              </motion.div>

              {/* CTA Text */}
              <motion.p
                className="mt-2 text-base md:text-xl text-primaryBrown font-semibold tracking-wide"
                initial={{ opacity: 0.7, scale: 0.95 }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0px 0px 5px rgba(0,0,0,0.2)",
                    "0px 0px 10px rgba(0,0,0,0.3)",
                    "0px 0px 5px rgba(0,0,0,0.2)",
                  ],
                  transition: {
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                }}
              >
                Click to Explore
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
