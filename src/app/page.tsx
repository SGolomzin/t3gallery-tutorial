import {SignedIn, SignedOut} from "@clerk/nextjs";
import { getImages } from "~/server/queries";
import ImageCard from "~/components/image-card";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image, index) => (
        <ImageCard image={image} />
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
