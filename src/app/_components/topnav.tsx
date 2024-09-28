import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import { SimpleUploadButton } from "~/app/_components/simple-upload-button";

export function TopNav() {
	return (
		<nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
			<div>Gallery</div>

			<div className="flex flex-row items-center gap-4">
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<SimpleUploadButton />
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	)
}
