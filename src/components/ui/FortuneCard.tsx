import { motion } from "framer-motion";
import Image from "next/image";
import fonts from "@/config/fonts";
import { FC } from "react";

interface FortuneCardProps {
  card: {
    image: string;
    title: string;
  };
  onClick: (card: { image: string; title: string }) => void;
}

const FortuneCard: FC<FortuneCardProps> = ({ card, onClick }) => {
  return (
    <motion.div
      className="relative w-72 h-96 rounded-3xl overflow-hidden cursor-pointer bg-secondaryBeige border border-primaryBrown shadow-[0_0_30px_rgba(139,69,19,0.5)] hover:shadow-[0_0_45px_rgba(139,69,19,0.75)] transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onClick={() => onClick(card)}
    >
      {/* Image Wrapper for better responsiveness */}
      <div className="w-full h-4/5">
        <Image
          src={card.image}
          alt={card.title}
          width={288}
          height={384}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Section */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-primaryBrown text-white text-center py-4 rounded-b-3xl shadow-[0_0_20px_rgba(139,69,19,0.6)]"
        initial={{ opacity: 0.8, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className={`${fonts.playfair} text-lg font-semibold`}>
          {card.title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default FortuneCard;
