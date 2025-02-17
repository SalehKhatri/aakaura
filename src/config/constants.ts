import { Blog } from "@/types/Blog";

export const SampleBlogs: Blog[] = [
  {
    id: "1",
    title: "Understanding Your Aura",
    content: "Learn about the different colors and meanings of your aura...",
    coverImage:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
    createdAt: "2024-01-29",
    updatedAt: "2024-01-20",
  },
  {
    id: "2",
    title: "Chakra Alignment Guide",
    content: "A comprehensive guide to aligning your seven chakras...",
    coverImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    createdAt: "2024-01-29",
    updatedAt: "2024-01-20",
  },
  {
    id: "3",
    title: "Daily Meditation Practice",
    content: "Simple meditation techniques for spiritual growth...",
    coverImage:
      "https://images.unsplash.com/photo-1552057426-9f23e61fa7b1?auto=format&fit=crop&q=80&w=800",
    createdAt: "2024-01-29",
    updatedAt: "2024-01-20",
  },
];

export const chakras = [
  { name: "Root Chakra", color: "#ef4444", feature: "Grounding & Stability" },
  { name: "Sacral Chakra", color: "#f97316", feature: "Creativity & emotion" },
  {
    name: "Solar Plexus Chakra",
    color: "#eab308",
    feature: "Personal Power",
  },
  { name: "Heart Chakra", color: "#22c55e", feature: "Love & Compassion" },
  { name: "Throat Chakra", color: "#3b82f6", feature: "Communication" },
  { name: "Third Eye Chakra", color: "#8b5cf6", feature: "Intuition" },
  { name: "Crown Chakra", color: "#a855f7", feature: "Spiritual Connection" },
];
