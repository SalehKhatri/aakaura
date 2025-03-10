"use client";
import fonts from "@/config/fonts";
import Container from "./ui/Container";
import Heading from "./ui/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurPath() {
  return (
    <section className="py-8 md:py-16 overflow-x-hidden flex justify-center items-center relative">
      <Container>
        {/* Section Title with decorative elements */}
        <div className="text-center mb-16 md:mb-24">
          <Heading title={"Our Path"} />
        </div>

        {/* Main content with journey visualization */}
        <div className="relative max-w-7xl mx-auto">
          {/* Decorative path line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primaryRed/0 via-primaryRed/20 to-primaryRed/0 hidden lg:block -translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side content */}
            <motion.div
              className="lg:col-span-6 lg:pr-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`${fonts.mulish} text-lg md:text-xl leading-relaxed space-y-8 text-justify text-primaryBrown`}
              >
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="list-disc space-y-4 pl-5"
                >
                  <li>
                    <span className="font-semibold">
                      Empowerment & Self-Discovery:
                    </span>{" "}
                    Our purpose is to help people realize their strengths,
                    become their best selves, and show up for themselves every
                    day.
                  </li>
                  <li>
                    <span className="font-semibold">
                      The Power of Energy & Inner Healing:
                    </span>{" "}
                    We&apos;ve experienced how energy, self-love, and healing
                    can transform our lives. Like everyone, we&apos;ve faced
                    darkness — but by honoring our own energy, we discovered
                    that true fulfillment comes from within.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Living in Harmony with Life:
                    </span>{" "}
                    When we embrace our inner power, we navigate relationships
                    better, appreciate life deeply, and fall in love with nature
                    and small moments of beauty.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Respecting Our Energy & Others:
                    </span>{" "}
                    Just as nature understands its strength, we, too, begin to
                    respect the energy within ourselves and those around us.
                  </li>
                  <li>
                    <span className="font-semibold">
                      No Set Techniques, Just Connection:
                    </span>{" "}
                    We believe people rarely need rigid methods to access their
                    strength. Through our products, storytelling, and the
                    experiences we create, we simply guide people back to this
                    truth.
                  </li>
                </motion.ul>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Yes, that&apos;s exactly what we wish for.
                </motion.p>
              </div>
            </motion.div>

            {/* Right side with image and final paragraph */}
            <motion.div
              className="lg:col-span-6 space-y-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:sticky md:top-28 space-y-8">
                <motion.div
                  className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/OurPath.jpg"
                    alt="Sacred Space"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.div
                  className={`${fonts.mulish} text-lg md:text-xl leading-relaxed text-justify text-primaryBrown bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p>
                    Every product we craft carries the love and dedication of
                    local artisans — individuals who pour their hearts into each
                    creation. Our collaboration goes beyond artistry; we share
                    the beauty of energies and auras, inviting them to explore
                    these concepts as they infuse their work with meaning.
                    Aakaura is more than just a brand; it&apos;s a growing
                    community where creativity, spirituality, and self-awareness
                    come together in the most beautiful way.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-primaryRed/5 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute right-0 top-1/4 w-32 h-32 bg-primaryRed/5 rounded-full blur-3xl hidden lg:block" />
      </Container>
    </section>
  );
}
