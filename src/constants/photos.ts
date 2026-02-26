export type Photo = {
  id: string;
  date?: string;
  location?: string;
};

export const photos: Photo[] = [
  {
    id: "4561cf42-9575-4d57-c247-3f6af2fd2400",
    date: "2025",
    location: "Trojan Point, CA",
  },
  {
    id: "7be8d36b-39d1-45da-8680-d705c8ca7800",
    date: "2025",
    location: "Trojan Point, CA",
  },
  {
    id: "5e375b29-90a1-476f-86b5-ff0085709200",
    date: "2025",
    location: "Trojan Point, CA",
  },
  {
    id: "241e008f-c872-4713-a302-9ae55d2f8000",
    date: "2025",
    location: "Trojan Point, CA",
  },
  {
    id: "78b899c7-be88-42f8-9b96-73880ec91000",
    date: "2025",
    location: "India",
  },
  {
    id: "f0f746a9-bc81-4071-f8ed-7cf7bdaf9900",
    date: "2025",
    location: "India",
  },
];

const ACCOUNT_HASH = "-53jB08vdBepgZVBL22TNA";

export const cfImage = (id: string, variant = "public") =>
  `https://imagedelivery.net/${ACCOUNT_HASH}/${id}/${variant}`;
