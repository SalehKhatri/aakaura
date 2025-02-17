import Container from "@/components/ui/Container";
import fonts from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import { getBlogById } from "@/lib/api";

interface BlogPageProps {
  params: { id: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return (
      <Container>
        <div className="text-center py-20">
          <h2 className={`${fonts.merriweather} text-3xl text-primaryRed`}>
            Blog Not Found
          </h2>
          <p className="text-primaryBrown/80 mt-4">
            Sorry, we couldn&apos;t find the blog you&apos;re looking for.
          </p>
          <Link
            href="/blogs"
            className="mt-6 inline-block bg-primaryRed text-white px-6 py-2 rounded-md hover:bg-primaryBrown transition-all"
          >
            Back to Blogs
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <section className="pt-4 pb-10">
      <Container>
        {/* Blog Cover Image */}
        <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-10">
          <Image
            quality={100}
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Content */}
        <article className="max-w-5xl mx-auto space-y-12">
          {/* Title */}
          <h1
            className={`${fonts.merriweather} text-4xl md:text-5xl text-primaryBrown font-bold mb-6`}
          >
            {blog.title}
          </h1>

          {/* Content */}
          <div>
            <MarkdownRenderer content={blog.content} />
          </div>
        </article>
      </Container>
    </section>
  );
}
