import { prisma } from "@/config/prisma";
import { ApiError, errorHandler } from "@/middleware/errorHandler";
import { successResponse } from "@/utils/response";

export const GET = errorHandler(
  async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const id = (await params).id;
      if (!id) throw new ApiError("Blog ID is required", 400);

      const blog = await prisma.blog.findUnique({ where: { id } });
      if (!blog) throw new ApiError("Blog not found", 404);

      return successResponse("Blog Fetched Successfully", blog);
    } catch (error) {
      if (error instanceof Error) {
        throw new ApiError(error.message, 500);
      } else {
        throw new ApiError("An unknown error occurred", 500);
      }
    }
  }
);
