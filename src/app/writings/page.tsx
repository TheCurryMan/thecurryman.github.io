import Link from "next/link";
import { writings } from "../../constants/writings";

export default function Writings() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto p-4 py-12">
        <h1 className="font-serif text-black text-3xl mb-8">Writings</h1>

        <div className="flex flex-col gap-4">
          {writings.map((writing) => (
            <Link
              key={writing.slug}
              href={`/writings/${writing.slug}`}
              className="group"
            >
              <div className="flex justify-between items-baseline">
                <span className="text-gray-900 group-hover:underline">
                  {writing.title}
                </span>
                <span className="text-gray-400 text-sm">{writing.date}</span>
              </div>
              {writing.description && (
                <p className="text-gray-500 text-sm mt-1">
                  {writing.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
