/**
 * Fetches all images from Cloudflare Images and outputs them for photos.ts
 *
 * Usage:
 *   CLOUDFLARE_ACCOUNT_ID=xxx CLOUDFLARE_API_TOKEN=xxx npx ts-node scripts/sync-photos.ts
 *
 * Get your credentials from:
 *   - Account ID: Cloudflare Dashboard → Images → Overview (in the URL or sidebar)
 *   - API Token: Cloudflare Dashboard → My Profile → API Tokens → Create Token
 *     (use "Read" permission for Cloudflare Images)
 */

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error("Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN");
  process.exit(1);
}

async function fetchAllImages() {
  const images: any[] = [];
  let continuationToken: string | null = null;

  do {
    const url = new URL(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v2`
    );
    if (continuationToken) {
      url.searchParams.set("continuation_token", continuationToken);
    }

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });

    if (!res.ok) {
      console.error("API error:", await res.text());
      process.exit(1);
    }

    const data = await res.json();
    images.push(...data.result.images);
    continuationToken = data.result.continuation_token || null;
  } while (continuationToken);

  return images;
}

async function main() {
  console.log("Fetching images from Cloudflare...\n");
  const images = await fetchAllImages();

  console.log(`Found ${images.length} images.\n`);
  console.log("// Paste this into src/constants/photos.ts:\n");
  console.log("export const photos: Photo[] = [");

  for (const img of images) {
    const uploaded = new Date(img.uploaded).toISOString().split("T")[0];
    console.log(`  {`);
    console.log(`    id: "${img.id}",`);
    console.log(`    title: "",  // TODO: add title`);
    console.log(`    date: "${uploaded}",`);
    console.log(`    // location: "",`);
    console.log(`    // blurb: "",`);
    console.log(`  },`);
  }

  console.log("];");
}

main();
