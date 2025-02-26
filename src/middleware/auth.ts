import env from "@/config/env";
import { ApiError } from "@/middleware/errorHandler";
import jwt from "jsonwebtoken";

const SECRET_KEY = env.JWT_SECRET || "YOURJWTTOKEN"; // Store this securely

export const authenticate = async (req: Request) => {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError("Unauthorized: No token provided", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as {
      role: string;
      email: string;
    };
    

    if (decoded.role !== "admin" || decoded.email !== env.ADMIN_EMAIL) {
      throw new ApiError("Forbidden: Admin access required", 403);
    }

    return decoded;
  } catch {
    throw new ApiError("Unauthorized: Invalid token", 401);
  }
};
