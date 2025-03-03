import fonts from "@/config/fonts";

export default function Heading({ title }: { title: string }) {
  {
    return (
      <div>
        <h1
          className={`${fonts.playfair} text-3xl md:text-4xl lg:text-5xl text-primaryBrown font-semibold relative inline-block before:content-['●'] before:text-2xl before:text-primaryBrown/70 before:absolute before:-left-8 before:top-[60%] before:-translate-y-[55%] after:content-['●'] after:text-2xl after:text-primaryBrown/70 after:absolute after:-right-8 after:top-[60%] after:-translate-y-[55%]`}
        >
          {title}
        </h1>

        <div className="w-1/3 h-[2px] bg-primaryRed/70 mx-auto mt-4" />
      </div>
    );
  }
}
