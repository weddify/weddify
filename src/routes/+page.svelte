<script>
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Navbar from '$lib/sections/Navbar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Features from '$lib/sections/Features.svelte';
</script>

<main>
	<div class="mx-auto max-w-lg md:max-w-9/12">
		<Navbar />
		<Hero />
		<About />
		<Features />
		<Contact />
		<Footer />
	</div>
</main>
