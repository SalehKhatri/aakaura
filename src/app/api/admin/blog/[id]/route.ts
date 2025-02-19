import { prisma } from "@/config/prisma";
import { ApiError, errorHandler } from "@/middleware/errorHandler";
import { Blog } from "@/types/Blog";
import { successResponse } from "@/utils/response";
import { uploadToCloudinary } from "@/utils/upload";

export const PATCH = errorHandler(
  async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const id = (await params).id;
      if (!id) throw new ApiError("Blog ID is required", 400);

      const formData = await req.formData();
      const title = formData.get("title") as string | null;
      const content = formData.get("content") as string | null;
      const isFeatured = formData.get("isFeatured") === "true" ? true : false;
      const file = formData.get("coverImage") as Blob | null;
      const seriesId = formData.get("seriesId") as string | null;

      let imageUrl: string | undefined;
      if (file && file instanceof Blob) {
        imageUrl = await uploadToCloudinary(file);
      }

      const updatedData: Partial<Blog> = {};
      if (title) updatedData.title = title;
      if (content) updatedData.content = content;
      if (typeof isFeatured === "boolean") updatedData.isFeatured = isFeatured;
      if (imageUrl) updatedData.coverImage = imageUrl;
      if (seriesId) updatedData.seriesId = seriesId;

      const updatedBlog = await prisma.blog.update({
        where: { id },
        data: updatedData,
      });

      return successResponse("Blog Updated Successfully", updatedBlog, 200);
    } catch (error) {
      if (error instanceof Error) {
        throw new ApiError(error.message, 500);
      } else {
        throw new ApiError("An unknown error occurred", 500);
      }
    }
  }
);

export const DELETE = errorHandler(
  async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const id = (await params).id;
      if (!id) {
        throw new ApiError("Blog ID is required", 400);
      }

      await prisma.blog.delete({ where: { id } });
      return successResponse("Blog Deleted Successfully", null);
    } catch (error) {
      if (error instanceof Error) {
        throw new ApiError(error.message, 500);
      } else {
        throw new ApiError("An unknown error occurred", 500);
      }
    }
  }
);
