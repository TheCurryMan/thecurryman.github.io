'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cfImage, Photo, photos as unsortedPhotos } from '../../constants/photos';

const photos = [...unsortedPhotos].sort((a, b) => {
  const dateCompare = (b.date || '').localeCompare(a.date || '');
  if (dateCompare !== 0) return dateCompare;
  return (a.location || '').localeCompare(b.location || '');
});

function useWindowSize() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [containerHeight, setContainerHeight] = useState(0);
  const [colPreference, setColPreference] = useState<2 | 3>(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const windowWidth = useWindowSize();

  const calculateLayout = useCallback(() => {
    if (!containerRef.current || itemRefs.current.length === 0 || windowWidth === 0) return;

    const containerWidth = containerRef.current.offsetWidth;
    const gap = 16;
    let cols = 1;
    if (windowWidth >= 640) cols = colPreference;

    const colWidth = (containerWidth - gap * (cols - 1)) / cols;
    const colHeights = new Array(cols).fill(0);
    const newPositions: { x: number; y: number }[] = [];

    photos.forEach((_, index) => {
      // Round-robin to maintain sort order visually (left to right, top to bottom)
      const col = index % cols;
      const x = col * (colWidth + gap);
      const y = colHeights[col];
      newPositions.push({ x, y });

      const item = itemRefs.current[index];
      if (item) {
        colHeights[col] += item.offsetHeight + gap;
      }
    });

    setPositions(newPositions);
    setContainerHeight(Math.max(...colHeights) - gap);
  }, [windowWidth, colPreference]);

  useEffect(() => {
    const images = containerRef.current?.querySelectorAll('img');
    if (!images) return;

    let loaded = 0;
    const onLoad = () => {
      loaded++;
      if (loaded === images.length) {
        // Use requestAnimationFrame to ensure DOM has painted
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            calculateLayout();
          });
        });
      }
    };

    images.forEach((img) => {
      if (img.complete) onLoad();
      else img.addEventListener('load', onLoad);
    });

    return () => images.forEach((img) => img.removeEventListener('load', onLoad));
  }, [calculateLayout]);

  useEffect(() => {
    calculateLayout();
  }, [windowWidth, calculateLayout]);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => {
      calculateLayout();
    });
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [calculateLayout]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedPhoto]);

  const cols = windowWidth >= 640 ? colPreference : 1;
  const gap = 16;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto p-4 py-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="font-serif text-black text-3xl mb-2">Photos</h1>
            <p className="text-gray-500 text-sm">Slices of life that make me smile.</p>
          </div>
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setColPreference(2)}
              className={`px-3 py-1 text-sm rounded ${colPreference === 2 ? 'bg-white text-black shadow-sm' : 'text-gray-500'}`}
            >
              2
            </button>
            <button
              onClick={() => setColPreference(3)}
              className={`px-3 py-1 text-sm rounded ${colPreference === 3 ? 'bg-white text-black shadow-sm' : 'text-gray-500'}`}
            >
              3
            </button>
          </div>
        </div>

        {photos.length === 0 ? (
          <p className="text-gray-400">No photos yet.</p>
        ) : (
          <div
            ref={containerRef}
            className="relative"
            style={{ height: containerHeight || 'auto' }}
          >
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="group cursor-pointer absolute transition-all duration-300"
                style={{
                  width: `calc((100% - ${gap * (cols - 1)}px) / ${cols})`,
                  transform: positions[index]
                    ? `translate(${positions[index].x}px, ${positions[index].y}px)`
                    : undefined,
                  opacity: positions[index] ? 1 : 0,
                }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={cfImage(photo.id, 'highres')}
                    alt={photo.location || 'Photo'}
                    width={photo.orientation === 'portrait' ? 400 : 600}
                    height={photo.orientation === 'portrait' ? 600 : 450}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-start p-4">
                    <div className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.location && <span>{photo.location}</span>}
                      {photo.location && photo.date && <span> · </span>}
                      {photo.date && <span>{photo.date}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-4xl font-light"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
          <div
            className={`relative max-w-5xl w-full ${
              selectedPhoto.orientation === 'portrait'
                ? 'max-h-[85vh] aspect-[2/3]'
                : 'max-h-[80vh] aspect-[4/3]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={cfImage(selectedPhoto.id, 'highres')}
              alt={selectedPhoto.location || 'Photo'}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm">
            {selectedPhoto.location && <span>{selectedPhoto.location}</span>}
            {selectedPhoto.location && selectedPhoto.date && <span> · </span>}
            {selectedPhoto.date && <span>{selectedPhoto.date}</span>}
          </div>
        </div>
      )}
    </div>
  );
}
