import BlogCard from "@/components/ui/BlogCard";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import fonts from "@/config/fonts";
import { getAllBlogs } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Aakaura",
  description: "Read our latest blogs.",
};

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return (
    <section className="pb-6">
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
