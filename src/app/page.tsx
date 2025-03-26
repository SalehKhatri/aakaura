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
  title: "Aakaura - Elevate Your Spiritual Journey & Inner Peace",
  description:
    "Aakaura is a peaceful space for spirituality, self-healing, and energy awareness. Through thoughtful blogs and handcrafted wellness products, we explore auras, chakras, and mindful living — gently guiding you to embrace life's energies with curiosity and compassion.",
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
