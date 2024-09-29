import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, subscribeWithSelector, persist } from 'zustand/middleware';

import { createImagesSlice } from "~/store/images-slice";
import { ImagesSlice } from "~/store/images-slice";

export type Store = ImagesSlice;

export const useStore = create<Store>()(
	persist(
		devtools(
			subscribeWithSelector(
				immer((...a) => ({
					...createImagesSlice(...a)
				}))
			)
		),
		{ name: "store" }
	)
);


