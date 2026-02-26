"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 id={slugify(String(children))}>{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 id={slugify(String(children))}>{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 id={slugify(String(children))}>{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 id={slugify(String(children))}>{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 id={slugify(String(children))}>{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 id={slugify(String(children))}>{children}</h6>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
