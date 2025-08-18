<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav
	class="navbar fixed top-0 right-0 left-0 z-50 mx-auto mt-4 w-full max-w-6xl rounded-lg bg-white/50 px-5 shadow backdrop-blur-sm sm:max-w-8/12"
>
	<div class="navbar-start">
		<a href="/" class=" btn-ghost text-xl font-bold text-rose-600">Weddify</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/" class:active={$page.route.id === '/'}>Home</a></li>
			<li><a href="#features" class:active={$page.route.id === '/features'}>Fitur</a></li>
			<li><a href="#about" class:active={$page.route.id === '/about'}>About</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<!-- Kosong untuk sekarang, bisa ditambahkan button atau search -->
		<div>
			<a href="/login" class="btn">Login</a>
		</div>
	</div>
	<div class="dropdown dropdown-end">
		<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h8m-8 6h16"
				/>
			</svg>
		</div>
		<ul class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
			<li><a href="/" class:active={$page.route.id === '/'}>Home</a></li>
			<li><a href="#features" class:active={$page.route.id === '/features'}>Fitur</a></li>
			<li><a href="#about" class:active={$page.route.id === '/about'}>About</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</div>
</nav>
