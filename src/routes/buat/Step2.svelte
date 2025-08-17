<script lang="ts">
	export let ijab_date = '';
	export let ijab_time_range = '';
	export let ijab_location = '';
	export let resepsi_date = '';
	export let resepsi_time_range = '';
	export let resepsi_location = '';
	export let maps_url = '';

	function toTitleCase(str: string): string {
		return str
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	// Handler untuk mengonversi input ke title case
	function handleTitleName(event: Event) {
		const input = event.target as HTMLInputElement;
		input.value = toTitleCase(input.value);
	}
</script>

<section class="bg-base-200 flex flex-col rounded-xl p-6 shadow-md">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<label class="form-control w-full">
			<span class="label-text font-medium text-gray-700">Tanggal Akad</span>
			<input type="date" bind:value={ijab_date} class="input input-bordered w-full" />
		</label>

		<label class="form-control w-full">
			<span class="label-text font-medium text-gray-700">Waktu Akad</span>
			<input
				type="text"
				bind:value={ijab_time_range}
				placeholder="09:00 - Selesai"
				class="input input-bordered w-full"
			/>
		</label>

		<label class="form-control w-full md:col-span-2">
			<span class="label-text font-medium text-gray-700">Lokasi Akad</span>
			<input
				bind:value={ijab_location}
				class="input input-bordered w-full"
				on:input={handleTitleName}
			/>
		</label>

		<label class="form-control w-full">
			<span class="label-text font-medium text-gray-700">Tanggal Resepsi</span>
			<input type="date" bind:value={resepsi_date} class="input input-bordered w-full" required />
		</label>

		<label class="form-control w-full">
			<span class="label-text font-medium text-gray-700">Waktu Resepsi</span>
			<input
				type="text"
				bind:value={resepsi_time_range}
				placeholder="19:00 - Selesai"
				class="input input-bordered w-full"
			/>
		</label>

		<label class="form-control w-full md:col-span-2">
			<span class="label-text font-medium text-gray-700">Lokasi Resepsi</span>
			<input
				bind:value={resepsi_location}
				class="input input-bordered w-full"
				required
				on:input={handleTitleName}
			/>
		</label>

		<label class="form-control w-full md:col-span-2">
			<span class="label-text font-medium text-gray-700">Link Google Maps</span>
			<input bind:value={maps_url} class="input input-bordered w-full" />
		</label>
	</div>
</section>
