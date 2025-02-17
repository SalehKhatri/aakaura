import env from "@/config/env";
import { ApiResponse } from "@/types/Api";
import { Blog } from "@/types/Blog";

export const getBlogById = async (id: string) => {
  try {
    const res = await fetch(`${env.API_URL}/api/blogs/${id}`);
    const result: ApiResponse<Blog> = await res.json();

    if (!res.ok) throw new Error(result.message);
    return result.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${env.API_URL}/api/blogs`);
    const result: ApiResponse<Blog[]> = await res.json();

    if (!res.ok) throw new Error(result.message);
    return result.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};