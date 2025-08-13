<script lang="ts">
	import { fade } from 'svelte/transition';
	import { animate } from 'motion/mini';
	import { page } from '$app/state';
	import { templateMap } from '$lib/templates';
	import type { PageData } from './$types';
	import MusicPlayer from '$lib/ui/MusicPlayer.svelte';

	export let data: PageData;

	let showCover = true;

	const { couple, canonicalUrl } = data;
	const guestName =
		page.url.searchParams.get('guest') || page.url.searchParams.get('tamu') || 'Tamu Undangan';
	const template = data.couple.template ?? 'classic';
	const { Cover } = templateMap[template] ?? templateMap.classic;

	let coverRef: HTMLElement;

	function handleOpen() {
		if (!coverRef) {
			showCover = false;
			return;
		}

		// jalankan animasi lalu sembunyikan
		animate(
			coverRef,
			{
				y: [0, -window.innerHeight],
				opacity: [1, 0],
			},
			{
				duration: 0.6,
				ease: 'easeInOut',
			}
		).finished.then(() => {
			showCover = false;
		});
	}
</script>

<svelte:head>
	<!-- Basic SEO -->
	<title>The Wedding of {data.couple.display_groom_name} & {data.couple.display_bride_name}</title>
	<meta
		name="description"
		content="Undangan pernikahan {data.couple.display_groom_name} & {data.couple
			.display_bride_name}."
	/>
	<meta
		name="author"
		content="{data.couple.display_groom_name} & {data.couple.display_bride_name}"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content="Weddify" />
	<meta
		property="og:title"
		content="The Wedding of {data.couple.display_groom_name} & {data.couple.display_bride_name}"
	/>
	<meta
		property="og:description"
		content="Undangan pernikahan {data.couple.display_groom_name} & {data.couple
			.display_bride_name}."
	/>
	<meta property="og:image" content="https://weddify-three.vercel.app/og-cover.jpg" />
	<meta
		property="og:image:alt"
		content="The Wedding of {data.couple.display_groom_name} & {data.couple.display_bride_name}"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta
		name="twitter:title"
		content="The Wedding of {data.couple.display_groom_name} & {data.couple.display_bride_name}"
	/>
	<meta
		name="twitter:description"
		content="Undangan pernikahan {data.couple.display_groom_name} & {data.couple
			.display_bride_name}."
	/>
	<meta name="twitter:image" content="https://weddify-three.vercel.app/og-cover.jpg" />
	<meta
		name="twitter:image:alt"
		content="The Wedding of {data.couple.display_groom_name} & {data.couple.display_bride_name}"
	/>

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

	<!-- Responsive -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

{#if showCover}
	<div
		bind:this={coverRef}
		in:fade={{ duration: 0 }}
		out:fade={{ duration: 1 }}
		on:introend={() => (showCover = false)}
	>
		<svelte:component
			this={Cover}
			groomName={data.couple.display_groom_name}
			brideName={data.couple.display_bride_name}
			receptionDate={data.couple.resepsi_date ?? ''}
			{guestName}
			onOpen={handleOpen}
		/>
	</div>
{:else}
	{#await import(`$lib/templates/${template}/+page.svelte`) then mod}
		<mod.default data={{ couple: data.couple }} />
	{/await}
	<MusicPlayer src={data.couple.music_url ?? ''} />
{/if}
