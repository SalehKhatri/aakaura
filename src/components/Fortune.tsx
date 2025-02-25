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
    title: "You Are the Universe",
    image: "/images/fortune/universe.png",
    content:
      "You are not separate from the universe—you are the universe. It’s a continuous circle; when you align with the universe, it aligns with you...",
  },
  {
    title: "Your Vision is Meant for You",
    image: "/images/fortune/vision.png",
    content:
      "If a vision exists in your mind, it is placed there for a reason. The universe doesn’t show you dreams without the ability to achieve them...",
  },
  {
    title: "Your Energy Shapes Your Reality",
    image: "/images/fortune/energy.png",
    content:
      "Your energy determines everything — your relationships, career, wealth, respect, and even your spiritual journey...",
  },
  {
    title: "Respect Your Energy",
    image: "/images/fortune/respect.png",
    content:
      "When you realize the strength of your energy, you naturally begin to protect it. You stop indulging in temporary practices that drain you...",
  },
  {
    title: "You Are the Only Reality",
    image: "/images/fortune/reality.png",
    content:
      "Everything you experience is a reflection of your inner world. If someone treats you well, it’s because your energy aligns with that kindness...",
  },
  {
    title: "It All Starts With You",
    image: "/images/fortune/start.jpg",
    content:
      "Your entire existence starts from within. The love you seek, the peace you crave, the success you desire — it’s all inside you...",
  },
  {
    title: "Protect & Show Up for Yourself",
    image: "/images/fortune/protect.png",
    content:
      "Your energy is sacred, and protecting it is the greatest act of self-love. Show up for yourself like you would for someone you deeply care about...",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-12 gap-6 w-full">
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
              className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                className={`bg-[#fdf6e3] p-6 rounded-xl max-w-lg text-center shadow-2xl shadow-black/30 border border-yellow-600 relative transition-all duration-700 ${
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
                <div className="absolute w-full h-4 top-0 left-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-xl"></div>

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
