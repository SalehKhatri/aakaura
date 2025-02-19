import { prisma } from "@/config/prisma";
import { ApiError, errorHandler } from "@/middleware/errorHandler";
import { successResponse } from "@/utils/response";

export const GET = errorHandler(
  async (req: Request, { params }: { params: { id: string } }) => {
    const series = await prisma.series.findUnique({
      where: { id: params.id },
      include: { blogs: true },
    });

    if (!series) {
      throw new ApiError("Series not found", 404);
    }

    return successResponse("Series Fetched Successfully", series);
  }
);

export const PUT = errorHandler(
  async (req: Request, { params }: { params: { id: string } }) => {
    const { title } = await req.json();

    if (!title) {
      throw new ApiError("Title is required", 400);
    }

    const updatedSeries = await prisma.series.update({
      where: { id: params.id },
      data: { title },
    });

    if (!updatedSeries) {
      throw new ApiError("Series not found", 404);
    }

    return successResponse("Series Updated Successfully", updatedSeries);
  }
);

export const DELETE = errorHandler(
  async (req: Request, { params }: { params: { id: string } }) => {
    const series = await prisma.series.delete({
      where: { id: params.id },
    });

    if (!series) {
      throw new ApiError("Series not found", 404);
    }

    return successResponse("Series Deleted Successfully", null);
  }
);
