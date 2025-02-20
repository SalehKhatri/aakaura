import { prisma } from "@/config/prisma";
import { ApiError, errorHandler } from "@/middleware/errorHandler";
import { successResponse } from "@/utils/response";

export const GET = errorHandler(async () => {
  try {
    const blogs = await prisma.blog.findMany({
      where: { isFeatured: true },
      orderBy: { createdAt: "desc" },
      include: {
        series: true,
      },
    });
    return successResponse("Featured Blogs Fetched Successfully", blogs);
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(error.message, 500);
    } else {
      throw new ApiError("An unknown error occurred", 500);
    }
  }
});
