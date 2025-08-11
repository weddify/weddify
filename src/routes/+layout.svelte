<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	onMount(() => AOS.init({ once: false, offset: 120 }));

	let { children } = $props();
	import '../app.css';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
