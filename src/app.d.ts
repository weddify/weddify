// src/app.d.ts
declare global {
	interface Window {
		onYouTubeIframeAPIReady?: () => void;
		YT: typeof YT;
	}

	namespace YT {
		enum PlayerState {
			UNSTARTED = -1,
			ENDED = 0,
			PLAYING = 1,
			PAUSED = 2,
			BUFFERING = 3,
			CUED = 5,
		}

		interface OnStateChangeEvent {
			data: PlayerState;
		}

		class Player {
			constructor(id: string, opts: any);
			playVideo(): void;
			pauseVideo(): void;
		}
	}
}

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '$lib/types/supabase';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			session: import('@supabase/supabase-js').Session | null;
		}
	}
}
export {};
