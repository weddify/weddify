<!-- /routes/test/+page.svelte -->
<script lang="ts">
</script>

<svelte:head>
	<title>Test Section</title>
</svelte:head>

<section
	class="relative mx-auto max-w-[300px] content-center overflow-hidden bg-gray-500 px-4 pb-5 text-violet-200"
>
	<div class="mx-auto grid max-w-lg grid-cols-1 gap-2 text-center md:grid-cols-2">
		<div
			class="z-20 mx-auto mt-[20px] h-[300px] w-[160px] rounded-t-full bg-rose-400/10 px-[20px] py-[24px] text-amber-950 ring-1 ring-rose-400/40 backdrop-blur-sm md:col-span-2"
		>
			<h2 class="font-display mt-3 text-center text-[15px] font-bold text-amber-950">The Groom</h2>

			<div class="flex flex-col items-center text-amber-950">
				<img
					src="https://images.unsplash.com/photo-1553455274-5297e1a79c49?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Foto mempelai pria"
					class="my-4 h-30 w-20 rounded-full border-2 border-rose-200 object-cover object-top shadow ring-2 ring-rose-600"
				/>

				<h3 class="text-[12px] font-bold">Indra Santoso</h3>
				<p class="my-1 text-center text-[7px]">
					Putra dari Bapak Zaifullah, SH dan <br />
					Ibu Nur Aiyni. A. S.IP
				</p>
				<a
					href="https://instagram.com/indragandi"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1 text-[8px] text-blue-600 hover:no-underline"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-2 w-2"
					>
						<path
							d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
						/>
					</svg>
					@indrasantoso
				</a>
			</div>
		</div>
	</div>

	<div class="col-span-1 rounded-lg md:col-span-2">
		<!-- Gambar bunga kiri -->
		<img
			src="/bunga.webp"
			alt="Bunga"
			class="fade-sway absolute -bottom-[2%] -left-6 z-[1] w-[125px] scale-x-[-1]"
		/>

		<!-- Gambar bunga kanan -->
		<img
			src="/bunga.webp"
			alt="Bunga"
			class="fade-sway absolute -right-6 -bottom-[2%] z-[1] w-[125px]"
		/>
	</div>
</section>

<section
	class="relative mx-auto max-w-[300px] content-center overflow-hidden bg-gray-500 px-4 pb-4 text-violet-200"
>
	<div class="mx-auto grid max-w-lg grid-cols-1 gap-2 text-center md:grid-cols-2">
		<div
			class="z-20 mx-auto mt-[20px] h-[300px] w-[160px] rounded-b-full bg-rose-400/10 px-[20px] py-[24px] text-amber-950 ring-1 ring-rose-400/40 backdrop-blur-sm md:col-span-2"
		>
			<h2 class="font-display mt-3 text-center text-[15px] font-bold text-amber-950">The Bride</h2>
			<div class="flex flex-col items-center text-amber-950">
				<img
					src="https://plus.unsplash.com/premium_photo-1675107360237-22fa96b9995b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Foto mempelai Wanita"
					class="my-4 h-30 w-20 rounded-full border-2 border-rose-200 object-cover object-top shadow ring-2 ring-rose-600"
				/>
				<h3 class="text-[12px] font-bold">Dina Sugandi</h3>
				<p class=" my-1 text-center text-[7px]">
					Putra dari Bpk. Fikri alfiyan & <br /> Ibu irma nursiyah
				</p>
				<a
					href="https://instagram.com/indragandi"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1 text-[8px] text-blue-600 hover:no-underline"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-2 w-2"
					>
						<path
							d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
						/>
					</svg>
					@Dinagandi
				</a>
			</div>
		</div>
	</div>

	<div class="col-span-1 rounded-lg md:col-span-2">
		<!-- Gambar bunga kiri -->
		<img
			src="/bunga.webp"
			alt="Bunga"
			class=" absolute -bottom-[2%] -left-6 z-[1] w-[125px] scale-x-[-1]"
		/>

		<!-- Gambar bunga kanan -->
		<img src="/bunga.webp" alt="Bunga" class="absolute -right-6 -bottom-[2%] z-[1] w-[125px]" />
	</div>
</section>

<style>
	section {
		background:
			linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
			url('/16340656_v798-adj-28.jpg') no-repeat center center;
		background-size: cover;
	}
</style>
