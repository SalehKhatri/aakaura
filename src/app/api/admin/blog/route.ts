import { prisma } from "@/config/prisma";
import { ApiError, errorHandler } from "@/middleware/errorHandler";
import { blogSchema } from "@/types/blogSchema";
import { successResponse } from "@/utils/response";
import { uploadToCloudinary } from "@/utils/upload";

export const POST = errorHandler(async (req: Request) => {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const isFeatured = formData.get("isFeatured") === "true" ? true : false;
    const file = formData.get("coverImage") as Blob;

    if (!title || !content) {
      throw new ApiError("Title and Content are required", 400);
    }

    if (!file || !(file instanceof Blob)) {
      throw new ApiError("Cover Image is required", 400);
    }

    const imageUrl = await uploadToCloudinary(file);

    const validation = blogSchema.safeParse({
      title,
      content,
      coverImage: imageUrl,
      isFeatured,
    });
    if (!validation.success) {
      throw new ApiError(validation.error.errors[0].message, 400);
    }

    const newBlog = await prisma.blog.create({
      data: { title, content, coverImage: imageUrl, isFeatured },
    });

    return successResponse("Blog Created Successfully", newBlog, 201);
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(error.message, 500);
    } else {
      throw new ApiError("An unknown error occurred", 500);
    }
  }
});
