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
      className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer bg-secondaryBeige border border-primaryBrown"
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onClick={() => onClick(card)}
    >
      {/* Image Wrapper for better responsiveness */}
      <div className="w-full h-4/5">
        <Image
          src={card.image}
          alt={card.title}
          width={288} // Increased width
          height={384} // Increased height
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Section */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-primaryBrown text-white text-center py-4 rounded-b-3xl"
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
