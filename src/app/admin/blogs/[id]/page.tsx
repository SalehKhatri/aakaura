import BlogForm from "@/components/ui/BlogForm";
import { getBlogById } from "@/lib/api";
import { notFound } from "next/navigation";

interface EditBlogPageProps {
  params: { id: string };
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
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
