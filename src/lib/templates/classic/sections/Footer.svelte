<script lang="ts">
	import { Heart, Copyright } from 'lucide-svelte';

	// Fungsi untuk mendapatkan tahun saat ini
	function getCurrentYear(): string {
		return new Date().getFullYear().toString();
	}

	// Tahun saat ini
	const currentYear = getCurrentYear();
</script>

<section
	class="bg-neutral text-base-200 relative mx-auto w-full max-w-lg items-center px-6 py-6 text-center text-base"
>
	<div class="text-xs">
		<span class="font-semibold">Weddify</span>
		made with <Heart class="inline-block h-4 w-4" fill="red" /> by
		<a
			href="https://www.instagram.com/karsadigital"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:text-accent font-semibold"
		>
			KarsaKasual
		</a>
	</div>
	<div class="text-center text-xs">
		<span class="flex flex-row items-center justify-center gap-1"
			><Copyright size={16} /> 2024 - {currentYear} KarsaKasual. All Rights Reserved</span
		>
	</div>
</section>
