"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import fonts from "@/config/fonts";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Aakaura</title>
        <meta
          name="description"
          content="Learn more about our mission and team."
        />
        <meta property="og:title" content="About Us - Your Website" />
        <meta
          property="og:description"
          content="Learn more about our mission and team."
        />
      </Head>
      <div className="min-h-screen bg-secondaryBeige text-primaryBrown">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <Image
            quality={100}
            src="/images/aboutBanner.jpg"
            alt="Spiritual Background"
            fill
            className="object-cover brightness-[0.55] scale-105 transform hover:scale-110 transition-transform duration-700"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-4xl">
            <motion.h1
              className={`${fonts.dekko} text-5xl md:text-7xl font-bold tracking-wider text-primaryBeige relative`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Hindi text with natural shirorekha */}
              आक
              {/* Latin text with custom line */}
              <span className={`${fonts.specialElite} text-4xl md:text-6xl`}>
                aura
              </span>
              {/* Decorative line that's 60% width and centered */}
              <div className="absolute left-4 right-0 top-[6.5px] md:top-[11px] flex justify-center items-center w-full">
                <div className="bg-primaryBeige h-1 md:h-[5px] w-[55%] md:w-[75%] block"></div>
              </div>
            </motion.h1>
            <motion.p
              className={`${fonts.specialElite} text-xl md:text-2xl mt-6 tracking-wide`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Manifesting your aura…
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-white/80 mx-auto mt-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 space-y-32">
          {/* What is Aakaura */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-16"
          >
            <div className="space-y-8">
              <h2
                className={`${fonts.specialElite} text-4xl md:text-5xl text-primaryRed relative`}
              >
                Why Aakaura?
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primaryRed/30" />
              </h2>
              <div
                className={`${fonts.mulish} text-lg leading-relaxed space-y-6 text-justify`}
              >
                {/* Your existing paragraphs */}
                <p>
                  We at Aakaura believe this is our calling — not something we
                  chose, but something that chose us. This journey has been a
                  deeply fulfilling process, and we&apos;re immensely grateful
                  to share it with the world.
                </p>
                <p>
                  Aakaura is not just a business; it&apos;s a space for
                  self-discovery and inner freedom. We live in a world filled
                  with external influences — societal beliefs, opinions, and the
                  constant noise of social media. It&apos;s easy to forget the
                  simplicity of existence. But reality is fluid. It doesn&apos;t
                  demand to be real; it is what we perceive it to be.
                </p>
                <p>
                  The truth is, our thoughts shape our world.
                  <br />
                  The limits we unknowingly set for ourselves are often the only
                  things holding us back. When we recognize our own power, we
                  navigate life with more love, awareness, and appreciation for
                  the energy within and around us.
                </p>
                <p>
                  Through Aakaura, we hope to help people reconnect with this
                  truth.
                  <br />
                  To embrace self-love, show up for themselves, and build a
                  deeper connection with their energy. Because when we align
                  with our true selves, we naturally bring more peace and
                  harmony to the world.
                </p>
                <p>
                  Wishing love and light to everyone on this beautiful path.
                </p>
                {/* ... rest of your paragraphs ... */}
              </div>
            </div>
            <div className="h-full">
              <div className="md:sticky md:top-28">
                <motion.div
                  className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/About_1.jpg"
                    alt="Sacred Space"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Our Community */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-16"
          >
            <div className="h-full">
              <div className="md:sticky md:top-28">
                <motion.div
                  className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/About_2.jpg"
                    alt="Crystal Collection"
                    fill
                    className="object-cover object-right group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>
            <div className="space-y-8">
              <h2
                className={`${fonts.specialElite} text-4xl md:text-5xl text-primaryRed relative`}
              >
                Our Calling
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primaryRed/30" />
              </h2>
              <div
                className={`${fonts.mulish} text-lg leading-relaxed space-y-6 text-justify`}
              >
                <p>
                  Aakaura&apos;s vision is deeply rooted in connection — with
                  people, energy, and the soul of India.
                </p>
                <p>
                  Our founder, with a background in economics and finance,
                  always felt called to contribute to something greater. She saw
                  the immense, untapped potential of skilled artisans in
                  villages, hilly regions, and remote areas. Aakaura was born
                  from the desire to bring their art and culture into meaningful
                  products while addressing real challenges like employment and
                  restoring confidence in their craftsmanship.
                </p>
                <p>
                  But Aakaura is more than just products — it&apos;s an energy
                  space. We believe every interaction, whether with a person or
                  an object, is an exchange of energy. This realization is
                  transformative: it teaches us that everything we seek already
                  exists within us.
                </p>
                <p>
                  Our energy is everything.
                  <br />
                  The way we think, the mental diet we maintain, the food we
                  eat, and the company we keep all shape our aura — and our aura
                  shapes our life.
                </p>
                <p>
                  It&apos;s a beautiful, empowering truth. And through Aakaura,
                  we hope to share this with the world, one small, meaningful
                  step at a time.
                </p>
                <p>
                  Here&apos;s to the journey ahead, with the universe always
                  guiding us.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2
                className={`${fonts.dekko} text-4xl md:text-5xl text-primaryRed inline-block relative`}
              >
                Our Values
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primaryRed/30" />
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Self-Empowerment",
                  description:
                    "Helping individuals realize their own power so they no longer have to seek fulfillment externally.",
                },
                {
                  title: "Healing & Transformation",
                  description:
                    "Encouraging self-healing and personal growth through awareness of energy and auras.",
                },
                {
                  title: "Authenticity",
                  description:
                    "Creating a space where people embrace their true selves without fear or limitation.",
                },
                {
                  title: "Community & Connection",
                  description:
                    "Building a space where artisans, creators, and seekers come together in harmony.",
                },
                {
                  title: "Mindfulness & Respect",
                  description:
                    "Encouraging awareness of one's energy, thoughts, and actions, and fostering respect for both human and natural energies.",
                },
                {
                  title: "Art & Spirituality",
                  description:
                    "Blending traditional craftsmanship with spiritual concepts to create products that carry deeper meaning.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-primaryRed group-hover:h-full transition-all duration-300" />
                  <h3
                    className={`${fonts.patrickHand} text-2xl text-primaryRed mb-4`}
                  >
                    {value.title}
                  </h3>
                  <p className={`${fonts.mulish}`}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
