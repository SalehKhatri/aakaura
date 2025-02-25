"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import fonts from "@/config/fonts";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-secondaryBeige text-primaryBrown">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070"
          alt="Spiritual Background"
          fill
          className="object-cover brightness-[0.35] scale-105 transform hover:scale-110 transition-transform duration-700"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-4xl">
          <motion.h1
            className={`${fonts.dekko} text-5xl md:text-7xl font-bold tracking-wider text-primaryBrown relative`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Hindi text with natural shirorekha */}
            आक
            {/* Latin text with custom line */}
            <span className={`${fonts.patrickHand} text-4xl md:text-6xl`}>
              aura
            </span>
            {/* Decorative line that's 60% width and centered */}
            <div className="absolute left-4 right-0 top-[6.5px] md:top-[11px] flex justify-center items-center w-full">
              <div className="bg-primaryBrown h-1 md:h-[5px] w-[40%] md:w-[55%] block"></div>
            </div>
          </motion.h1>
          <motion.p
            className={`${fonts.specialElite} text-xl md:text-2xl mt-6 tracking-wide`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where Energy Meets Intention
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
                We here at आकaura deeply believe that Aakaura is our
                &apos;calling&apos;, it is really close to our hearts. A
                &apos;calling&apos; is not something you choose it is something
                that chooses you. Aakaura has been a beautiful journey of three
                years and counting, where we nurtured an abstract idea in our
                minds, a vision and watched it take shape till here. It has been
                a deeply fulfilling process, and we are immensely grateful to
                the universe for allowing us to bring this vision into a form
                that the world can now see. :)
              </p>
              <p>
                Now that we are finally opening Aakaura to the world, we truly
                hope people resonate with our idea, understand our vision, and
                connect with what we believe is essential in life- The only
                reality we ever truly experience is our own perspective. Our
                thoughts shape our world, and often, the only thing holding us
                back from reaching our true potential are the limits we have
                unknowingly set for ourselves.
              </p>
              <p>
                Aakaura is not just a business—it is a community. A space where
                people can rediscover themselves, break free from limitations,
                and recognize that their reality is in their hands. We exist in
                a world full of external influences—societal beliefs, opinions,
                and the overwhelming presence of social media—that sometimes
                make us forget the simplicity of our own existence. But reality
                is fluid. It is what we observe, what we believe, and what we
                choose to make of it. One of the most profound realizations
                we&apos;ve had on this journey is that- reality does not demand
                to be real; it is simply what we perceive it to be.
              </p>
              <p>
                And so, as we share Aakaura with the world, in our unique way,
                we hope it becomes a space where people embrace self-love, show
                up for themselves, and find a deeper connection with their own
                energy. In doing so, we believe this journey will not only
                transform individuals but also bring greater harmony to the
                world.
              </p>
              <p>
                Wishing the best for everyone on this beautiful path. {"<"}3{" "}
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
                  src="/images/AboutUs1.jpg"
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
                  src="/images/AboutUs2.jpg"
                  alt="Crystal Collection"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
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
                Our founder has studied economics as a Bachelor of Science
                degree with a minor in finance. From the very beginning, she
                felt a calling to contribute to a greater good—analyzing
                India&apos;s economy in real time and understanding how we could
                improve it through small, meaningful steps. India has an
                incredibly skilled population, but due to its density, much of
                this potential remains untapped, especially in villages, hilly
                regions, and remote mountain areas.
              </p>
              <p>
                We wanted to connect with local artisans from different parts of
                the country—places where not many people can reach them—and
                bring their art and culture into our products. This vision is
                still in its initial stages, but we truly believe we are on the
                right path, with the universe always supporting us. :D
              </p>
              <p>
                This is what Aakaura stands for: creating beautiful, meaningful
                products with local artisans while addressing real challenges
                like employment and restoring confidence in their craftsmanship.
                But beyond that, our aim has always been to create an energy
                space—one that helps people understand the significance of their
                auras. Every interaction, whether with another person or an
                object, is an exchange of energy. We are constantly engaging
                with the auras of everything around us.
              </p>
              <p>
                This realization is deeply transformative. It teaches us that we
                don&apos;t need to depend on anything—not even our business or
                community—because everything we seek already exists within us.
                Our energy is everything. The way we think, the mental diet we
                maintain, the food we eat, the company we keep—all of it shapes
                our aura, and our aura shapes our life.
              </p>
              <p>
                It&apos;s a beautiful, empowering concept, and what better way
                to bring It to the world than through Aakaura? We are excited to
                see where this journey leads us. Here&apos;s to hoping for the
                best.{" "}
              </p>{" "}
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
  );
}
