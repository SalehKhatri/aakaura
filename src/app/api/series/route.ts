import { prisma } from "@/config/prisma";
import { authenticate } from "@/middleware/auth";
import { ApiError, errorHandler } from "@/middleware/errorHandler";
import { seriesSchema } from "@/types/seriesSchema";
import { successResponse } from "@/utils/response";

export const POST = errorHandler(async (req: Request) => {
  await authenticate(req); // 🔹 Ensure user is admin
  const { title } = await req.json();

  if (!title) {
    throw new ApiError("Title is required", 400);
  }

  const validation = seriesSchema.safeParse({ title });
  if (!validation.success) {
    throw new ApiError(validation.error.errors[0].message, 400);
  }

  const newSeries = await prisma.series.create({ data: { title } });
  return successResponse("Series Created Successfully", newSeries, 201);
});

export const GET = errorHandler(async () => {
  const series = await prisma.series.findMany({
    include: { blogs: true },
  });
  return successResponse("Series Fetched Successfully", series);
});
