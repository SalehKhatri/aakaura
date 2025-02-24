import env from "@/config/env";
import { ApiError, errorHandler } from "@/middleware/errorHandler";
import { parseJsonBody } from "@/middleware/parseJsonBody";
import { successResponse } from "@/utils/response";
import jwt from "jsonwebtoken";

export const POST = errorHandler(async (req: Request) => {
  try {
    const { email, password } = await parseJsonBody(req);

    if (!email || !password) {
      throw new ApiError("Email and Password are required", 400);
    }

    if (email !== env.ADMIN_EMAIL || password !== env.ADMIN_PASSWORD) {
      throw new ApiError("Invalid Credentials", 401);
    }

    if (!env.JWT_SECRET) {
      throw new ApiError("JWT Secret is not defined", 500);
    }

    const token = jwt.sign({ email }, env.JWT_SECRET, { expiresIn: "7d" });

    return successResponse("Login Successful", { token }, 200);
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(error.message, 500);
    } else {
      throw new ApiError("An unknown error occurred", 500);
    }
  }
});
