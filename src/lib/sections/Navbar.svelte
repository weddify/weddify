<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav
	class="navbar fixed top-0 right-0 left-0 z-50 mx-auto mt-4 w-full max-w-6xl rounded-2xl bg-white/50 px-4 shadow backdrop-blur-sm"
>
	<div class="flex-1">
		<a href="/" class="text-xl font-bold text-rose-600">Weddify</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/" class:active={$page.route.id === '/'}>Home</a></li>
			<li><a href="#features" class:active={$page.route.id === '/features'}>Fitur</a></li>
			<li><a href="#about" class:active={$page.route.id === '/about'}>About</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</div>
</nav>
