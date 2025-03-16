"use client";
import { useState, useEffect } from "react";
import FortuneCard from "./ui/FortuneCard";
import { motion, AnimatePresence } from "framer-motion";
import fonts from "@/config/fonts";
import Container from "./ui/Container";
import Heading from "./ui/Heading";

interface FortuneCardType {
  title: string;
  image: string;
  content1: string;
  content2?: string;
  blogLink?: string;
}

const fortuneCards: FortuneCardType[] = [
  {
    title: "You Are The Universe",
    image: "/images/fortune/universe.png",
    content1: `You are not separate from the universe—you are the universe. It's a continuous circle; when you align with the universe, it aligns with you. You are the universe itself.`,
    content2: `The universe is aligning every particle, every event, every connection in their favor. And they only need to do one thing: align their energy with the universe's plan. Align their energy to be so, so pure, so present, so full of life, that the universe looks at them and says, Yes, this soul is ready for the path I've carved for them.`,
    blogLink: "https://aakaura.in/blogs/1c7a4c21-fa55-430c-9ae9-129ac8c39072",
  },
  {
    title: "Your Vision Is Meant For You",
    image: "/images/fortune/vision.png",
    content1:
      "A vision is incredibly important…Without a vision, you cannot become the person who is capable of achieving what you want. The goal is not just to achieve success- it is to become a successful person in your habits, in your mindset, and in your way of life.",
    content2:
      "….don't force yourself into a mould that doesn't fit you. You do not have to shape yourself to fit into something that was never meant for you. The mould should fit you, exactly as you are. And only you know how to shape it that way.",
    blogLink: "https://aakaura.in/blogs/b35c99b5-059c-42b7-83b8-6be3c46b5fdc",
  },
  {
    title: "Your Energy Shapes Your Reality",
    image: "/images/fortune/energy.png",
    content1:
      "We, as humans, are capable of so much more. We deserve to live freely, to be kinder to ourselves, and to do things because we love them, not because we are scared of the alternative. That is what makes us human.",
    content2:
      "They are not truly living to achieve something or to create something meaningful; they are simply trying to avoid failure….We are so afraid of failure that we act with the intention of preventing a negative outcome, rather than embracing the possibility of a positive one.",
    blogLink: "https://aakaura.in/blogs/a9c75606-cdcd-446b-9f3b-1df441cfd504",
  },
  {
    title: "Respect Your Energy",
    image: "/images/fortune/respect.png",
    content1:
      "….I also feel that we give ourselves far too little credit for how we navigate life in our own simple ways. Whatever we have learned, whatever we have crashed into, whatever self-awareness we have gained, and whatever we are trying to achieve, we deserve more recognition for all of it. And yet, we are often the first to downplay our own growth…",
    content2:
      "When you are present with this current version of yourself, this is your only reality. And to be very honest, whatever amount of awareness and patience that requires- give it to yourself. You owe this life to yourself.",
    blogLink: "https://aakaura.in/blogs/90cdfd2a-16d4-4c7e-ab3f-9df690d633d5",
  },
  {
    title: "You Are The Only Reality",
    image: "/images/fortune/reality.png",
    content1:
      "Everything you experience is a reflection of your inner world. If someone treats you well, it's because your energy aligns with that kindness. If someone treats you poorly, that experience is filtered through your perception. The world doesn't exist outside of you — it exists through you. Your emotions, thoughts, and beliefs color everything you see. Once you understand that your reality is your creation, you gain the power to reshape it.",
  },
  {
    title: "It All Starts With You",
    image: "/images/fortune/start.png",
    content1:
      "The only way out of this is- self-awareness. Take the time to evaluate everything you have ever been taught, read, heard, or made to believe in. What feels true to you? What aligns with your core values? What makes you feel more like you? Respect other people's choices, sure, but do not let them define you, no.",
    content2:
      "True love has always felt liberating, not constraining. It is not about being perfect—it is about accepting yourself fully while continuously striving to grow.",
    blogLink: "https://aakaura.in/blogs/d7361316-3dc3-4bd0-98a4-d993943f8222",
  },
  {
    title: "Protect & Show Up For Yourself",
    image: "/images/fortune/protect.png",
    content1:
      "But what if love isn't supposed to be a sacrifice, at all? What if we're meant to have healthy relationships with people who love and understand us — not perfectly, but willingly?…. And maybe we were never meant to carry relationships that don’t carry us back. :)",
    content2:
      "I've started to understand that love is a state of being, but emotions like anger or sadness are fleeting visitors. They’re meant to be felt, acknowledged, and released, not suppressed or judged. And maybe that’s the most human thing of all, don’t you think?",
    blogLink: "https://aakaura.in/blogs/9a133678-28da-4f15-b55c-f87fdfd8e20d",
  },
  {
    title: "The Only Way Out Is In",
    image: "/images/fortune/way.png",
    content1:
      "You have to be so protected, so powerful, so grounded in your own self that you never feel the need to shut yourself off. Because you know: I've got me. I have got myself. This is all the reality that could ever sustain itself — and it already exists within me.",
    content2:
      "So maybe the problem was never with being vulnerable. Maybe the problem was always with the fear of being hurt. And well, buddy — that's an inner work. Just like 100% of the works. It's an inner work, and it starts and ends with you.",
    blogLink: "https://aakaura.in/blogs/910e1575-a6fa-4f9f-a08f-44102b22a1c1",
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
      const timer = setTimeout(() => setShowContent(true), 600); // 2.5s suspense blur effect
      return () => clearTimeout(timer);
    }
  }, [selectedCard]);

  return (
    <section className="flex items-center justify-center min-h-screen py-12">
      <Container className="flex flex-col items-center justify-center space-y-8 w-full">
        <div className="text-center space-y-5 md:space-y-4">
          <Heading tag="h1" title="The Aakaura Code" />

          <motion.h2
            animate={{
              y: [0, -1.3, 0, 1.3, 0],
              rotate: [0, 0.35, -0.35, 0],
            }}
            transition={{
              duration: 1.3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={`${fonts.specialElite} text-primaryRed text-lg md:text-xl lg:text-2xl tracking-wide`}
          >
            Trust the universe to lead the way.
          </motion.h2>

          <h3
            className={`${fonts.specialElite} text-primaryBrown text-base md:text-lg lg:text-[22px] lg:leading-loose italic`}
          >
            {`Tap on a card, follow your intuition, and explore a blog made JUST for you.. (maybe, maybe not) ;)
`}
          </h3>
        </div>
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-12 gap-8 w-full justify-items-center py-8">
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
                className={`relative bg-[#fdf6e3] p-6 rounded-xl max-w-[90%] md:max-w-xl shadow-2xl shadow-black/30 border border-primaryBrown transition-all duration-700 ${
                  showContent ? "blur-0" : "blur-md"
                }`}
                initial={{ scale: 0.7, opacity: 0, rotateX: 90 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotateX: 0,
                  boxShadow: [
                    "0px 0px 10px rgba(255,255,255,0.3)",
                    "0px 0px 20px rgba(255,255,255,0.5)",
                  ],
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                exit={{
                  scale: 0.7,
                  opacity: 0,
                  rotateX: -90,
                  filter: "blur(10px)",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {/* 📜 Torn Paper Effect (Top and Bottom) */}
                <div className="absolute w-full h-4 top-0 left-0 bg-primaryBeige rounded-t-xl"></div>
                <div className="absolute w-full h-4 bottom-0 left-0 bg-primaryBeige rounded-b-xl"></div>

                {/* ✨ Floating Light Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-white/10 blur-3xl pointer-events-none"
                />

                {/* 🔮 Title with Mystic Styling */}
                <h2
                  className={`${fonts.playfair} text-center text-2xl font-bold text-primaryRed`}
                >
                  {selectedCard.title}
                </h2>

                {/* ✨ Decorative Quotes + Content */}
                <div
                  className={`${fonts.inter} space-y-3 mt-4 italic text-primaryBrown md:text-lg text-justify`}
                >
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="italic"
                  >
                    ❝ {selectedCard.content1} ❞
                  </motion.p>
                  {selectedCard.content2 && (
                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="italic"
                    >
                      ❝ {selectedCard.content2} ❞
                    </motion.p>
                  )}
                </div>

                {/* 🔗 Read More Button (If Blog Link Exists) */}
                {selectedCard.blogLink && (
                  <motion.a
                    href={selectedCard.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${fonts.merriweather} block mt-6 text-center text-primaryRed font-bold tracking-wide relative transition-all`}
                    initial={{
                      opacity: 0,
                      textShadow: "0px 0px 4px rgba(166, 18, 0, 0.3)",
                      y: 0,
                    }}
                    animate={{
                      opacity: [1, 0.8, 1],
                      textShadow: [
                        "0px 0px 4px rgba(166, 18, 0, 0.3)",
                        "0px 0px 8px rgba(166, 18, 0, 0.6)",
                        "0px 0px 4px rgba(166, 18, 0, 0.3)",
                      ],
                      y: [0, -3, 0], // Subtle floating effect
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Unravel the Full Article
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Fortune;
