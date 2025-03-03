import BlogCard from "@/components/ui/BlogCard";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import fonts from "@/config/fonts";
import { getAllBlogs } from "@/lib/api";
import { generateSEO } from "@/lib/seo";
export const dynamic = "force-dynamic";

export const metadata = generateSEO({
  title: "Aakaura - Our Thoughts",
  description:
    "Explore the latest blogs from Aakaura, covering topics on spirituality, wellness, healing, meditation, and more.",
  url: "https://aakaura.in/blogs",
});

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return (
    <section className="py-6">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <Heading title="Our Thoughts" />
        </div>

        {/* All Blogs */}
        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p
            className={`${fonts.specialElite} text-center text-primaryRed text-lg`}
          >
            No blogs available at the moment. Stay tuned for updates! 📢
          </p>
        )}
      </Container>
    </section>
  );
}
