<script lang="ts">
	import { Heart, Copyright } from 'lucide-svelte';

	// Fungsi untuk mendapatkan tahun saat ini
	function getCurrentYear(): string {
		return new Date().getFullYear().toString();
	}

	// Tahun saat ini
	const currentYear = getCurrentYear();
</script>

<section>
	<div>
		<span>Weddify</span>
		made with <Heart fill="red" /> by
		<a href="https://www.instagram.com/karsadigital" target="_blank" rel="noopener noreferrer">
			KarsaKasual
		</a>
	</div>
	<div>
		<span>
			<Copyright /> 2024 - {currentYear} KarsaKasual. All Rights Reserved
		</span>
	</div>
</section>
