"use client";

import { useState, useEffect } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1") // bold
    .replace(/\*(.+?)\*/g, "$1") // italic
    .replace(/__(.+?)__/g, "$1") // bold
    .replace(/_(.+?)_/g, "$1") // italic
    .replace(/`(.+?)`/g, "$1") // code
    .replace(/\[(.+?)\]\(.+?\)/g, "$1"); // links
}

function extractHeadings(markdown: string): Heading[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    const text = stripMarkdown(rawText);
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ id, text, level });
  }

  return headings;
}

export function TableOfContents({ content }: { content: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const headings = extractHeadings(content);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const minLevel = Math.min(...headings.map((h) => h.level));

  return (
    <div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Collapsed state - dashes */}
      <div
        className={`flex flex-col gap-1.5 p-2 transition-opacity duration-200 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        {headings.map((heading, index) => {
          const isActive = activeId === heading.id;
          const widthByLevel: Record<number, string> = {
            1: "w-6",
            2: "w-5",
            3: "w-4",
            4: "w-3",
            5: "w-2",
            6: "w-2",
          };
          const width = isActive ? "w-6" : widthByLevel[heading.level] || "w-4";
          return (
            <div
              key={index}
              className={`h-0.5 rounded transition-all duration-200 ${
                isActive ? "bg-gray-700" : "bg-gray-300"
              } ${width}`}
            />
          );
        })}
      </div>

      {/* Expanded state - full TOC */}
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur rounded-lg shadow-lg border border-gray-200 p-5 w-72 max-h-[70vh] overflow-y-auto transition-all duration-200 ${
          isHovered
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col">
          {headings.map((heading, index) => {
            const indent = (heading.level - minLevel) * 16;
            const isActive = activeId === heading.id;

            return (
              <a
                key={index}
                href={`#${heading.id}`}
                className="block hover:bg-gray-100 rounded px-2 py-0.5 -mx-2 transition-colors"
                style={{ paddingLeft: indent + 8 }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(heading.id);
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span
                  className={`text-sm leading-relaxed ${
                    isActive ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  {heading.text}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
