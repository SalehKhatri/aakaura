"use client";
import Container from "./ui/Container";
import BlogCard from "./ui/BlogCard";
import Heading from "./ui/Heading";
import Link from "next/link";
import fonts from "@/config/fonts";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import BlogCardSkeleton from "./ui/BlogCardSkelton";
import { Blog } from "@/types/Blog";

interface BlogsProps {
  title?: string;
  blogs: Blog[];
}

export default function Blogs({ title = "Our Thoughts", blogs }: BlogsProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className="py-12">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-8">
          <Heading title={title} />
        </div>

        {/* See More Link - Centered Below Title */}
        <div className="flex justify-center mb-8">
          <Link
            className={`flex items-center justify-center gap-1 text-primaryRed hover:text-red-600 transition ${fonts.mulish} font-semibold text-base md:text-lg`}
            href="/blogs"
          >
            <span>See More</span>
            <BsArrowRight className="w-5 h-5 mt-1 " />
          </Link>
        </div>

        {/* Blog Grid */}
        {isClient ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              768: {
                slidesPerView: 2.3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>
            {/* Mobile - 1 Card */}
            <div className="grid grid-cols-1 md:hidden gap-8 w-[90%]">
              {[...Array(1)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>

            {/* Tablet - 2 Cards */}
            <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-8 md:gap-10 w-[90%]">
              {[...Array(2)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>

            {/* Desktop - 3 Cards */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8 md:gap-10">
              {[...Array(3)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
