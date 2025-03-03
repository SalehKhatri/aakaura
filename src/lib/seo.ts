import { Metadata } from "next";

export const defaultSEO = {
  title: "Aakaura - Spiritual Growth & Wellness",
  description:
    "Aakaura is a sanctuary for spiritual seekers, offering handcrafted decor, healing crystals, chakra balancing, meditation guides, and holistic well-being resources.",
  keywords:
    "Aakaura, spirituality, aura, aakar, wellness, energy healing, chakra balancing, meditation, mindfulness, positivity, manifestation, self-love, protection, cleansing, artisans, handcrafted, decor, bonsai, root connection, growth, spiritual journey, community, holistic healing, spiritual awakening, self-improvement, zen lifestyle, inner peace, divine energy, yoga, reiki, crystal therapy, manifestation techniques",
  image: "/images/splashLog.pnog",
  url: "https://aakaura.in",
};

export function generateSEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url,
}: Partial<typeof defaultSEO>): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
