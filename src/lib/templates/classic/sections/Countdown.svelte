<!-- src/lib/ui/Countdown.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let target: string; // ISO string dari resepsi_date

	let days = 0;
	let hours = 0;
	let mins = 0;
	let secs = 0;
	let finished = false;

	function tick() {
		const diff = +new Date(target) - Date.now();
		if (diff <= 0) {
			days = hours = mins = secs = 0;
			finished = true;
			return;
		}
		days = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
		mins = Math.floor((diff / 1000 / 60) % 60);
		secs = Math.floor((diff / 1000) % 60);
	}

	onMount(() => {
		tick();
		const iv = setInterval(tick, 1000);
		return () => clearInterval(iv);
	});
</script>

{#if !finished}
	<section
		class="bg-base-100 relative mx-auto w-full max-w-lg items-center px-6 py-12 text-center text-base"
		in:fade={{ duration: 800 }}
	>
		<h2 class="font-classic mb-6 text-center text-4xl">Save The Date</h2>
		<p class="my-5 text-sm">
			Tidak ada yang spesial dalam cerita kami. Tapi kami sangat spesial untuk satu sama lain. Dan
			Kami bersyukur, dipertemukan Allah di waktu terbaik, kini kami menanti hari istimewa kami.
		</p>
		<div class="flex justify-center gap-5">
			{#each [{ label: 'Hari', val: days }, { label: 'Jam', val: hours }, { label: 'Menit', val: mins }, { label: 'Detik', val: secs }] as item}
				<div class="glass w-16 rounded-md p-1 text-center shadow-md">
					<div
						class="bg-primary text-primary-content rounded-md py-3 text-2xl font-bold tracking-wide shadow-sm"
					>
						{item.val.toString().padStart(2, '0')}
					</div>
					<div class="mt-2 text-xs font-semibold">{item.label}</div>
				</div>
			{/each}
		</div>
	</section>
{/if}
