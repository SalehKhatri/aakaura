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
import { FaPlus } from "react-icons/fa6";
import Cookies from "js-cookie";
import {
  commands,
  ICommand,
  TextAreaTextApi,
  TextState,
} from "@uiw/react-md-editor";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export const updateBlog = async (id: string, formData: FormData) => {
  try {
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${Cookies.get("admin_token")}`,
      },
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
      headers: {
        Authorization: `Bearer ${Cookies.get("admin_token")}`,
      },
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
      headers: {
        Authorization: `Bearer ${Cookies.get("admin_token")}`,
      },
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

interface Series {
  id: string;
  title: string;
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

  const [selectedSeries, setSelectedSeries] = useState<string>(
    blogData?.seriesId || ""
  );
  const [series, setSeries] = useState<Series[]>([]);
  const [newSeriesName, setNewSeriesName] = useState("");
  const [showNewSeriesModal, setShowNewSeriesModal] = useState(false);

  useEffect(() => {
    // When blogData changes, update the form fields if editing
    if (blogData) {
      setTitle(blogData.title || "");
      setPreviewImage(blogData.coverImage || null);
      setContent(blogData.content || "");
      setIsFeatured(blogData.isFeatured || false);
      setSelectedSeries(blogData.seriesId || "");
    }
  }, [blogData]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch("/api/series");
        const parsedRes = await response.json();
        setSeries(parsedRes.data);
      } catch (error) {
        console.error("Error fetching series:", error);
        toast.error("Failed to load series");
      }
    };

    fetchSeries();
  }, []);

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

  const handleCreateNewSeries = async () => {
    if (!newSeriesName.trim()) {
      toast.error("Please enter a series name");
      return;
    }

    try {
      const response = await fetch("/api/series", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("admin_token")}`,
        },
        body: JSON.stringify({ title: newSeriesName }),
      });

      const parsedRes = await response.json();
      const newSeries = parsedRes.data;
      setSeries([...series, newSeries]);
      setSelectedSeries(newSeries.id);
      setNewSeriesName("");
      setShowNewSeriesModal(false);
      toast.success("Series created successfully");
    } catch (error) {
      console.error("Error creating series:", error);
      toast.error("Failed to create series");
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
    formData.append("seriesId", selectedSeries); // Add series ID to form data

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

  const imageUpload: ICommand = {
    name: "image",
    keyCommand: "image",
    buttonProps: { "aria-label": "Upload image" },
    icon: (
      <svg width="12" height="12" viewBox="0 0 20 20">
        <path
          fill="currentColor"
          d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
        />
      </svg>
    ),
    execute: (state: TextState, api: TextAreaTextApi): void => {
      const toastId = toast.loading("Uploading image...");
      const fileInput: HTMLInputElement = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";

      fileInput.onchange = async (e: Event): Promise<void> => {
        const target = e.target as HTMLInputElement;
        const file: File | null = target.files?.[0] || null;

        if (file) {
          // Create a FormData object to send the file to your server
          const formData: FormData = new FormData();
          formData.append("image", file);

          try {
            // Replace this with your actual image upload API endpoint
            const response: Response = await fetch("/api/admin/upload", {
              method: "POST",
              body: formData,
              headers: {
                Authorization: `Bearer ${Cookies.get("admin_token")}`,
              },
            });

            const data = await response.json();

            // Insert markdown image syntax at cursor position
            const imageUrl: string = data.data.imageUrl; // Adjust based on your API response
            const imageMarkdown: string = `![${file.name}](${imageUrl})`;

            api.replaceSelection(imageMarkdown);
            toast.success("Image uploaded successfully", { id: toastId });
          } catch (error) {
            console.error("Error uploading image:", error);
            alert("Failed to upload image");
          }
        }
      };

      fileInput.click();
    },
  };

  const customCommands = [
    imageUpload, // Add directly as first command
    ...commands.getCommands().filter((cmd) => cmd.name !== "image"), // Filter out default image command if it exists
  ];

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
                  commands={customCommands}
                />
              </div>
            </div>

            {/* Series Section */}
            <div className="p-4 sm:p-6 md:p-8 border-b border-primaryBrown/10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <IoDocumentTextOutline className="text-xl sm:text-2xl text-primaryBrown" />
                <h2 className="text-lg sm:text-xl font-specialElite text-primaryBrown">
                  Series
                </h2>
              </div>

              <div className="flex gap-3">
                {series.length > 0 ? (
                  <select
                    value={selectedSeries}
                    onChange={(e) => setSelectedSeries(e.target.value)}
                    className="flex-1 p-3 sm:p-4 border border-primaryBrown/20 rounded-lg bg-secondaryBeige/30 text-primaryBrown shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryRed/50 transition-all text-sm sm:text-base"
                  >
                    <option value="">Select a series</option>
                    {series.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="flex-1 p-3 sm:p-4 border border-primaryBrown/20 rounded-lg bg-secondaryBeige/30 text-primaryBrown/60 flex items-center justify-center text-sm sm:text-base">
                    No series available
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setShowNewSeriesModal(true)}
                  className="px-6 py-2.5 sm:px-8 sm:py-3 bg-primaryRed text-white rounded-lg hover:bg-primaryRed/90 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                >
                  <FaPlus className="text-sm" />
                  <span>New Series</span>
                </button>
              </div>
            </div>
            {showNewSeriesModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                  <h3 className="text-xl font-specialElite text-primaryBrown mb-4">
                    Create New Series
                  </h3>
                  <input
                    type="text"
                    value={newSeriesName}
                    onChange={(e) => setNewSeriesName(e.target.value)}
                    placeholder="Enter series name..."
                    className="w-full p-3 border border-primaryBrown/20 rounded-lg mb-4"
                  />
                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowNewSeriesModal(false)}
                      className="px-4 py-2 border border-primaryBrown/20 rounded-lg hover:bg-primaryBrown/10"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleCreateNewSeries}
                      className="px-4 py-2 bg-primaryRed text-white rounded-lg hover:bg-primaryRed/90"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            )}
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
