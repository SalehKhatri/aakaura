"use client";
import fonts from "@/config/fonts";
import Container from "./ui/Container";
import Heading from "./ui/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurPath() {
  return (
    <section className="py-16 md:py-24 overflow-x-hidden flex justify-center items-center relative">
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
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`${fonts.merriweather} text-lg leading-relaxed space-y-8 text-justify text-primaryBrown`}
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our path for Aakaura is simple yet profound—to make people
                  realise their strengths, become the best versions of
                  themselves, and never stop showing up for themselves. We do
                  this because we have experienced firsthand- the transformative
                  power of energy, self-love, and inner healing. Like every
                  human, we have faced dark moments, but through deep reverence
                  and love for our own energy, we have realized that we never
                  needed to depend on anyone else for our fulfillment. This
                  realization is what makes us truly human.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Once we recognize our own power and potential, we become
                  better at navigating relationships, appreciating life, and
                  embracing the beauty of existence. We begin to fall in love
                  with nature, with the smallest moments, and with the energy
                  that surrounds us. Just as nature understands its own power,
                  we, too, start respecting the energy within ourselves and
                  others. We believe that we seldom require any techniques or
                  set methods to understand our strengths. Through our products,
                  our storytelling, and the experience we create, we want to
                  help people reconnect with this truth, yes, that&apos;s
                  exactly what we wish for. :)
                </motion.p>
              </div>
            </motion.div>

            {/* Right side with image and final paragraph */}
            <motion.div
              className="lg:col-span-6 space-y-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:sticky md:top-28 space-y-8">
                <motion.div
                  className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/banner.jpg"
                    alt="Sacred Space"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.div
                  className={`${fonts.merriweather} text-lg leading-relaxed text-justify text-primaryBrown bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p>
                    Every product we craft carries the love and dedication of
                    local artisans— individuals who, despite never having worked
                    on such designs before, have embraced this journey with open
                    hearts. We not only collaborate with them on their artistry
                    but also introduce them to the power of energies and
                    auras—concepts that are new to them yet resonate deeply.
                    Aakaura is more than just a brand; it is a growing community
                    where creativity, spirituality, and self-awareness come
                    together in the most beautiful way.
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
