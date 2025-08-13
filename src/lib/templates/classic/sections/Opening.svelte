<script lang="ts">
	import { indoDate } from '$lib/utils/date.js';
	export let couple;
</script>

<section
	class="bg-base-300 relative mx-auto flex h-dvh max-w-lg flex-row items-center justify-center px-6 py-20 text-center text-base"
>
	<div class="mx-auto max-w-lg grid-cols-1 gap-2 text-center">
		<h1>
			<span class="text-base-content text-3xl font-bold">The Wedding Of</span>
		</h1>
		<div class="flex flex-col items-center text-amber-950">
			<img
				src="https://static.vecteezy.com/system/resources/previews/004/328/836/large_2x/muslim-wedding-couple-illustration-free-vector.jpg"
				alt="Foto mempelai pria"
				class="my-4 h-70 w-40 rounded-full border-2 border-rose-200 object-cover object-top shadow ring-2 ring-rose-600"
			/>
		</div>
		<div>
			<span class="mt-2 flex flex-row items-center justify-center gap-2">
				<h1 class="font-classic text-4xl">{couple.display_groom_name}</h1>
				<p class="text-md">&</p>
				<h1 class="font-classic text-4xl">{couple.display_bride_name}</h1>
			</span>
			<h2 class="mt-2">{indoDate(couple.resepsi_date, ' / ')}</h2>
		</div>
		<div class="my-10"></div>
	</div>
</section>
