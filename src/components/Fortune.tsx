"use client";
import { useState, useEffect } from "react";
import FortuneCard from "./ui/FortuneCard";
import { motion, AnimatePresence } from "framer-motion";
import fonts from "@/config/fonts";
import Container from "./ui/Container";

interface FortuneCardType {
  title: string;
  image: string;
  content: string;
}

const fortuneCards: FortuneCardType[] = [
  {
    title: "You Are The Universe",
    image: "/images/fortune/universe.png",
    content:
      "You are not separate from the universe—you are the universe. It's a continuous circle; when you align with the universe, it aligns with you. If a vision comes to you, it's because the universe wants you to walk that path. But if you don't trust the process, the first step itself won't begin. It all starts with your belief in the journey. The energy within you is incredibly powerful, capable of shaping everything around you. You are Brahman — you are the universe itself.",
  },
  {
    title: "Your Vision Is Meant For You",
    image: "/images/fortune/vision.png",
    content:
      "If a vision exists in your mind, it is placed there for a reason. The universe doesn't show you dreams without the ability to achieve them. But if you doubt that vision, the universe cannot guide you. Everything begins with your belief in yourself and your desires. Manifestation starts the moment you truly trust that what you seek is already yours. The universe is always conspiring to help you — but it needs your willingness to take the first step.",
  },
  {
    title: "Your Energy Shapes Your Reality",
    image: "/images/fortune/energy.png",
    content:
      "Your energy determines everything — your relationships, career, wealth, respect, and even your spiritual journey. Whatever you think, feel, and believe becomes the life you live. Your thoughts shape your surroundings, and your perception is the lens through which reality forms. Every interaction, every opportunity, and every experience is a result of the energy you carry within you. The more you understand this, the more consciously you can shape your life.",
  },
  {
    title: "Respect Your Energy",
    image: "/images/fortune/respect.png",
    content:
      "When you realize the strength of your energy, you naturally begin to protect it. You stop indulging in temporary practices that drain you. You stop disrespecting your soul by compromising your boundaries. You start choosing peace, love, and things that nurture your spirit. Respecting your energy isn't selfish — it's necessary. When you care for your energy, you become the best version of yourself, radiating positivity and attracting abundance.",
  },
  {
    title: "You Are The Only Reality",
    image: "/images/fortune/reality.png",
    content:
      "Everything you experience is a reflection of your inner world. If someone treats you well, it's because your energy aligns with that kindness. If someone treats you poorly, that experience is filtered through your perception. The world doesn't exist outside of you — it exists through you. Your emotions, thoughts, and beliefs color everything you see. Once you understand that your reality is your creation, you gain the power to reshape it.",
  },
  {
    title: "It All Starts With You",
    image: "/images/fortune/start.png",
    content:
      "Your entire existence starts from within. The love you seek, the peace you crave, the success you desire — it's all inside you. If your inner world is chaotic, your outer world reflects that chaos. But if your soul is calm and abundant, life responds with the same energy. You don't need anything external to complete you because you are already whole. The path to transformation begins the moment you turn inward.",
  },
  {
    title: "Protect & Show Up For Yourself",
    image: "/images/fortune/protect.png",
    content:
      "Your energy is sacred, and protecting it is the greatest act of self-love. Show up for yourself like you would for someone you deeply care about. Be patient, be kind, and forgive yourself when needed. The only constant in your life is your connection with your soul, and nurturing that connection is the key to lifelong happiness. Remember, the universe is always with you — but you must first choose to be with yourself.",
  },
  {
    title: "The Only Way Out Is In",
    image: "/images/fortune/way.png",
    content:
      "Everything you seek — happiness, peace, fulfillment — already exists within you. The connection with your soul is the most powerful constant in your life. Once you turn inward and embrace your inner energy, the external world aligns with your newfound awareness. The universe moves through you, and the path to true transformation begins when you understand that the key to every change lies within your own heart and mind.",
  },
];

const Fortune = () => {
  const [selectedCard, setSelectedCard] = useState<FortuneCardType | null>(
    null
  );
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (selectedCard) {
      setShowContent(false);
      const timer = setTimeout(() => setShowContent(true), 500); // 2.5s suspense blur effect
      return () => clearTimeout(timer);
    }
  }, [selectedCard]);

  return (
    <section className="flex items-center justify-center min-h-screen py-12">
      <Container className="flex flex-col items-center justify-center space-y-8 w-full">
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-12 gap-8 w-full justify-items-center">
          {fortuneCards.map((card, index) => (
            <FortuneCard
              key={index}
              card={card}
              onClick={() => setSelectedCard(card)}
            />
          ))}
        </div>

        {/* AnimatePresence for smooth exit animation */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-10"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                className={`bg-[#fdf6e3] p-6 rounded-xl max-w-[90%] md:max-w-lg text-center shadow-2xl shadow-black/30 border border-primaryBrown relative transition-all duration-700 ${
                  showContent ? "blur-0" : "blur-md"
                }`}
                initial={{ scale: 0.7, opacity: 0, rotateX: 90 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotateX: 0,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
                exit={{
                  scale: 0.7,
                  opacity: 0,
                  rotateX: -90,
                  filter: "blur(10px)",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {/* Torn Paper Effect */}
                <div className="absolute w-full h-4 top-0 left-0 bg-primaryBeige rounded-t-xl"></div>

                <h2
                  className={`${fonts.playfair} text-2xl font-bold text-primaryRed`}
                >
                  {selectedCard.title}
                </h2>
                <p className="mt-4 text-primaryBrown text-lg">
                  {selectedCard.content}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Fortune;
