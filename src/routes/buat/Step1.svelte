<script lang="ts">
	import { page } from '$app/stores';

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
	$: host = $page.url.origin;
	$: slug = `${display_groom_name.toLowerCase().replace(/\s+/g, '-')}-${display_bride_name.toLowerCase().replace(/\s+/g, '-')}`;
</script>

<section class="bg-base-200 flex flex-col rounded-xl p-6 shadow-md">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<!-- Mempelai Pria -->
		<div class="space-y-4">
			<h3 class="text-primary mb-4 text-xl font-semibold">Mempelai Pria</h3>

			<label class="form-control w-full">
				<span class="label-text font-medium">Nama Pria</span>
				<input
					type="text"
					bind:value={groom_name}
					on:input={handleTitleName}
					class="input input-bordered w-full"
					required
				/>
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Ayah Pria</span>
				<input
					type="text"
					bind:value={groom_father}
					on:input={handleTitleName}
					class="input input-bordered w-full"
					required
				/>
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Ibu Pria</span>
				<input
					type="text"
					bind:value={groom_mother}
					on:input={handleTitleName}
					class="input input-bordered w-full"
				/>
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Instagram Pria</span>
				<input type="text" bind:value={groom_ig} class="input input-bordered w-full" />
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Foto Pria (URL)</span>
				<input type="text" bind:value={groom_photo_url} class="input input-bordered w-full" />
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Nama Panggilan Pria</span>
				<input
					type="text"
					bind:value={display_groom_name}
					on:input={handleDisplayGroomNameChange}
					class="input input-bordered w-full"
					required
				/>
			</label>
		</div>
		<!-- Mempelai Wanita -->
		<div class="space-y-4">
			<h3 class="text-secondary mb-4 text-xl font-semibold">Mempelai Wanita</h3>

			<label class="form-control w-full">
				<span class="label-text font-medium">Nama Wanita</span>
				<input
					type="text"
					bind:value={bride_name}
					on:input={handleTitleName}
					class="input input-bordered w-full"
					required
				/>
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Ayah Wanita</span>
				<input
					type="text"
					bind:value={bride_father}
					on:input={handleTitleName}
					class="input input-bordered w-full"
				/>
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Ibu Wanita</span>
				<input
					type="text"
					bind:value={bride_mother}
					on:input={handleTitleName}
					class="input input-bordered w-full"
				/>
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Instagram Wanita</span>
				<input type="text" bind:value={bride_ig} class="input input-bordered w-full" />
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Foto Wanita (URL)</span>
				<input type="text" bind:value={bride_photo_url} class="input input-bordered w-full" />
			</label>

			<label class="form-control w-full">
				<span class="label-text font-medium">Nama Panggilan Wanita</span>
				<input
					type="text"
					bind:value={display_bride_name}
					on:input={handleDisplayBrideNameChange}
					class="input input-bordered w-full"
					required
				/>
			</label>
		</div>
	</div>
	<div class="m-2 mx-auto min-w-full items-center justify-center p-2 text-center">
		<label>
			<input type="text" value="{host}/{slug}" readonly class="input input-bordered bg-gray-100" />
		</label>
	</div>
</section>
