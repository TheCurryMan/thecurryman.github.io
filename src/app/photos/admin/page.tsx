"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cfImage, Photo } from "../../../constants/photos";

export default function PhotosAdmin() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/photos?t=" + Date.now())
      .then((res) => res.json())
      .then((data) => {
        // Sort by date (descending), then by location
        const sorted = [...data].sort((a, b) => {
          const dateCompare = (b.date || "").localeCompare(a.date || "");
          if (dateCompare !== 0) return dateCompare;
          return (a.location || "").localeCompare(b.location || "");
        });
        setPhotos(sorted);
      });
  }, []);

  const updatePhoto = (index: number, field: keyof Photo, value: string) => {
    const updated = [...photos];
    updated[index] = { ...updated[index], [field]: value };
    setPhotos(updated);
  };

  const save = async () => {
    setSaving(true);
    await fetch("/api/photos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(photos),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-serif text-black text-3xl mb-2">Photo Admin</h1>
            <p className="text-gray-500 text-sm">
              Edit photo metadata, then copy and paste into photos.ts
            </p>
          </div>
          <button
            onClick={save}
            disabled={saving}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : saved ? "Saved!" : "Save"}
          </button>
        </div>

        {photos.length === 0 ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <div className="space-y-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="flex gap-6 p-4 border border-gray-200 rounded-lg"
            >
              <div className="w-48 h-32 relative flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                <Image
                  src={cfImage(photo.id)}
                  alt={photo.location || "Photo"}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>

              <div className="flex-1 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={photo.location || ""}
                    onChange={(e) => updatePhoto(index, "location", e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                    placeholder="e.g., San Francisco, CA"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Date (YYYY-MM)
                  </label>
                  <input
                    type="text"
                    value={photo.date || ""}
                    onChange={(e) => updatePhoto(index, "date", e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                    placeholder="e.g., 2025-05"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Orientation
                  </label>
                  <select
                    value={photo.orientation}
                    onChange={(e) =>
                      updatePhoto(index, "orientation", e.target.value as "portrait" | "landscape")
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                  >
                    <option value="landscape">Landscape</option>
                    <option value="portrait">Portrait</option>
                  </select>
                </div>

                <div className="col-span-3">
                  <label className="block text-xs text-gray-500 mb-1">ID</label>
                  <code className="text-xs text-gray-400">{photo.id}</code>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
}
