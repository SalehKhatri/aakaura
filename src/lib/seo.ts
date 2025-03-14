import { Metadata } from "next";

export const defaultSEO = {
  title: "Aakaura - Elevate Your Spiritual Journey & Inner Peace",
  description:
    "Aakaura is a peaceful space for spirituality, self-healing, and energy awareness. Through thoughtful blogs and handcrafted wellness products, we explore auras, chakras, and mindful living — gently guiding you to embrace life's energies with curiosity and compassion.",
  keywords:
    "Aakaura, spirituality, aura, wellness, energy healing, chakra balancing, meditation, mindfulness, positivity, manifestation, self-love, spiritual protection, cleansing rituals, artisans, handcrafted decor, bonsai trees, root connection, personal growth, spiritual journey, holistic healing, self-improvement, zen lifestyle, inner peace, divine energy, yoga, reiki therapy, crystal healing, law of attraction, spiritual awakening, higher consciousness, guided meditation, metaphysical store, esoteric wisdom, soul alignment",
  image: "/splashLogo.png",
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
