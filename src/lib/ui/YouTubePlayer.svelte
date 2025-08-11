<!-- src/lib/ui/YouTubePlayer.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { Play, Disc3 } from 'lucide-svelte';

	export let videoId: string;

	let player: YT.Player;
	let isPlaying = true;

	onMount(() => {
		if (!window.YT) {
			const tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/iframe_api';
			document.head.appendChild(tag);
		}

		window.onYouTubeIframeAPIReady = () => {
			player = new YT.Player(`yt-${videoId}`, {
				height: '0',
				width: '0',
				videoId,
				playerVars: { autoplay: 1, loop: 1, playlist: videoId, mute: 0 },
				events: {
					onStateChange: (e: any) => {
						isPlaying = e.data === YT.PlayerState.PLAYING;
					},
				},
			});
		};
	});

	function toggle() {
		if (!player) return;
		isPlaying ? player.pauseVideo() : player.playVideo();
	}
</script>

<section
	class="relative mx-auto flex w-full max-w-lg items-center bg-slate-500 px-6 py-12 text-center"
>
	<button
		class="btn btn-circle btn-sm fixed right-6 bottom-6 z-50 max-w-md bg-rose-600 text-white md:right-[37.5%]"
		on:click={toggle}
		title={isPlaying ? 'Pause' : 'Play'}
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

<div id="yt-{videoId}" class="absolute -left-[9999px]"></div>
