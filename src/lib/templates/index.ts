// src/lib/templates/index.ts
import type { SvelteComponent } from 'svelte';

import ClassicCover from './classic/cover.svelte';
import ModernCover from './modern/cover.svelte';

type CoverProps = {
	groomName: string;
	brideName: string;
	receptionDate: string;
	guestName: string;
	onOpen: () => void;
};

// gunakan SvelteComponent dengan props yang sesuai
export const templateMap: Record<
	string,
	{ Cover: new (...args: any) => SvelteComponent<CoverProps> }
> = {
	classic: { Cover: ClassicCover },
	modern: { Cover: ModernCover }
};
