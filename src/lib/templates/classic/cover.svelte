<!--src\lib\templates\classic\cover.svelte-->
<script lang="ts">
	export let groomName: string;
	export let brideName: string;
	export let receptionDate: string;
	export let guestName: string;
	export let onOpen: () => void;
</script>

<section
	class="text-base-100 bg-base-200 relative mx-auto flex h-[100dvh] w-full max-w-lg flex-col items-center justify-between px-6 py-12 text-center"
	style="background-image: url('/16340656_v798-adj-28.jpg'); background-size: cover; background-position: center;"
>
	<div class="absolute inset-0 bg-black/40"></div>

	<div class=" z-10 mb-2 text-4xl font-bold md:text-5xl">
		<h1>The wedding of</h1>
	</div>

	<!-- Bagian Tengah: Nama Mempelai -->
	<div class="z-10 mt-8">
		<h1 class="font-classic text-3xl md:text-4xl">
			{groomName}
			<div class="my-2 text-2xl md:text-3xl">&</div>
			{brideName}
		</h1>
		<p class="mt-4 text-lg">{receptionDate}</p>
	</div>

	<!-- Bagian Bawah: Nama Tamu dan Tombol -->

	<div class="z-10 flex w-full max-w-md flex-col items-center justify-center">
		<p class="my-2 text-sm">Kepada Bapak/Ibu/Saudara/i:</p>
		<div class="glass mb-1 flex h-30 w-60 flex-col justify-center gap-5 rounded-2xl">
			<p class="items-center text-lg font-semibold">{guestName}</p>
		</div>
		<span class="text-[10px] text-gray-600"
			>mohon maaf apabila ada kesalahan dalam penulisan nama atau gelar.</span
		>
		<button class="btn btn-primary z-10 mt-10" on:click={onOpen}> Buka Undangan </button>
	</div>
</section>
