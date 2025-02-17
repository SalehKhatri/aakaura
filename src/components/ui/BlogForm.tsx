"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Blog } from "@/types/Blog";
import { ApiResponse } from "@/types/Api";
import toast from "react-hot-toast";
import { FaUpload, FaStar, FaTrash } from "react-icons/fa";
import { BiImage } from "react-icons/bi";
import { MdTitle } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export const updateBlog = async (id: string, formData: FormData) => {
  try {
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "PATCH",
      body: formData,
    });
    const result: ApiResponse<Blog> = await res.json();

    if (!res.ok) throw new Error(result.message);
    return result.data;
  } catch (error) {
    console.error("Error updating blog:", error);
    return null;
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete blog");
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const createBlog = async (formData: FormData) => {
  try {
    const response = await fetch(`/api/admin/blog`, {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Failed to create blog");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

interface BlogFormProps {
  blogData?: Blog; // blogData passed for editing
  isEditing?: boolean; // flag for editing mode
}

export default function BlogForm({
  blogData,
  isEditing = false,
}: BlogFormProps) {
  const router = useRouter();

  // Initialize state with values from blogData if provided (for editing)
  const [title, setTitle] = useState(blogData?.title || "");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    blogData?.coverImage || null
  );
  const [content, setContent] = useState<string>(blogData?.content || "");
  const [isFeatured, setIsFeatured] = useState(blogData?.isFeatured || false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // When blogData changes, update the form fields if editing
    if (blogData) {
      setTitle(blogData.title || "");
      setPreviewImage(blogData.coverImage || null);
      setContent(blogData.content || "");
      setIsFeatured(blogData.isFeatured || false);
    }
  }, [blogData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCoverImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleDelete = async () => {
    const toastId = toast.loading("Please wait...");
    const confirmation = window.confirm(
      "Are you sure you want to delete this blog? This action cannot be undone."
    );
    if (!blogData?.id) return;

    if (confirmation) {
      try {
        const success = await deleteBlog(blogData.id);
        if (success) {
          toast.success("Blog deleted successfully!", { id: toastId });
          router.push("/admin"); // Redirect after deletion
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message, { id: toastId });
        } else {
          toast.error("Error deleting blog!", { id: toastId });
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Please wait...");

    if (!coverImage && !isEditing) {
      setError("Please select a cover image.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("isFeatured", isFeatured.toString());
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    try {
      if (isEditing && blogData?.id) {
        await updateBlog(blogData.id, formData);
      } else {
        await createBlog(formData);
      }

      toast.success(
        isEditing ? "Blog updated successfully!" : "Blog created successfully!",
        { id: toastId }
      );

      if (!isEditing) {
        router.push("/admin"); // Redirect after creating a blog
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondaryBeige p-2 md:p-8">
      <div className="max-w-5xl mx-auto w-full px-2 sm:px-4">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-specialElite text-primaryBrown">
            {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
          </h1>
          <p className="text-primaryBrown/70 mt-1 sm:mt-2 text-sm sm:text-base">
            Share your thoughts and ideas with the world
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border-l-4 border-primaryRed p-2 sm:p-4 rounded-r-lg text-sm sm:text-base">
              <p className="text-primaryRed">{error}</p>
            </div>
          )}

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Cover Image Section */}
            <div className="p-4 sm:p-6 md:p-8 border-b border-primaryBrown/10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BiImage className="text-xl sm:text-2xl text-primaryBrown" />
                <h2 className="text-lg sm:text-xl font-specialElite text-primaryBrown">
                  Cover Image
                </h2>
              </div>

              <div className="relative border-2 border-dashed border-primaryBrown/20 rounded-lg p-4 sm:p-6 transition-all hover:border-primaryBrown/40 bg-secondaryBeige/30">
                <div className="aspect-video rounded-lg overflow-hidden bg-white shadow-inner">
                  {previewImage ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={previewImage}
                        alt="Cover preview"
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-primaryBrown/50 p-6 sm:p-8">
                      <FaUpload size={40} className="mb-3 sm:mb-4" />
                      <p className="text-center font-medium text-sm sm:text-base">
                        Drop your image here or click to browse
                      </p>
                      <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-primaryBrown/40">
                        Recommended: 1920 x 1080px
                      </p>
                    </div>
                  )}
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="coverImageInput"
                />

                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <label
                    htmlFor="coverImageInput"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-primaryRed text-white rounded-lg hover:bg-primaryRed/90 transition-all duration-300 cursor-pointer font-medium shadow hover:shadow-lg active:scale-[0.98] text-sm sm:text-base "
                  >
                    <FaUpload />
                    {previewImage ? "Change Image" : "Select Image"}
                  </label>

                  {previewImage && (
                    <button
                      type="button"
                      onClick={() => {
                        setCoverImage(null);
                        setPreviewImage(null);
                      }}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-primaryRed text-primaryRed rounded-lg hover:bg-primaryRed/10 transition-all duration-300 font-medium text-sm sm:text-base"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Title Section */}
            <div className="p-4 sm:p-6 md:p-8 border-b border-primaryBrown/10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <MdTitle className="text-xl sm:text-2xl text-primaryBrown" />
                <h2 className="text-lg sm:text-xl font-specialElite text-primaryBrown">
                  Title
                </h2>
              </div>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your blog title..."
                className="w-full p-3 sm:p-4 border border-primaryBrown/20 rounded-lg bg-secondaryBeige/30 text-primaryBrown shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryRed/50 transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6 md:p-8 border-b border-primaryBrown/10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <IoDocumentTextOutline className="text-xl sm:text-2xl text-primaryBrown" />
                <h2 className="text-lg sm:text-xl font-specialElite text-primaryBrown">
                  Content
                </h2>
              </div>

              <div data-color-mode="light">
                <MDEditor
                  value={content}
                  onChange={(value) => setContent(value || "")}
                  preview="edit"
                  height={300}
                  className="border border-primaryBrown/20 rounded-lg overflow-hidden shadow-sm"
                />
              </div>
            </div>

            {/* Featured Toggle */}
            <div className="p-4 sm:p-6 md:p-8">
              <label className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center transition-colors ${
                    isFeatured
                      ? "bg-primaryRed text-white"
                      : "border-2 border-primaryBrown/30 text-transparent"
                  }`}
                >
                  <FaStar className="text-xs sm:text-sm" />
                </div>
                <span className="text-primaryBrown font-medium text-sm sm:text-base group-hover:text-primaryRed transition-colors">
                  Feature this post
                </span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex  sm:flex-row justify-between items-center">
            {isEditing && (
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 font-medium shadow hover:shadow-lg active:scale-[0.98] text-sm sm:text-base"
              >
                <FaTrash />
                Delete Blog
              </button>
            )}

            <button
              type="submit"
              disabled={loading || !previewImage || !title || !content?.length}
              className="ml-auto px-6 py-2.5 sm:px-8 sm:py-3 bg-primaryBrown text-white rounded-lg hover:bg-primaryBrown/90 transition-all duration-300 font-medium shadow hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {isEditing ? "Updating..." : "Creating..."}
                </span>
              ) : isEditing ? (
                "Update Blog"
              ) : (
                "Publish Blog"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
