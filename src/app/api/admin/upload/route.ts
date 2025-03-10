import { authenticate } from "@/middleware/auth";
import { ApiError, errorHandler } from "@/middleware/errorHandler";
import { uploadToCloudinary } from "@/utils/upload";
import { successResponse } from "@/utils/response";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = errorHandler(async (req: Request) => {
  try {
    await authenticate(req); // 🔹 Ensure user is authenticated

    const formData = await req.formData();
    const image = formData.get("image") as Blob;

    if (!image || !(image instanceof Blob)) {
      throw new ApiError("Image is required", 400);
    }

    // Validate file type if needed
    const fileType = image.type;
    if (!fileType.startsWith("image/")) {
      throw new ApiError("File must be an image", 400);
    }

    // Use your existing uploadToCloudinary function
    const imageUrl = await uploadToCloudinary(image);

    // Return the image URL
    return successResponse("Image uploaded successfully", { imageUrl }, 201);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    } else if (error instanceof Error) {
      throw new ApiError(error.message, 500);
    } else {
      throw new ApiError("An unknown error occurred", 500);
    }
  }
});
