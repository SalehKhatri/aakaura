import { cloudinary } from "@/config/cloudinary";

export const uploadToCloudinary = async (
  file: Blob,
  folder: string = "blog_covers"
): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder }, (error, result) => {
        if (error) {
          reject(new Error("Failed to upload image"));
        } else {
          resolve(result?.secure_url as string);
        }
      })
      .end(buffer);
  });
};
