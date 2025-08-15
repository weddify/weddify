<script lang="ts">
	// Fungsi untuk mengonversi string ke title case
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

	// Menggabungkan display_groom_name dan display_bride_name menjadi slug
	function generateSlug() {
		slug = `${display_groom_name.toLowerCase()}-${display_bride_name.toLowerCase()}`;
	}

	// Handler untuk mengonversi input display_groom_name ke title case dan generate slug
	function handleDisplayGroomNameChange(event: Event) {
		const input = event.target as HTMLInputElement;
		input.value = toTitleCase(input.value);
		display_groom_name = input.value;
		generateSlug();
	}

	// Handler untuk mengonversi input display_bride_name ke title case dan generate slug
	function handleDisplayBrideNameChange(event: Event) {
		const input = event.target as HTMLInputElement;
		input.value = toTitleCase(input.value);
		display_bride_name = input.value;
		generateSlug();
	}

	// Data form
	export let groom_name = '';
	export let groom_father = '';
	export let groom_mother = '';
	export let groom_ig = '';
	export let groom_photo_url = '';
	export let display_groom_name = '';
	export let bride_name = '';
	export let bride_father = '';
	export let bride_mother = '';
	export let bride_ig = '';
	export let bride_photo_url = '';
	export let display_bride_name = '';
	export let slug = '';
</script>

<section class="flex flex-col">
	<span class="my-4 border-b border-dashed pb-1.5 text-center text-3xl">Data Mempelai</span>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="col-span-1">
			<h3 class="mb-2 text-lg font-bold">Mempelai Pria</h3>
			<label class="form-control">
				<span class="label-text">Nama Pria</span>
				<input
					type="text"
					bind:value={groom_name}
					on:input={handleTitleName}
					class="input input-bordered"
					required
				/>
			</label>
			<label class="form-control">
				<span class="label-text">Ayah Pria</span>
				<input bind:value={groom_father} class="input input-bordered" on:input={handleTitleName} />
			</label>
			<label class="form-control">
				<span class="label-text">Ibu Pria</span>
				<input bind:value={groom_mother} class="input input-bordered" on:input={handleTitleName} />
			</label>
			<label class="form-control">
				<span class="label-text">IG_Pria</span>
				<input bind:value={groom_ig} class="input input-bordered" />
			</label>
			<label class="form-control">
				<span class="label-text">Foto Pria URL</span>
				<input bind:value={groom_photo_url} class="input input-bordered" />
			</label>
			<label class="form-control">
				<span class="label-text">Nama Panggilan Pria</span>
				<input
					type="text"
					bind:value={display_groom_name}
					on:input={handleDisplayGroomNameChange}
					class="input input-bordered"
					required
				/>
			</label>
		</div>
		<div class="col-span-1">
			<h3 class="mb-2 text-lg font-bold">Mempelai Wanita</h3>
			<label class="form-control">
				<span class="label-text">Nama Wanita</span>
				<input
					type="text"
					bind:value={bride_name}
					on:input={handleTitleName}
					class="input input-bordered"
					required
				/>
			</label>
			<label class="form-control">
				<span class="label-text">Ayah Wanita</span>
				<input bind:value={bride_father} class="input input-bordered" on:input={handleTitleName} />
			</label>
			<label class="form-control">
				<span class="label-text">Ibu Wanita</span>
				<input bind:value={bride_mother} class="input input-bordered" on:input={handleTitleName} />
			</label>
			<label class="form-control">
				<span class="label-text">IG_Wanita</span>
				<input bind:value={bride_ig} class="input input-bordered" />
			</label>
			<label class="form-control">
				<span class="label-text">Foto Wanita URL</span>
				<input bind:value={bride_photo_url} class="input input-bordered" />
			</label>
			<label class="form-control">
				<span class="label-text">Nama Panggilan Wanita</span>
				<input
					type="text"
					bind:value={display_bride_name}
					on:input={handleDisplayBrideNameChange}
					class="input input-bordered"
					required
				/>
			</label>
		</div>
	</div>
</section>
