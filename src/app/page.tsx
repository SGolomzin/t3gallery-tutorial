import Link from "next/link";
import { db } from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";

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
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-2">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + '-' + index} className="flex w-48 flex-col">
          <img src={image.url}/>
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
     Hello (gallery in progress)
    </main>
  );
}
