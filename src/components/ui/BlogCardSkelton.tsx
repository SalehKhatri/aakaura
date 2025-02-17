const BlogCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-secondaryBeige rounded-xl overflow-hidden flex flex-col border border-primaryBrown/20">
      {/* Image Skeleton */}
      <div className="h-56 md:h-72 bg-primaryBrown/10"></div>

      {/* Content Skeleton */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Category Skeleton */}
        <div className="mb-2">
          <div className="h-5 w-20 bg-primaryBrown/20 rounded-full"></div>
        </div>

        {/* Title Skeleton */}
        <div className="h-6 w-3/4 bg-primaryBrown/40 rounded-md mb-3"></div>

        {/* Description Skeleton (3 lines) */}
        <div className="h-4 w-full bg-primaryBrown/20 rounded-md mb-2"></div>
        <div className="h-4 w-5/6 bg-primaryBrown/20 rounded-md mb-2"></div>
        <div className="h-4 w-4/5 bg-primaryBrown/20 rounded-md mb-6"></div>

        {/* Read More Skeleton */}
        <div className="h-5 w-24 bg-primaryBrown/30 rounded-md mt-auto"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
