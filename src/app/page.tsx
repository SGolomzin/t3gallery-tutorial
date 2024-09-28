import Link from "next/link";
import { db } from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import { getImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/YUZ4islFbMHtTrViVjK8RlMDFWqCw6PkHQOvmYy5tL9bcnro",
  "https://utfs.io/f/YUZ4islFbMHtqu4qAXTwErh10buzlYj6sGnce4pIDUoRZNSC",
  "https://utfs.io/f/YUZ4islFbMHtvf0fVECuWbTUc2wFB3ZMtykiV9lHeAxS7mu4",
  "https://utfs.io/f/YUZ4islFbMHtE9Kh5M8LRpVzgKHswWklF2BJ1hDT8bXc5Zoq",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images && images.map((image, index) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Link href={`/img/${image.id}`} >
            <Image
              src={image.url}
              width={192}
              height={108}
              style={{ objectFit: "contain" }}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
    return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
