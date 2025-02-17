import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { FaStar, FaEdit, FaRegStar } from "react-icons/fa";
import { BiCalendarAlt } from "react-icons/bi";
import { Blog } from "@/types/Blog";
import { getAllBlogs } from "@/lib/api";
import { notFound } from "next/navigation";
import { Metadata } from "next";
export const dynamic = "force-dynamic";


export const metadata: Metadata = {
  title: "Admin | Aakaura",
  description: "Manage your blog posts and content.",
};

export default async function Admin() {
  const blogs = await getAllBlogs();

  if (!blogs) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondaryBeige to-secondaryBeige/50 p-3 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 gap-6 md:gap-0">
          <div>
            <h1 className="text-4xl font-bold text-primaryBrown mb-2">
              Admin Dashboard
            </h1>
            <p className="text-primaryBrown/60">
              Manage your blog posts and content
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center gap-2 bg-primaryRed text-white px-6 py-3 rounded-lg hover:bg-primaryRed/90 transition-all duration-300 font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <FiPlus className="text-xl" />
            New Blog
          </Link>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {blogs.length === 0 ? (
            <div className="p-8 text-center text-primaryBrown/70">
              <p className="text-lg">No blogs found.</p>
              <p className="mt-2">
                Create your first blog post to get started!
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] sm:min-w-full">
                <thead>
                  <tr className="border-b border-primaryBeige/30">
                    <th className="px-4 sm:px-6 py-4 text-left text-primaryBrown font-medium">
                      Post
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left text-primaryBrown font-medium">
                      Status
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left text-primaryBrown font-medium">
                      Created
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-right text-primaryBrown font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog: Blog) => (
                    <tr
                      key={blog.id}
                      className="border-b border-primaryBeige/10 hover:bg-primaryBeige/5 transition-colors text-sm sm:text-base"
                    >
                      {/* Post Column */}
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={blog.coverImage}
                              alt={blog.title}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="max-w-[150px] sm:max-w-none">
                            <Link
                              href={`/admin/blogs/${blog.id}`}
                              className="text-primaryBrown font-medium hover:text-primaryRed transition-colors line-clamp-2"
                            >
                              {blog.title}
                            </Link>
                          </div>
                        </div>
                      </td>

                      {/* Status Column */}
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center gap-1 sm:gap-2">
                          {blog.isFeatured ? (
                            <FaStar className="text-yellow-500 text-base sm:text-lg" />
                          ) : (
                            <FaRegStar className="text-primaryBrown/40 text-base sm:text-lg" />
                          )}
                          <span className="text-xs sm:text-sm text-primaryBrown/70">
                            {blog.isFeatured ? "Featured" : "Standard"}
                          </span>
                        </div>
                      </td>

                      {/* Date Column */}
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center gap-1 sm:gap-2 text-primaryBrown/70">
                          <BiCalendarAlt className="text-base sm:text-lg" />
                          <span className="text-xs sm:text-sm">
                            {new Date(blog.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </td>

                      {/* Actions Column */}
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/blogs/${blog.id}`}
                            className="p-2 text-primaryBrown/70 hover:text-primaryRed hover:bg-primaryRed/10 rounded-lg transition-colors"
                          >
                            <FaEdit className="text-base sm:text-lg" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
