import Image from "next/image";
import { photos, cfImage } from "../../constants/photos";

export default function Photos() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto p-4 py-12">
        <h1 className="font-serif text-black text-3xl mb-2">Photos</h1>
        <p className="text-gray-500 text-sm mb-8">
          A collection of moments I&apos;ve captured.
        </p>

        {photos.length === 0 ? (
          <p className="text-gray-400">No photos yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="group">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={cfImage(photo.id)}
                    alt={photo.location || "Photo"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-2 text-gray-500 text-sm text-center">
                  {photo.location && <span>{photo.location}</span>}
                  {photo.location && photo.date && <span> · </span>}
                  {photo.date && <span>{photo.date}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
