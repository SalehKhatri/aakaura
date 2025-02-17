import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fonts from "@/config/fonts";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1
            className={`${fonts.merriweather} text-4xl md:text-5xl font-bold text-primaryBrown mt-6 mb-4`}
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            className={`${fonts.playfair} text-3xl md:text-4xl font-semibold text-primaryBrown mt-6 mb-3`}
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            className={`${fonts.playfair} text-2xl font-medium text-primaryBrown mt-5 mb-2`}
            {...props}
          />
        ),
        h4: ({ node, ...props }) => (
          <h4
            className={`${fonts.mulish} text-xl font-medium text-primaryBrown mt-4 mb-2`}
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <p
            className={`${fonts.mulish} text-lg text-primaryBrown/80 leading-relaxed mb-4`}
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul
            className="list-disc pl-6 space-y-2 text-primaryBrown"
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol
            className="list-decimal pl-6 space-y-2 text-primaryBrown"
            {...props}
          />
        ),
        li: ({ node, ...props }) => <li className="ml-4" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote
            className={`${fonts.specialElite} border-l-4 border-primaryRed pl-4 italic text-primaryBrown/80 my-4`}
            {...props}
          />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-primaryBrown" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="italic text-primaryBrown" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a
            className="text-primaryRed underline hover:text-primaryBrown transition"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        hr: () => <hr className="my-6 border-primaryBrown/20" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
