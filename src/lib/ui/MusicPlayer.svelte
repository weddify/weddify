<!-- src/lib/ui/MusicPlayer.svelte -->
<script lang="ts">
	import YouTubePlayer from './YouTubePlayer.svelte';
	import { onMount } from 'svelte';
	import { Play, Disc3 } from 'lucide-svelte';

	export let src: string;

	let isYouTube = /youtu\.?be/.test(src);
	let audio: HTMLAudioElement;
	let isPlaying = true;

	// --- AUDIO NATIVE ---
	onMount(() => {
		if (!isYouTube) {
			audio = new Audio(src);
			audio.loop = true;
			audio.play().catch(() => (isPlaying = false));
		}
	});

	function toggle() {
		if (isYouTube) return; // YouTube dikontrol di komponen lain
		if (!audio) return;
		if (audio.paused) {
			audio.play();
			isPlaying = true;
		} else {
			audio.pause();
			isPlaying = false;
		}
	}
</script>

{#if isYouTube}
	{@const id = src.match(/(?:v=|\.be\/)([^&?#]+)/)?.[1]}
	{#if id}
		<YouTubePlayer videoId={id} />
	{/if}
{:else}
	<!-- Floating toggle untuk audio native -->
	<section class="relative mx-auto h-1 w-full max-w-md items-center bg-slate-400 text-center">
		<button
			class="btn btn-circle btn-sm fixed right-6 bottom-6 z-50 max-w-md bg-rose-600 text-white md:right-[37.5%]"
			on:click={toggle}
		>
			<div class="transition-transform duration-300 ease-in-out" class:animate-spin={isPlaying}>
				{#if isPlaying}
					<Disc3 size={18} />
				{:else}
					<Play size={18} />
				{/if}
			</div>
		</button>
	</section>
{/if}
