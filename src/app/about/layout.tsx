import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Aakaura",
  description:
    "Aakaura is a sanctuary for spiritual seekers, offering handcrafted decor, healing crystals, chakra balancing, meditation guides, and holistic well-being resources.",
  image: "/images/splashLog.png",
  url: "https://aakaura.in/about",
});
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
