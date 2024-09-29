import Link from "next/link";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import type { Image as ImageType } from "~/server/db/schema";

export default function ImageCard(props: { image: ImageType }) {
	return (
		<Card className="w-72">
			<label htmlFor={`${props.image.id}`}>
			<CardHeader className="flex p-0 items-end">
				<Checkbox id={`${props.image.id}`} />
			</CardHeader>
			<CardContent className="p-0">
				<Link href={`/img/${props.image.id}`}>
					<div className="relative w-full h-48">
						<Image
							src={props.image.url}
							width={286}
							height={192}
							className="object-fill h-48"
							alt={props.image.name}
						/>
					</div>
				</Link>
			</CardContent>
			<CardFooter className="pb-0">
				<div>{props.image.name}</div>
			</CardFooter>
			</label>
		</Card>
	);
};