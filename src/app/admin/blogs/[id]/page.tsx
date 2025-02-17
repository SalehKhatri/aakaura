import BlogForm from "@/components/ui/BlogForm";
import { getBlogById } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Blog | Aakaura",
  description: "Edit a blog.",
};

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const blog = await getBlogById(id);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="pb-8">
      <BlogForm isEditing blogData={blog} />
    </div>
  );
}
