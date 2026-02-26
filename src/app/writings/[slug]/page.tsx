import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import path from 'path';
import { Markdown } from '../../../components/markdown';
import { TableOfContents } from '../../../components/table-of-contents';
import { writings } from '../../../constants/writings';

export function generateStaticParams() {
  return writings.map((writing) => ({ slug: writing.slug }));
}

export default async function WritingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const writing = writings.find((w) => w.slug === slug);

  if (!writing) {
    notFound();
  }

  const filePath = path.join(process.cwd(), 'content/writings', `${slug}.md`);

  let content: string;
  try {
    content = await fs.readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <TableOfContents content={content} />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-gray-400 text-sm mb-8">{writing.date}</p>

        <article className="prose prose-sm prose-p:my-3 prose-p:leading-normal prose-headings:mt-6 prose-headings:mb-3 prose-headings:scroll-mt-24 prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-blockquote:not-italic prose-blockquote:my-3 prose-hr:my-6 prose-h1:font-serif prose-h1:text-2xl prose-h1:font-normal prose-h2:font-serif prose-h2:text-xl prose-h2:font-normal prose-h3:font-serif prose-h3:text-lg prose-h3:font-normal prose-h4:font-serif prose-h4:text-base prose-h4:font-normal [&_summary]:cursor-pointer [&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none prose-th:text-left">
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </div>
  );
}
