import BlogForm from "@/components/ui/BlogForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Blog | Aakaura",
  description: "Write a new blog.",
};

export default function NewBlog() {
  return (
    <div className="pb-8">
      <BlogForm />
    </div>
  );
}
