import SplashScreen from "@/components/SplashScreen";
import { Metadata } from "next";
import Blogs from "@/components/Blogs";
import ChakraAlignment from "@/components/ChakraAlignment";
import { chakras } from "@/config/constants";
import env from "@/config/env";
import { ApiResponse } from "@/types/Api";
import { Blog } from "@/types/Blog";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home | Aakura",
  description: "Aakura is a platform for spiritual growth and self-improvement",
};

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
      {featuredBlogs && <Blogs title="Our Thoughts" blogs={featuredBlogs} />}
      <ChakraAlignment chakras={chakras} title="Chakra Alignment" />
    </>
  );
}
