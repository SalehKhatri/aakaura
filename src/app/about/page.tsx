"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import fonts from "@/config/fonts";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-secondaryBeige text-primaryBrown">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070"
          alt="Spiritual Background"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            className={`${fonts.playfair} text-6xl font-bold`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Aakaura
          </motion.h1>
          <motion.p
            className={`${fonts.specialElite} text-2xl mt-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Manifesting your aura
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className={`${fonts.dekko} text-4xl text-primaryRed mb-6`}>
              Our Story
            </h2>
            <p className={`${fonts.merriweather} text-lg leading-relaxed`}>
              Aakaura was founded with the vision of creating a sanctuary for
              spiritual seekers. We believe in the deep connection between mind,
              body, and soul, curating tools and wisdom to help you embrace your
              journey of self-discovery.
            </p>
          </div>
          <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/banner.jpg"
              alt="Sacred Space"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/crystals.jpg"
              alt="Crystal Collection"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className={`${fonts.dekko} text-4xl text-primaryRed mb-6`}>
              Our Mission
            </h2>
            <p className={`${fonts.mulish} text-lg leading-relaxed`}>
              We aim to provide high-quality spiritual tools, ethically sourced
              crystals, and a community-driven platform to share ancient wisdom
              and modern mindfulness techniques.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className={`${fonts.dekko} text-4xl text-primaryBrown mb-12`}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description:
                  "We prioritize genuine connections and truthful practices in everything we offer.",
              },
              {
                title: "Mindfulness",
                description:
                  "Every item is chosen with intention to help you cultivate awareness in daily life.",
              },
              {
                title: "Community",
                description:
                  "We foster a space where like-minded individuals can connect, share, and grow together.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3
                  className={`${fonts.patrickHand} text-2xl text-primaryRed mb-4`}
                >
                  {value.title}
                </h3>
                <p className={`${fonts.mulish} text-primaryBrown`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=2070"
            alt="Spiritual Journey"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white px-6">
            <motion.p
              className={`${fonts.specialElite} text-3xl text-center max-w-2xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Join us on this sacred journey of self-discovery and spiritual
              growth.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
