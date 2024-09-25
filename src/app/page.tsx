import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">{
        [...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} />
          </div>
        ))
      }</div>
     Hello (gallery in progress)
    </main>
  );
}
