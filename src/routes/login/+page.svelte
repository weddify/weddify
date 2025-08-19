<script lang="ts">
	// import TurnsTile from '$lib/ui/TurnsTile.svelte';
</script>

<div class="bg-base-200 flex min-h-screen items-center justify-center p-4">
	<div class="w-full max-w-md">
		<form
			method="POST"
			class="bg-base-100 mx-auto flex w-full max-w-sm flex-col gap-4 rounded-xl border p-6 shadow-lg sm:p-8"
		>
			<div class="form-control w-full">
				<input
					name="email"
					type="email"
					required
					placeholder="Email"
					class="input input-bordered w-full"
				/>
			</div>

			<div class="form-control w-full">
				<input
					name="password"
					type="password"
					required
					placeholder="Password"
					class="input input-bordered w-full"
				/>
			</div>
			<!-- <TurnsTile /> -->
			<button type="submit" class="btn btn-primary mt-2 w-full">Login</button>

			<p class="mt-4 text-center text-sm">
				Belum punya akun?
				<a href="/register" class="link link-primary">Daftar di sini</a>
			</p>
		</form>
	</div>
</div>
