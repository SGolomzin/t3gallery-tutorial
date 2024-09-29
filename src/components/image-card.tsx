'use client';

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
import { useStore } from "~/store/store";
import { useShallow } from "zustand/react/shallow";
import cn from 'classnames';

export default function ImageCard(props: { image: ImageType }) {
	const { selectedImages, selectImage, unselectImage } = useStore(useShallow((state) => ({
		selectedImages: state.selectedImages,
		selectImage: state.selectImage,
		unselectImage: state.unselectImage,
	})));
	const isSelected = selectedImages.includes(props.image.id);

	function handleSelectImage(id: number) {
		if (isSelected) {
			unselectImage(id);
		} else {
			selectImage(id);
		}
	}

	return (
		<Card className={cn("w-72 hover:border-indigo-500", {
			"border-indigo-50": isSelected
		})}>
			<label htmlFor={`${props.image.id}`}>
			<CardHeader className="flex p-0 items-end h-0">
				<Checkbox
					id={`${props.image.id}`}
					checked={isSelected}
					onClick={() => handleSelectImage(props.image.id)}
					className="invisible"
				/>
			</CardHeader>
			<CardContent className="p-0">
				<Link href={`/img/${props.image.id}`}>
					<div className="relative w-full h-48">
						<Image
							src={props.image.url}
							width={286}
							height={192}
							className="object-fill h-48 rounded-t-lg"
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