import Link from "next/link";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import { getImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image, index) => (
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
