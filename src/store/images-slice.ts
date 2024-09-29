import { StateCreator } from "zustand";
import type { Image } from "~/server/db/schema";

type ImagesState = {
	selectedImages: number[];
};

type ImagesActions = {
	selectImage: (imageId: number) => void;
	unselectImage: (imageId: number) => void;
	reset: () => void;
};

export type ImagesSlice = ImagesState & ImagesActions;

const initialState: ImagesState = {
	selectedImages: [],
};

export const createImagesSlice: StateCreator<
	ImagesSlice,
	[['zustand/immer', never]],
	[],
	ImagesSlice
> = (set, get) => ({
	...initialState,
	selectImage: (imageId) => set((state) => {
		state.selectedImages.push(imageId)
	}),
	unselectImage: (imageId) => set((state) => {
		state.selectedImages = state.selectedImages.filter((id) => id !== imageId)
	}),
	reset: () => set(() => ({ ...initialState }))
})