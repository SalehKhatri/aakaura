import SplashScreen from "@/components/SplashScreen";
import Blogs from "@/components/Blogs";
import env from "@/config/env";
import { ApiResponse } from "@/types/Api";
import { Blog } from "@/types/Blog";
import OurPath from "@/components/OurPath";
import Fortune from "@/components/Fortune";
import { generateSEO } from "@/lib/seo";
export const dynamic = "force-dynamic";

export const metadata = generateSEO({
  title: "Aakaura - Spiritual Growth & Wellness",
  description:
    "Aakaura, spirituality, aura, wellness, energy healing, chakra balancing, meditation, mindfulness, positivity, manifestation, self-love, spiritual protection, cleansing rituals, artisans, handcrafted decor, bonsai trees, root connection, personal growth, spiritual journey, holistic healing, self-improvement, zen lifestyle, inner peace, divine energy, yoga, reiki therapy, crystal healing, law of attraction, spiritual awakening, higher consciousness, guided meditation, metaphysical store, esoteric wisdom, soul alignment",
});

const getFeaturedBlogs = async () => {
  try {
    const res = await fetch(`${env.API_URL}/api/blogs/featured`);
    const result: ApiResponse<Blog[]> = await res.json();

    if (!res.ok) throw new Error(result.message);
    return result.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};

export default async function Home() {
  const featuredBlogs = await getFeaturedBlogs();

  return (
    <>
      <SplashScreen />
      <Fortune />
      <OurPath />
      {featuredBlogs && <Blogs title="Our Thoughts" blogs={featuredBlogs} />}
      {/* <ChakraAlignment chakras={chakras} title="Chakra Alignment" /> */}
    </>
  );
}
