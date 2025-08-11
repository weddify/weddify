<script lang="ts">
	import { fade } from 'svelte/transition';
	import { animate } from 'motion/mini';

	import { page } from '$app/state';
	import { templateMap } from '$lib/templates';
	import type { PageData } from './$types';
	import MusicPlayer from '$lib/ui/MusicPlayer.svelte';

	export let data: PageData;
	const { couple, canonicalUrl } = data;

	let showCover = true;
	const guestName = page.url.searchParams.get('guest') || 'Tamu Undangan';
	const template = data.couple.template ?? 'classic';
	const { Cover } = templateMap[template] ?? templateMap.classic;

	// meta awal
	// const title = data.couple.meta_title || `${data.couple.groom_name} & ${data.data.couple.bride_name}`;
	// const desc  = data.couple.meta_description;

	// Referensi ke elemen cover
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
	<!-- Basic -->
	<title
		>The Wedding of {data.couple.groom_name.split(' ')[0]} & {data.couple.bride_name.split(
			' '
		)[0]}</title
	>
	<meta
		name="description"
		content="Undangan pernikahan {data.couple.groom_name} & {data.couple.bride_name}."
	/>
	<meta
		name="keywords"
		content="wedding, invitation, {data.couple.bride_name}, {data.couple.bride_name}"
	/>
	<meta name="author" content="{data.couple.groom_name} & {data.couple.bride_name}" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta
		property="og:title"
		content="Wedding – {data.couple.groom_name.split(' ')[0]} & {data.couple.bride_name.split(
			' '
		)[0]}"
	/>
	<meta
		property="og:description"
		content="Undangan pernikahan {data.couple.groom_name} & {data.couple.bride_name}."
	/>
	<meta property="og:image" content="https://weddify-three.vercel.app/og-cover.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta
		name="twitter:title"
		content="Wedding – {data.couple.groom_name.split(' ')[0]} & {data.couple.bride_name.split(
			' '
		)[0]}"
	/>
	<meta
		name="twitter:description"
		content="Undangan pernikahan {data.couple.groom_name} & {data.couple.bride_name}."
	/>
	<meta name="twitter:image" content="https://weddify-three.vercel.app/og-cover.jpg" />

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
			groomName={data.couple.groom_name}
			brideName={data.couple.bride_name}
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
