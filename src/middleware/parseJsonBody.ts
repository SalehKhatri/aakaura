import { ApiError } from "@/middleware/errorHandler";

export const parseJsonBody = async (req: Request) => {
  try {
    const body = await req.json();
    if (!body || Object.keys(body).length === 0) {
      throw new ApiError("Request body is required", 400);
    }
    return body;
  } catch {
    throw new ApiError("Invalid JSON body", 400);
  }
};
