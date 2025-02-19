import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fonts from "@/config/fonts";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (props) => (
          <h1
            className={`${fonts.merriweather} text-5xl md:text-6xl font-bold text-primaryBrown mt-8 mb-6 leading-tight text-justify`}
            {...props}
          />
        ),
        h2: (props) => (
          <h2
            className={`${fonts.playfair} text-4xl md:text-5xl font-semibold text-primaryBrown mt-7 mb-5 leading-snug text-justify`}
            {...props}
          />
        ),
        h3: (props) => (
          <h3
            className={`${fonts.playfair} text-3xl font-medium text-primaryBrown mt-6 mb-4 leading-normal text-justify`}
            {...props}
          />
        ),
        h4: (props) => (
          <h4
            className={`${fonts.mulish} text-2xl font-medium text-primaryBrown mt-5 mb-3 leading-normal text-justify`}
            {...props}
          />
        ),
        p: (props) => (
          <p
            className={`${fonts.mulish} text-xl text-primaryBrown/90 leading-loose text-justify mb-5`}
            {...props}
          />
        ),
        ul: (props) => (
          <ul
            className="list-disc pl-8 space-y-3 text-primaryBrown text-xl leading-loose text-justify"
            {...props}
          />
        ),
        ol: (props) => (
          <ol
            className="list-decimal pl-8 space-y-3 text-primaryBrown text-xl leading-loose text-justify"
            {...props}
          />
        ),
        li: (props) => <li className="ml-6" {...props} />,
        blockquote: (props) => (
          <blockquote
            className={`${fonts.specialElite} border-l-4 border-primaryRed pl-6 italic text-primaryBrown/80 my-6 text-2xl leading-loose text-justify`}
            {...props}
          />
        ),
        strong: (props) => (
          <strong className="font-semibold text-primaryBrown" {...props} />
        ),
        em: (props) => <em className="italic text-primaryBrown" {...props} />,
        a: (props) => (
          <a
            className="text-primaryRed underline hover:text-primaryBrown transition"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        hr: () => <hr className="my-8 border-primaryBrown/20" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
