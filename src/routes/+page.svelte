<script>
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Navbar from '$lib/sections/Navbar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Features from '$lib/sections/Features.svelte';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main class="bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200">
	<div class="mx-auto max-w-lg md:max-w-10/12">
		<Navbar />
		<Hero />
		<About />
		<Features />
		<Contact />
		<Footer />
	</div>
</main>
