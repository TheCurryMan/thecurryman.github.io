import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PHOTOS_PATH = path.join(process.cwd(), "src/constants/photos.ts");

export const dynamic = "force-dynamic";

export async function GET() {
  const content = fs.readFileSync(PHOTOS_PATH, "utf-8");

  const photos: Array<{
    id: string;
    date?: string;
    location?: string;
    orientation: string;
  }> = [];

  // Split by photo objects and parse each one
  const objectMatches = content.match(/\{[^{}]+\}/g) || [];

  for (const obj of objectMatches) {
    const idMatch = obj.match(/id:\s*['"]([^'"]+)['"]/);
    const dateMatch = obj.match(/date:\s*['"]([^'"]*)['"]/);
    // Handle location with double quotes (for values with apostrophes) or single quotes
    const locationMatch = obj.match(/location:\s*"([^"]+)"/) || obj.match(/location:\s*'([^']+)'/);
    const orientationMatch = obj.match(/orientation:\s*['"]([^'"]+)['"]/);

    if (idMatch && orientationMatch) {
      photos.push({
        id: idMatch[1],
        date: dateMatch?.[1] || "",
        location: locationMatch?.[1] || "",
        orientation: orientationMatch[1],
      });
    }
  }

  return NextResponse.json(photos);
}

export async function POST(request: Request) {
  const photos = await request.json();

  const content = `export type Photo = {
  id: string;
  date?: string;
  location?: string;
  orientation: 'portrait' | 'landscape';
};

export const photos: Photo[] = [
${photos
  .map(
    (p: { id: string; date?: string; location?: string; orientation: string }) => `  {
    id: '${p.id}',
    date: '${p.date || ""}',
    location: '${(p.location || "").replace(/'/g, "\\'")}',
    orientation: '${p.orientation}',
  }`
  )
  .join(",\n")}
];

const ACCOUNT_HASH = "-53jB08vdBepgZVBL22TNA";

export const cfImage = (id: string, variant = "public") =>
  \`https://imagedelivery.net/\${ACCOUNT_HASH}/\${id}/\${variant}\`;
`;

  fs.writeFileSync(PHOTOS_PATH, content);

  return NextResponse.json({ success: true });
}
