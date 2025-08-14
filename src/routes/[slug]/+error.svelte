<!-- src/routes/[slug]/+error.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	$: slug = $page.url.pathname.slice(1); // misal beni-rika
</script>

<svelte:head>
	<title>upsss... {slug} belum ada | Weddify</title>
</svelte:head>

<main
	class="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 px-4 py-10 text-center"
>
	<!-- Emoji besar -->
	<span class="text-6xl">🎩💍</span>

	<h1 class="mt-4 text-3xl font-bold text-rose-800 md:text-4xl">
		Wah, undangan <br /> <em class="text-rose-600">“{slug}”</em> belum ter-publish!
	</h1>

	<p class="mt-4 max-w-md text-base text-rose-700 md:text-lg">
		Mungkin kamu & pasanganmu bisa jadi pasangan pertama yang pakai nama itu.
		<br />
		<strong class="font-semibold text-rose-900">
			Jadikan momen spesial kalian lebih berkesan!
		</strong>
	</p>

	<!-- CTA -->
	<a
		href="http://localhost:5173/buat"
		class="btn btn-primary mt-8 rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:scale-105 hover:bg-rose-700 focus:ring-2 focus:ring-rose-400 focus:outline-none"
	>
		🚀 Buat Undangan Digital Sekarang
	</a>

	<!-- Testimoni mini -->
	<figure class="mt-10 max-w-sm rounded-lg bg-white/60 p-4 shadow-sm">
		<blockquote class="text-rose-700 italic">
			“Simple, elegan, dan tamu kami sangat terkesan!”
		</blockquote>
		<figcaption class="mt-2 font-semibold text-rose-800">{slug}</figcaption>
	</figure>

	<!-- Hiasan bunga -->
	<img src="/fl-el.webp" alt="decoration" class="mt-8 w-24 opacity-70" />
</main>
