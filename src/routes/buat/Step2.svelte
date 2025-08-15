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

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	<label class="form-control">
		<span class="label-text">Tanggal Akad</span>
		<input type="date" bind:value={ijab_date} class="input input-bordered" />
	</label>
	<label class="form-control">
		<span class="label-text">Waktu Akad</span>
		<input
			type="text"
			bind:value={ijab_time_range}
			placeholder="09:00 - Selesai"
			class="input input-bordered"
		/>
	</label>
	<label class="form-control md:col-span-2">
		<span class="label-text">Lokasi Akad</span>
		<input bind:value={ijab_location} class="input input-bordered" on:input={handleTitleName} />
	</label>
	<label class="form-control">
		<span class="label-text">Tanggal Resepsi</span>
		<input type="date" bind:value={resepsi_date} class="input input-bordered" required />
	</label>
	<label class="form-control">
		<span class="label-text">Waktu Resepsi</span>
		<input
			type="text"
			bind:value={resepsi_time_range}
			placeholder="19:00 - Selesai"
			class="input input-bordered"
		/>
	</label>
	<label class="form-control md:col-span-2">
		<span class="label-text">Lokasi Resepsi</span>
		<input
			bind:value={resepsi_location}
			class="input input-bordered"
			required
			on:input={handleTitleName}
		/>
	</label>
	<label class="form-control md:col-span-2">
		<span class="label-text">Link Google Maps</span>
		<input bind:value={maps_url} class="input input-bordered" />
	</label>
</div>
