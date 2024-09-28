"use client";

import {SignedIn, SignedOut, SignInButton, SignOutButton, UserButton} from "@clerk/nextjs";
import {UploadButton} from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "~/app/_components/simple-upload-button";

export function TopNav() {
	const router = useRouter();

	return (
		<nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
			<div>Gallery</div>

			<div className="flex flex-row items-center gap-4">
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					{/*<UploadButton endpoint="imageUploader" onClientUploadComplete={() => {*/}
					{/*	router.refresh();*/}
					{/*}}/>*/}
					<SimpleUploadButton />
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	)
}
