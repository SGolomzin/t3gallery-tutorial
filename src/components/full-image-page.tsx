import { deleteImage, getImage } from "~/server/queries";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";

export default async function FullPageImageView(props: { id: number }){
	const image = await getImage(props.id);
	const uploaderInfo = await clerkClient.users.getUser(image.userId);

	return (
		<div className="flex w-full h-full min-w-0">
			<div className="flex-shrink flex justify-center items-center">
				<img src={image.url} alt={image.name} className="object-contain" />
			</div>

			<div className="flex w-96 flex-col border-l">
				<div className={"text-lg border-b p-2 text-center"}>{image.name}</div>
				<div className="flex flex-col p-2">
					<span>Uploaded By</span>
					<span>{uploaderInfo.fullName}</span>
				</div>
				<div className="flex flex-col p-2">
					<span>Created On</span>
					<span>{new Date(image.createdAt).toLocaleDateString()}</span>
				</div>
				<div className="flex flex-col p-2">
					<form action={async () => {
						"use server";

						await deleteImage(props.id);
					}}>
						<Button variant="destructive" type="submit">Delete</Button>
					</form>
				</div>
			</div>
		</div>
	);
}