interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`container mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
