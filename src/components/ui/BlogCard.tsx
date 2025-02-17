import React from "react";
import Image from "next/image";
import Link from "next/link";
import fonts from "@/config/fonts";
import { Blog } from "@/types/Blog";
import ReactMarkdown from "react-markdown";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      key={blog.id}
      className="group relative bg-[#FDF6E3] rounded-xl overflow-hidden transition-all duration-500 flex flex-col border border-primaryBrown/20 h-[600px]"
    >
      {/* Image Container - Fixed Height */}
      <div className="relative h-72 w-full overflow-hidden flex-shrink-0">
        <Image
          loading="lazy"
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container - Fixed Height with Scroll */}
      <div className="p-6 flex flex-col h-[calc(600px-288px)] relative">
        {/* Category Tag */}
        <div className="mb-2 flex-shrink-0">
          <span
            className={`${fonts.specialElite} bg-primaryRed text-white px-3 py-1 rounded-full text-xs tracking-wide uppercase`}
          >
            Blog Post
          </span>
        </div>

        {/* Title - Fixed Height */}
        <h3
          className={`${fonts.merriweather} text-2xl md:text-3xl text-primaryBrown mb-3 leading-snug group-hover:text-primaryRed transition-colors duration-300 line-clamp-2 flex-shrink-0`}
        >
          {blog.title}
        </h3>

        {/* Description - Scrollable if needed */}
        <div className="relative flex-grow overflow-hidden mb-12">
          <div
            className={`${fonts.mulish} text-lg text-primaryBrown/80 leading-relaxed line-clamp-3`}
          >
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FDF6E3] to-transparent pointer-events-none" />
        </div>

        {/* Read More Link - Fixed Position */}
        <div className="absolute bottom-6 left-6">
          <span className="inline-flex items-center group/link">
            <span
              className={`${fonts.specialElite} text-primaryRed text-lg relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-primaryRed after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-300`}
            >
              Read More
            </span>
            <svg
              className="w-5 h-5 ml-2 text-primaryRed transform translate-x-0 group-hover/link:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}