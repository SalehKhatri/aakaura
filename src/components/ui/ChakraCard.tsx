"use client";
import React from "react";
import fonts from "@/config/fonts";

interface ChakraCardProps {
  name: string;
  color: string;
  feature: string;
}

export default function ChakraCard({ name, color, feature }: ChakraCardProps) {
  return (
    <div
      className="relative p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-500 flex flex-col items-center text-center overflow-hidden group"
      style={{ backgroundColor: `${color}20` }}
    >
      {/* Mandala-like Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${color}40 2px, transparent 2px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Crystal Container with Multiple Glowing Layers */}
      <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500 cursor-pointer">
        {/* Main Crystal */}
        <div
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-opacity-40 backdrop-blur-sm relative z-10 animate-pulse"
          style={{ backgroundColor: color }}
        >
          {/* Inner Crystal Pattern */}
          <div
            className="absolute inset-2 rounded-full animate-spin"
            style={{
              background: `linear-gradient(135deg, ${color}80, transparent)`,
              animation: "rotateGradient 8s linear infinite",
            }}
          />
        </div>

        {/* Animated Glow Layers */}
        <div
          className="absolute inset-0 w-full h-full rounded-full blur-md animate-[pulse_4s_ease-in-out_infinite]"
          style={{ backgroundColor: color, opacity: 0.3 }}
        />
        <div
          className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] rounded-full blur-xl animate-[pulse_6s_ease-in-out_infinite_1s]"
          style={{ backgroundColor: color, opacity: 0.2 }}
        />

        {/* Sacred Geometry Lines */}
        <div
          className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            border: `2px solid ${color}`,
            animation: "spin 12s linear infinite",
          }}
        />
      </div>

      {/* Chakra Name with Decorative Elements */}
      <div className="relative mb-3">
        <h3
          className={`${fonts.playfair} text-2xl md:text-3xl font-semibold relative z-10`}
          style={{ color: "#764640" }}
        >
          {name}
        </h3>
        {/* Decorative Line */}
        <div
          className="h-px w-16 mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Feature Text with Fade-in Effect */}
      <p
        className={`${fonts.specialElite} text-lg uppercase tracking-wider mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
        style={{ color: "#A61200" }}
      >
        {feature}
      </p>
    </div>
  );
}
